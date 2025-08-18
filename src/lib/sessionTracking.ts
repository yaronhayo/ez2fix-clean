// Client-side session tracking for lead intelligence
import type { SessionTrackingData } from './email';

interface PageVisit {
  url: string;
  title: string;
  timeSpent: number;
  timestamp: string;
}

class SessionTracker {
  private sessionStart: Date;
  private pageVisits: PageVisit[] = [];
  private currentPageStart: Date;
  private currentPage: string;
  private isInitialized = false;
  
  constructor() {
    this.sessionStart = new Date();
    this.currentPageStart = new Date();
    this.currentPage = window.location.pathname;
    this.init();
  }

  private init() {
    if (typeof window === 'undefined' || this.isInitialized) return;
    
    // Track initial page
    this.trackPageView();
    
    // Track page unload to calculate time spent
    window.addEventListener('beforeunload', () => {
      this.finalizeCurrentPage();
    });

    // Track page visibility changes
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.finalizeCurrentPage();
      } else {
        this.currentPageStart = new Date();
      }
    });

    // Track navigation for SPAs
    window.addEventListener('popstate', () => {
      this.handleNavigation();
    });

    this.isInitialized = true;
  }

  private trackPageView() {
    const visit: PageVisit = {
      url: window.location.href,
      title: document.title,
      timeSpent: 0, // Will be updated when leaving page
      timestamp: new Date().toISOString()
    };
    
    this.pageVisits.push(visit);
  }

  private finalizeCurrentPage() {
    if (this.pageVisits.length > 0) {
      const lastVisit = this.pageVisits[this.pageVisits.length - 1];
      const timeSpent = Math.round((new Date().getTime() - this.currentPageStart.getTime()) / 1000);
      lastVisit.timeSpent = Math.max(timeSpent, 0); // Ensure non-negative
    }
  }

  private handleNavigation() {
    this.finalizeCurrentPage();
    
    // Track new page if URL changed
    if (window.location.pathname !== this.currentPage) {
      this.currentPage = window.location.pathname;
      this.currentPageStart = new Date();
      this.trackPageView();
    }
  }

  // Get UTM parameters and traffic source
  private getTrafficSource() {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = document.referrer;
    
    return {
      utmSource: urlParams.get('utm_source') || this.getStoredUtm('utm_source'),
      utmMedium: urlParams.get('utm_medium') || this.getStoredUtm('utm_medium'),
      utmCampaign: urlParams.get('utm_campaign') || this.getStoredUtm('utm_campaign'),
      utmTerm: urlParams.get('utm_term') || this.getStoredUtm('utm_term'),
      utmContent: urlParams.get('utm_content') || this.getStoredUtm('utm_content'),
      referrer: referrer || this.getStoredReferrer()
    };
  }

  private getStoredUtm(param: string): string | null {
    return localStorage.getItem(param) || sessionStorage.getItem(param);
  }

  private getStoredReferrer(): string | null {
    return localStorage.getItem('referrer') || sessionStorage.getItem('referrer');
  }

  private storeTrafficSource() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    // Store UTM parameters
    utmParams.forEach(param => {
      const value = urlParams.get(param);
      if (value) {
        sessionStorage.setItem(param, value);
        // Also store in localStorage for longer tracking
        localStorage.setItem(param, value);
      }
    });

    // Store referrer if it's external
    if (document.referrer && !document.referrer.includes(window.location.hostname)) {
      sessionStorage.setItem('referrer', document.referrer);
      localStorage.setItem('referrer', document.referrer);
    }
  }

  // Detect device type
  private getDeviceType(): 'desktop' | 'tablet' | 'mobile' {
    const userAgent = navigator.userAgent;
    
    if (/tablet|ipad|playbook|silk/i.test(userAgent)) {
      return 'tablet';
    }
    
    if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
      return 'mobile';
    }
    
    return 'desktop';
  }

  // Check if returning visitor
  private isReturningVisitor(): boolean {
    const lastVisit = localStorage.getItem('ez2fix_last_visit');
    if (lastVisit) {
      localStorage.setItem('ez2fix_last_visit', new Date().toISOString());
      return true;
    }
    localStorage.setItem('ez2fix_last_visit', new Date().toISOString());
    return false;
  }

  private getPreviousVisitCount(): number {
    const count = parseInt(localStorage.getItem('ez2fix_visit_count') || '0');
    localStorage.setItem('ez2fix_visit_count', (count + 1).toString());
    return count;
  }

  private getLastVisit(): string | null {
    return localStorage.getItem('ez2fix_last_visit');
  }

  // Get landing page (first page of session)
  private getLandingPage(): string {
    return this.pageVisits.length > 0 ? this.pageVisits[0].url : window.location.href;
  }

  // Public method to get complete session data
  public getSessionData(): SessionTrackingData {
    this.finalizeCurrentPage();
    this.storeTrafficSource();
    
    const trafficSource = this.getTrafficSource();
    const sessionDuration = Math.round((new Date().getTime() - this.sessionStart.getTime()) / 1000);
    
    return {
      // Page tracking
      currentPage: window.location.href,
      referrerPage: document.referrer || undefined,
      landingPage: this.getLandingPage(),
      pagesVisited: [...this.pageVisits],
      
      // Session info
      sessionStart: this.sessionStart.toISOString(),
      sessionDuration: Math.max(sessionDuration, 0),
      totalPageViews: this.pageVisits.length,
      
      // Traffic source
      ...trafficSource,
      
      // Device info
      userAgent: navigator.userAgent,
      screenResolution: `${screen.width}x${screen.height}`,
      deviceType: this.getDeviceType(),
      
      // Location (basic - would need IP geolocation service for more accuracy)
      city: undefined,
      state: undefined,
      country: undefined,
      
      // Behavior
      isReturningVisitor: this.isReturningVisitor(),
      previousVisitCount: this.getPreviousVisitCount(),
      lastVisit: this.getLastVisit() || undefined
    };
  }

  // Update page tracking for SPA navigation
  public trackNavigation(url: string, title?: string) {
    this.handleNavigation();
    if (title) {
      document.title = title;
    }
  }
}

// Global session tracker instance
let sessionTracker: SessionTracker | null = null;

// Initialize session tracking
export function initSessionTracking(): void {
  if (typeof window === 'undefined') return;
  
  if (!sessionTracker) {
    sessionTracker = new SessionTracker();
  }
}

// Get current session data
export function getSessionData(): SessionTrackingData | null {
  if (!sessionTracker) {
    initSessionTracking();
  }
  
  return sessionTracker?.getSessionData() || null;
}

// Track SPA navigation
export function trackNavigation(url: string, title?: string): void {
  sessionTracker?.trackNavigation(url, title);
}

// Auto-initialize when module loads in browser
if (typeof window !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSessionTracking);
  } else {
    initSessionTracking();
  }
}