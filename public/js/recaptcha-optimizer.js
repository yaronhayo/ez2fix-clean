// Ultra-optimized reCAPTCHA loading to reduce 772ms blocking time
class RecaptchaOptimizer {
  constructor() {
    this.loaded = false;
    this.callbacks = [];
    this.loadDelay = 3000; // Delay reCAPTCHA loading
    this.userInteracted = false;
    this.scheduler = window.scheduler || this.createFallbackScheduler();
  }
  
  createFallbackScheduler() {
    return {
      schedule: (task, priority = 'low', delay = 0) => {
        setTimeout(task, delay);
      }
    };
  }
  
  init() {
    // Only load reCAPTCHA when user interacts with forms
    this.setupFormInteractionDetection();
    
    // Fallback loading after significant delay
    setTimeout(() => {
      if (!this.loaded && !this.userInteracted) {
        this.loadRecaptcha();
      }
    }, this.loadDelay);
  }
  
  setupFormInteractionDetection() {
    // Monitor form elements that might need reCAPTCHA
    const formSelectors = [
      'form[data-recaptcha]',
      '.contact-form',
      '.booking-form',
      'input[type="email"]',
      'input[type="tel"]',
      'textarea'
    ];
    
    const detectInteraction = (event) => {
      if (!this.userInteracted) {
        this.userInteracted = true;
        this.scheduler.schedule(() => {
          this.loadRecaptcha();
        }, 'high', 100);
        
        // Remove listeners after first interaction
        document.removeEventListener('focusin', detectInteraction);
        document.removeEventListener('click', handleFormClick);
      }
    };
    
    const handleFormClick = (event) => {
      const target = event.target.closest(formSelectors.join(','));
      if (target) {
        detectInteraction(event);
      }
    };
    
    // Lightweight event delegation
    document.addEventListener('focusin', detectInteraction, { passive: true });
    document.addEventListener('click', handleFormClick, { passive: true });
  }
  
  loadRecaptcha() {
    if (this.loaded) return Promise.resolve();
    
    this.loaded = true;
    
    return new Promise((resolve, reject) => {
      // Ensure scheduler exists before use
      if (!this.scheduler || typeof this.scheduler.schedule !== 'function') {
        this.scheduler = this.createFallbackScheduler();
      }

      // Break reCAPTCHA loading into smaller chunks
      this.scheduler.schedule(() => {
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js?render=6LdFn6krAAAAAHHJIWIEjV5aTM8B19CqF8p8HOcd&onload=recaptchaLoaded';
        script.async = true;
        script.defer = true;
        
        script.onerror = () => reject(new Error('reCAPTCHA load failed'));
        
        // Use micro-scheduling to prevent blocking
        this.scheduler.schedule(() => {
          document.head.appendChild(script);
        }, 'low', 50);
        
      }, 'high');
      
      // Global callback for when reCAPTCHA is ready
      window.recaptchaLoaded = () => {
        this.scheduler.schedule(() => {
          if (window.grecaptcha) {
            window.grecaptcha.ready(() => {
              // Execute pending callbacks
              this.callbacks.forEach(callback => {
                this.scheduler.schedule(callback, 'low');
              });
              this.callbacks = [];
              resolve();
            });
          }
        }, 'low');
      };
    });
  }
  
  executeRecaptcha(action, callback) {
    if (window.grecaptcha && window.grecaptcha.ready) {
      this.scheduler.schedule(() => {
        window.grecaptcha.execute('6LdFn6krAAAAAHHJIWIEjV5aTM8B19CqF8p8HOcd', { action })
          .then(callback);
      }, 'low');
    } else {
      this.callbacks.push(() => {
        this.executeRecaptcha(action, callback);
      });
      this.loadRecaptcha();
    }
  }
  
  // Optimize reCAPTCHA badge positioning to prevent layout shift
  optimizeBadgePosition() {
    this.scheduler.schedule(() => {
      const badge = document.querySelector('.grecaptcha-badge');
      if (badge) {
        badge.style.contain = 'layout style';
        badge.style.transform = 'translateZ(0)';
        badge.style.willChange = 'transform';
      }
    }, 'low', 100);
  }
}

// Initialize optimized reCAPTCHA loading
const recaptchaOptimizer = new RecaptchaOptimizer();

// Start optimization when DOM is ready or immediately if already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => recaptchaOptimizer.init());
} else {
  recaptchaOptimizer.init();
}

// Export for global access
window.recaptchaOptimizer = recaptchaOptimizer;