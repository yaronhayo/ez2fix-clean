// Google reCAPTCHA v3 Integration
import { clientEnv, serverEnv } from '@/config/env';

// Client-side: Load and initialize reCAPTCHA
export function loadRecaptcha(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('reCAPTCHA can only be loaded on client side'));
      return;
    }

    // If no site key is configured, skip reCAPTCHA
    if (!clientEnv.recaptcha.siteKey) {
      console.warn('reCAPTCHA site key not configured - form will work without CAPTCHA protection');
      resolve();
      return;
    }

    // Check if already loaded
    if (window.grecaptcha) {
      resolve();
      return;
    }

    // Load the script
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${clientEnv.recaptcha.siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      // Wait for grecaptcha to be ready
      window.grecaptcha.ready(() => {
        resolve();
      });
    };

    script.onerror = () => {
      reject(new Error('Failed to load reCAPTCHA script'));
    };

    document.head.appendChild(script);
  });
}

// Client-side: Execute reCAPTCHA and get token
export async function executeRecaptcha(action: string = 'submit'): Promise<string> {
  if (typeof window === 'undefined') {
    throw new Error('reCAPTCHA can only be executed on client side');
  }

  // If no site key is configured, return a placeholder token
  if (!clientEnv.recaptcha.siteKey) {
    console.warn('reCAPTCHA site key not configured - returning placeholder token');
    return 'no-recaptcha-configured';
  }

  if (!window.grecaptcha) {
    throw new Error('reCAPTCHA not loaded');
  }

  try {
    const token = await window.grecaptcha.execute(clientEnv.recaptcha.siteKey, {
      action,
    });
    return token;
  } catch (error) {
    throw new Error('Failed to execute reCAPTCHA');
  }
}

// Server-side: Verify reCAPTCHA token
export async function verifyRecaptcha(
  token: string,
  expectedAction?: string,
  minimumScore: number = 0.5
): Promise<{ success: boolean; score?: number; action?: string; error?: string }> {
  try {
    // If no secret key is configured, skip verification but allow form to work
    if (!serverEnv.recaptcha.secretKey) {
      console.warn('reCAPTCHA secret key not configured - skipping verification');
      return {
        success: true,
        error: 'reCAPTCHA not configured but form allowed'
      };
    }

    // If placeholder token from client, skip verification
    if (token === 'no-recaptcha-configured') {
      console.warn('Placeholder reCAPTCHA token received - skipping verification');
      return {
        success: true,
        error: 'reCAPTCHA not configured but form allowed'
      };
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: serverEnv.recaptcha.secretKey,
        response: token,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      return {
        success: false,
        error: 'reCAPTCHA verification failed',
      };
    }

    // Check score (v3 only)
    if (data.score !== undefined && data.score < minimumScore) {
      return {
        success: false,
        score: data.score,
        error: `reCAPTCHA score too low: ${data.score}`,
      };
    }

    // Check action if specified
    if (expectedAction && data.action !== expectedAction) {
      return {
        success: false,
        action: data.action,
        error: `reCAPTCHA action mismatch: expected ${expectedAction}, got ${data.action}`,
      };
    }

    return {
      success: true,
      score: data.score,
      action: data.action,
    };
  } catch (error) {
    return {
      success: false,
      error: 'reCAPTCHA verification request failed',
    };
  }
}

// Type definitions for reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}