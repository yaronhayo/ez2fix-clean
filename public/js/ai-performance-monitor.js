// AI-Compatible Performance Monitoring & Optimization
// Monitors Core Web Vitals and optimizes for AI bot experience

(function() {
  'use strict';

  // Performance monitoring with AI bot detection
  function initPerformanceMonitoring() {
    console.log('🤖 Initializing AI-compatible performance monitoring...');

    // AI Bot Detection
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

    const isAIBot = detectAIBot();

    // Optimize content delivery for AI consumption
    if (isAIBot) {
      document.body.classList.add('ai-bot-optimized');
      console.log('🤖 AI Bot detected - applying optimizations');
      
      // Enhance structured data visibility
      const structuredData = document.querySelectorAll('[type="application/ld+json"]');
      structuredData.forEach((script, index) => {
        script.setAttribute('data-ai-readable', 'true');
        script.setAttribute('data-schema-type', `schema-${index}`);
      });
      
      // Add semantic landmarks for better AI understanding
      document.querySelectorAll('section').forEach((section, index) => {
        section.setAttribute('data-section-id', `section-${index}`);
        section.setAttribute('role', 'region');
        
        const heading = section.querySelector('h1, h2, h3, h4, h5, h6');
        if (heading) {
          section.setAttribute('aria-label', heading.textContent.trim());
        }
      });

      // Mark important content for AI processing
      document.querySelectorAll('[class*="service"], [class*="contact"], [class*="hours"]').forEach(element => {
        element.classList.add('ai-important-content');
      });

      // Add voice-search optimized classes
      document.querySelectorAll('p, div').forEach(element => {
        const text = element.textContent.toLowerCase();
        if (text.includes('garage door repair') || text.includes('emergency') || text.includes('licensed')) {
          element.classList.add('voice-search-relevant');
        }
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

    // Load Web Vitals library dynamically
    function loadWebVitals() {
      if (typeof webVitals !== 'undefined') {
        // Web Vitals already loaded
        initWebVitalsTracking();
        return;
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
          console.warn('LCP observer failed:', e);
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
          console.warn('FID observer failed:', e);
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

    // Enhanced error tracking for AI bots
    window.addEventListener('error', (event) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
          event_category: isAIBot ? 'AI Bot Errors' : 'JavaScript Errors',
          event_label: event.message,
          value: 1
        });
      }
      
      if (isAIBot) {
        console.error('🤖 Error encountered by AI bot:', event.message);
      }
    });

    // Performance hints for AI crawlers
    if (isAIBot) {
      // Add performance hints to document
      const performanceHints = document.createElement('meta');
      performanceHints.name = 'ai-performance-optimized';
      performanceHints.content = 'true';
      document.head.appendChild(performanceHints);

      // Mark render-critical content
      document.querySelectorAll('h1, h2, .service-description, .contact-info').forEach(element => {
        element.setAttribute('data-render-priority', 'high');
      });
    }

    // Initialize tracking
    loadWebVitals();
  }

  // AI Content Optimization
  function optimizeForAI() {
    // Add microdata attributes for better AI understanding
    document.querySelectorAll('[itemscope]').forEach(element => {
      element.setAttribute('data-ai-structured', 'true');
    });

    // Enhance tables with semantic markup
    document.querySelectorAll('table').forEach(table => {
      table.setAttribute('role', 'table');
      const caption = table.querySelector('caption');
      if (!caption && table.querySelector('th')) {
        const firstRow = table.querySelector('tr');
        if (firstRow) {
          table.setAttribute('aria-label', 'Data table');
        }
      }
    });

    // Add landmark roles for navigation
    document.querySelectorAll('nav').forEach(nav => {
      if (!nav.getAttribute('role')) {
        nav.setAttribute('role', 'navigation');
      }
    });

    // Enhance lists with semantic information
    document.querySelectorAll('ul, ol').forEach(list => {
      const items = list.querySelectorAll('li');
      if (items.length > 0) {
        list.setAttribute('data-list-count', items.length);
        
        // Mark service lists specially
        const hasServiceContent = Array.from(items).some(item => 
          item.textContent.toLowerCase().includes('garage door') || 
          item.textContent.toLowerCase().includes('repair') ||
          item.textContent.toLowerCase().includes('installation')
        );
        
        if (hasServiceContent) {
          list.classList.add('service-list');
          list.setAttribute('data-content-type', 'services');
        }
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initPerformanceMonitoring();
      optimizeForAI();
    });
  } else {
    initPerformanceMonitoring();
    optimizeForAI();
  }

  // Expose functions globally for debugging
  if (typeof window !== 'undefined') {
    window.ez2fixAI = {
      detectAIBot: function() {
        const userAgent = navigator.userAgent.toLowerCase();
        const aiBots = ['googlebot', 'bingbot', 'gptbot', 'claude', 'anthropic', 'openai'];
        return aiBots.some(bot => userAgent.includes(bot));
      },
      optimizeForAI: optimizeForAI,
      version: '1.0.0'
    };
  }

  console.log('✅ AI Performance Monitor initialized');
})();