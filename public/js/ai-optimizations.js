// AI Content Optimization Module - Loaded on demand for AI bots
// This module contains non-critical AI optimizations that can be loaded separately

export function optimizeForAI() {
  console.log('🤖 Loading AI-specific optimizations...');
  
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

  // Enhanced structured data visibility
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

  // Add performance hints to document
  const performanceHints = document.createElement('meta');
  performanceHints.name = 'ai-performance-optimized';
  performanceHints.content = 'true';
  document.head.appendChild(performanceHints);

  // Mark render-critical content
  document.querySelectorAll('h1, h2, .service-description, .contact-info').forEach(element => {
    element.setAttribute('data-render-priority', 'high');
  });

  console.log('✅ AI optimizations completed');
}

// Bot detection utility
export function detectAIBot() {
  const userAgent = navigator.userAgent.toLowerCase();
  const aiBots = [
    'googlebot', 'bingbot', 'gptbot', 'claude', 'anthropic', 
    'openai', 'chatgpt', 'google-extended', 'ccbot', 'facebookexternalhit',
    'twitterbot', 'linkedinbot', 'whatsapp', 'alexa', 'speechbot',
    'slurp', 'duckduckbot'
  ];
  
  return aiBots.some(bot => userAgent.includes(bot));
}

// Enhanced error tracking for AI bots
export function setupAIBotErrorTracking() {
  window.addEventListener('error', (event) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'javascript_error', {
        event_category: detectAIBot() ? 'AI Bot Errors' : 'JavaScript Errors',
        event_label: event.message,
        value: 1
      });
    }
    
    if (detectAIBot()) {
      console.error('🤖 Error encountered by AI bot:', event.message);
    }
  });
}