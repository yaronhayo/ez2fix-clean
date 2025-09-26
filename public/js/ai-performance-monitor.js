// AI-Compatible Performance Monitoring & Optimization
// Monitors Core Web Vitals and optimizes for AI bot experience

(function() {
  'use strict';

  // AI Bot Detection - moved to outer scope for global access
  function detectAIBot() {
    const userAgent = navigator.userAgent.toLowerCase();
    const aiBots = [
      'googlebot', 'bingbot', 'gptbot', 'claude', 'anthropic',
      'openai', 'chatgpt', 'google-extended', 'ccbot', 'facebookexternalhit',
      'twitterbot', 'linkedinbot', 'whatsapp', 'alexa', 'speechbot',
      'slurp', 'duckduckbot'
    ];

    return aiBots.some(bot => userAgent.includes(bot));
  }

  // Performance monitoring with AI bot detection
  function initPerformanceMonitoring() {
    console.log('🤖 Initializing AI-compatible performance monitoring...');

    const isAIBot = detectAIBot();

    // Optimize content delivery for AI consumption with code splitting
    if (isAIBot) {
      document.body.classList.add('ai-bot-optimized');
      console.log('🤖 AI Bot detected - loading AI optimizations module');
      
      // Load AI optimization module dynamically
      import('/js/ai-optimizations.js')
        .then(module => {
          module.optimizeForAI();
          module.setupAIBotErrorTracking();
        })
        .catch(error => {
          // Failed to load AI optimizations module (silent fallback)
          // Fallback: basic optimizations
          document.querySelectorAll('[type="application/ld+json"]').forEach((script, index) => {
            script.setAttribute('data-ai-readable', 'true');
          });
        });
    }

    // Core Web Vitals tracking function
    function sendToAnalytics(metric) {
      // Standard analytics tracking
      if (typeof gtag !== 'undefined') {
        gtag('event', metric.name, {
          event_category: 'Web Vitals',
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_label: metric.id,
          non_interaction: true
        });

        // Special tracking for AI bots
        if (isAIBot) {
          gtag('event', 'bot_performance', {
            event_category: 'AI Bots',
            metric_name: metric.name,
            metric_value: metric.value,
            user_agent: navigator.userAgent,
            bot_type: navigator.userAgent.toLowerCase().includes('google') ? 'Google' : 'Other'
          });
        }
      }

      // Console logging for development
      console.log(`📊 ${metric.name}:`, Math.round(metric.value * 100) / 100, metric.rating || 'good');
    }

    // Load Web Vitals library dynamically with code splitting
    async function loadWebVitals() {
      if (typeof webVitals !== 'undefined') {
        // Web Vitals already loaded
        initWebVitalsTracking();
        return;
      }

      // Try to load Web Vitals library dynamically
      try {
        const webVitalsModule = await import('https://unpkg.com/web-vitals@4/dist/web-vitals.js');
        if (webVitalsModule && webVitalsModule.getCLS) {
          window.webVitals = webVitalsModule;
          initWebVitalsTracking();
          return;
        }
      } catch (error) {
        // Web Vitals library failed to load, using fallback observers (silent fallback)
      }

      // Fallback: Create basic performance observer
      if ('PerformanceObserver' in window) {
        // Track Largest Contentful Paint
        try {
          const lcpObserver = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            const lastEntry = entries[entries.length - 1];
            sendToAnalytics({
              name: 'LCP',
              value: lastEntry.startTime,
              id: 'fallback-lcp',
              rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'
            });
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // LCP observer failed (silent fallback)
        }

        // Track First Input Delay
        try {
          const fidObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              sendToAnalytics({
                name: 'FID',
                value: entry.processingStart - entry.startTime,
                id: 'fallback-fid',
                rating: (entry.processingStart - entry.startTime) < 100 ? 'good' : 
                       (entry.processingStart - entry.startTime) < 300 ? 'needs-improvement' : 'poor'
              });
            }
          });
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID observer failed (silent fallback)
        }

        // Track Cumulative Layout Shift
        try {
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            }
            
            sendToAnalytics({
              name: 'CLS',
              value: clsValue,
              id: 'fallback-cls',
              rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
            });
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.warn('CLS observer failed:', e);
        }
      }
    }

    // Initialize Web Vitals tracking if available
    function initWebVitalsTracking() {
      try {
        if (typeof webVitals !== 'undefined') {
          webVitals.getCLS(sendToAnalytics);
          webVitals.getFID(sendToAnalytics);
          webVitals.getFCP(sendToAnalytics);
          webVitals.getLCP(sendToAnalytics);
          webVitals.getTTFB(sendToAnalytics);
          console.log('✅ Web Vitals tracking initialized');
        }
      } catch (error) {
        console.warn('Web Vitals initialization failed:', error);
        loadWebVitals(); // Fallback to basic observers
      }
    }

    // Track page load performance
    window.addEventListener('load', () => {
      // Track load time
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      sendToAnalytics({
        name: 'PAGE_LOAD',
        value: loadTime,
        id: 'page-load-time'
      });

      // Track resource loading for AI bots
      if (isAIBot) {
        const resources = performance.getEntriesByType('resource');
        const slowResources = resources.filter(resource => resource.duration > 1000);
        
        if (slowResources.length > 0) {
          console.log('🐌 Slow resources detected for AI bot:', slowResources.length);
          
          if (typeof gtag !== 'undefined') {
            gtag('event', 'slow_resources_for_bot', {
              event_category: 'AI Bot Performance',
              value: slowResources.length
            });
          }
        }
      }
    });

    // Enhanced error tracking for non-AI bots (AI bot errors handled by AI optimization module)
    if (!isAIBot) {
      window.addEventListener('error', (event) => {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'javascript_error', {
            event_category: 'JavaScript Errors',
            event_label: event.message,
            value: 1
          });
        }
      });
    }

    // Performance hints for AI crawlers are handled by the AI optimizations module

    // Initialize tracking
    loadWebVitals();
  }

  // AI Content Optimization is now handled by the separate ai-optimizations.js module

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initPerformanceMonitoring();
    });
  } else {
    initPerformanceMonitoring();
  }

  // Expose functions globally for debugging
  if (typeof window !== 'undefined') {
    window.ez2fixAI = {
      detectAIBot: detectAIBot,
      loadAIOptimizations: () => import('/js/ai-optimizations.js'),
      version: '2.0.0'
    };
  }

  console.log('✅ AI Performance Monitor initialized');
})();