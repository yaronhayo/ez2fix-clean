// Runtime Performance Optimizer - Reduces JavaScript execution time
// This script monitors and optimizes JavaScript execution to prevent long tasks

class PerformanceOptimizer {
  constructor() {
    this.taskQueue = [];
    this.isProcessing = false;
    this.maxTaskTime = 16; // Aim for 60fps
    this.longTaskThreshold = 50; // Report tasks over 50ms
    this.init();
  }

  init() {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      this.setupLongTaskObserver();
    }

    // Optimize existing scripts
    this.optimizeExistingScripts();

    // Setup adaptive loading
    this.setupAdaptiveLoading();
  }

  setupLongTaskObserver() {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > this.longTaskThreshold) {
            // Track long tasks silently for optimization without console warnings

            // If it's a script evaluation, try to defer similar tasks
            if (entry.name === 'script' || entry.name === 'evaluate-script') {
              this.handleLongScriptTask(entry);
            }
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (e) {
      console.warn('Long task observer not supported');
    }
  }

  handleLongScriptTask(entry) {
    // Defer any pending third-party script initializations
    if (window.gtag && typeof window.gtag === 'function') {
      this.deferGtagCalls();
    }
    
    if (window.clarity && typeof window.clarity === 'function') {
      this.deferClarityCalls();
    }
  }

  deferGtagCalls() {
    const originalGtag = window.gtag;
    const deferredCalls = [];

    window.gtag = function(...args) {
      // Queue non-critical gtag calls
      if (args[0] === 'event' || args[0] === 'config') {
        deferredCalls.push(args);
        return;
      }
      // Execute critical calls immediately
      return originalGtag.apply(this, args);
    };

    // Process deferred calls during idle time
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        deferredCalls.forEach(args => originalGtag.apply(window, args));
        window.gtag = originalGtag; // Restore original function
      });
    } else {
      setTimeout(() => {
        deferredCalls.forEach(args => originalGtag.apply(window, args));
        window.gtag = originalGtag;
      }, 100);
    }
  }

  deferClarityCalls() {
    const originalClarity = window.clarity;
    
    if (originalClarity) {
      // Wrap clarity to defer non-critical calls
      window.clarity = function(action, ...args) {
        if (action === 'set' || action === 'event') {
          // Defer these calls
          if ('requestIdleCallback' in window) {
            requestIdleCallback(() => originalClarity(action, ...args));
          } else {
            setTimeout(() => originalClarity(action, ...args), 50);
          }
          return;
        }
        // Execute other calls immediately
        return originalClarity.apply(this, [action, ...args]);
      };
    }
  }

  optimizeExistingScripts() {
    // Defer any heavy DOM operations
    this.deferHeavyDOMOperations();
    
    // Optimize third-party script loading
    this.optimizeThirdPartyScripts();
  }

  deferHeavyDOMOperations() {
    // Defer any potential heavy queries
    const heavyQueries = [
      'querySelectorAll("[class*=\\"transition\\"]")',
      'querySelectorAll(".hover\\\\:")',
      'querySelectorAll("[style*=\\"transform\\"]")'
    ];

    heavyQueries.forEach(query => {
      this.scheduleTask(() => {
        try {
          const elements = document.querySelectorAll(query.replace(/\\\\/g, ''));
          elements.forEach(el => {
            // Add performance optimizations
            el.style.willChange = 'auto';
            if (el.classList.contains('transition')) {
              el.style.contain = 'layout style';
            }
          });
        } catch (e) {
          // Ignore query errors
        }
      });
    });
  }

  optimizeThirdPartyScripts() {
    // Monitor for script insertions and optimize them
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.tagName === 'SCRIPT' && node.src) {
            this.optimizeScript(node);
          }
        });
      });
    });

    observer.observe(document.head, { childList: true });
    observer.observe(document.body, { childList: true });
  }

  optimizeScript(script) {
    const src = script.src;
    
    // Add loading optimizations for known heavy scripts
    if (src.includes('googletagmanager.com') || 
        src.includes('clarity.ms') || 
        src.includes('gstatic.com')) {
      
      // Ensure async loading
      script.async = true;
      
      // Add error handling to prevent blocking (silent)
      script.onerror = () => {
        // Handle script loading failures silently
        script.remove();
      };

      // Add timeout to prevent hanging
      const timeout = setTimeout(() => {
        if (!script.loaded) {
          // Handle script timeout silently
          script.remove();
        }
      }, 10000);
      
      script.onload = () => {
        script.loaded = true;
        clearTimeout(timeout);
      };
    }
  }

  setupAdaptiveLoading() {
    // Monitor connection and CPU to adapt loading strategy
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Very aggressive deferring for slow connections
        this.maxTaskTime = 8;
        this.deferAllNonCriticalScripts();
      } else if (connection.effectiveType === '3g') {
        // Moderate deferring for 3G
        this.maxTaskTime = 12;
      }
    }

    // Monitor device memory if available
    if ('deviceMemory' in navigator && navigator.deviceMemory < 4) {
      // Reduce task time for low-memory devices
      this.maxTaskTime = Math.max(8, this.maxTaskTime - 4);
      this.deferAllNonCriticalScripts();
    }
  }

  deferAllNonCriticalScripts() {
    // Find and defer any remaining heavy scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = script.src;
      if (src.includes('clarity') || 
          src.includes('gtag') || 
          src.includes('googletagmanager')) {
        
        // Move to end of processing queue
        script.remove();
        this.scheduleTask(() => {
          document.head.appendChild(script);
        }, 5000); // 5 second delay
      }
    });
  }

  scheduleTask(task, delay = 0) {
    if (delay > 0) {
      setTimeout(() => this.scheduleTask(task), delay);
      return;
    }

    this.taskQueue.push(task);
    if (!this.isProcessing) {
      this.processQueue();
    }
  }

  processQueue() {
    this.isProcessing = true;
    
    const processChunk = () => {
      const start = performance.now();
      
      while (this.taskQueue.length > 0 && 
             (performance.now() - start) < this.maxTaskTime) {
        const task = this.taskQueue.shift();
        try {
          task();
        } catch (e) {
          // Task failed (handled silently)
        }
      }
      
      if (this.taskQueue.length > 0) {
        // Use requestIdleCallback if available, otherwise setTimeout
        if ('requestIdleCallback' in window) {
          requestIdleCallback(processChunk, { timeout: 1000 });
        } else {
          setTimeout(processChunk, 16);
        }
      } else {
        this.isProcessing = false;
      }
    };
    
    processChunk();
  }

  // Public method to schedule external tasks
  defer(task, priority = 'normal') {
    if (priority === 'high') {
      this.taskQueue.unshift(task);
    } else {
      this.taskQueue.push(task);
    }
    
    if (!this.isProcessing) {
      this.processQueue();
    }
  }
}

// Initialize optimizer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.performanceOptimizer = new PerformanceOptimizer();
  });
} else {
  window.performanceOptimizer = new PerformanceOptimizer();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceOptimizer;
}