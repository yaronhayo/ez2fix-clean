// Centralized redirect configuration
// This file manages all permanent (301) redirects from old website URLs

export interface RedirectRule {
  from: string;
  to: string;
  status?: number;
  type: 'exact' | 'pattern' | 'catchall';
  description?: string;
}

// Redirects for pages that have direct correlations
export const pageRedirects: RedirectRule[] = [
  // Home page variations
  {
    from: '/index.html',
    to: '/',
    type: 'exact',
    description: 'Old index.html to home page'
  },
  {
    from: '/home',
    to: '/',
    type: 'exact',
    description: 'Old home page to new home'
  },

  // Actual old website URLs - Core pages
  {
    from: '/about-us/',
    to: '/about',
    type: 'exact',
    description: 'Old about us page'
  },
  {
    from: '/contact-us/',
    to: '/contact',
    type: 'exact',
    description: 'Old contact us page'
  },
  {
    from: '/our-services/',
    to: '/services',
    type: 'exact',
    description: 'Old services page'
  },
  {
    from: '/sample-page/',
    to: '/',
    type: 'exact',
    description: 'Old sample page to home'
  },
  {
    from: '/feed/',
    to: '/',
    type: 'exact',
    description: 'Old RSS feed to home'
  },

  // Actual old website URLs - Service pages with exact correlations
  {
    from: '/garage-doors-repair/',
    to: '/services/general-garage-door-repair',
    type: 'exact',
    description: 'Old garage doors repair page'
  },
  {
    from: '/spring-repair/',
    to: '/services/garage-door-spring-repair',
    type: 'exact',
    description: 'Old spring repair page'
  },
  {
    from: '/broken-garage-door-spring-repair-replacement/',
    to: '/services/garage-door-spring-repair',
    type: 'exact',
    description: 'Old broken spring repair page'
  },
  {
    from: '/garage-door-openers/',
    to: '/services/garage-door-opener-installation',
    type: 'exact',
    description: 'Old garage door openers page'
  },
  {
    from: '/commercial-garage-doors/',
    to: '/services/commercial-garage-door-service',
    type: 'exact',
    description: 'Old commercial garage doors page'
  },

  // Generic service redirects
  {
    from: '/emergency-repair',
    to: '/services/emergency-garage-door-repair',
    type: 'exact',
    description: 'Emergency repair service page'
  },
  {
    from: '/opener-installation',
    to: '/services/garage-door-opener-installation',
    type: 'exact',
    description: 'Opener installation service page'
  },
  {
    from: '/new-door-installation',
    to: '/services/new-garage-door-installation',
    type: 'exact',
    description: 'New door installation service page'
  },
  {
    from: '/commercial-service',
    to: '/services/commercial-garage-door-service',
    type: 'exact',
    description: 'Commercial service page'
  },
  {
    from: '/repair-service',
    to: '/services/general-garage-door-repair',
    type: 'exact',
    description: 'General repair service page'
  },

  // Service area redirects - exact correlations
  {
    from: '/fair-lawn',
    to: '/service-areas/fair-lawn',
    type: 'exact',
    description: 'Fair Lawn service area'
  },
  {
    from: '/montclair',
    to: '/service-areas/montclair',
    type: 'exact',
    description: 'Montclair service area'
  },
  {
    from: '/clifton',
    to: '/service-areas/clifton',
    type: 'exact',
    description: 'Clifton service area'
  },
  {
    from: '/little-falls',
    to: '/service-areas/little-falls',
    type: 'exact',
    description: 'Little Falls service area'
  },
  {
    from: '/cedar-grove',
    to: '/service-areas/cedar-grove',
    type: 'exact',
    description: 'Cedar Grove service area'
  },
  {
    from: '/west-caldwell',
    to: '/service-areas/west-caldwell',
    type: 'exact',
    description: 'West Caldwell service area'
  },
  {
    from: '/north-caldwell',
    to: '/service-areas/north-caldwell',
    type: 'exact',
    description: 'North Caldwell service area'
  },

  // Common page variations
  {
    from: '/about-us',
    to: '/about',
    type: 'exact',
    description: 'About us page'
  },
  {
    from: '/contact-us',
    to: '/contact',
    type: 'exact',
    description: 'Contact us page'
  },
  {
    from: '/get-quote',
    to: '/booking',
    type: 'exact',
    description: 'Get quote to booking page'
  },
  {
    from: '/estimate',
    to: '/booking',
    type: 'exact',
    description: 'Estimate to booking page'
  },
  {
    from: '/testimonials',
    to: '/reviews',
    type: 'exact',
    description: 'Testimonials to reviews page'
  }
];

// Redirects for pages without direct correlations - redirect to most relevant page
export const orphanedPageRedirects: RedirectRule[] = [
  // Actual old website URLs - Service pages without direct correlations
  {
    from: '/residential-garage-door/',
    to: '/services',
    type: 'exact',
    description: 'Old residential garage door page to services'
  },
  {
    from: '/control-system/',
    to: '/services/garage-door-opener-installation',
    type: 'exact',
    description: 'Old control system page to opener installation'
  },
  {
    from: '/garage-door-locks/',
    to: '/services/general-garage-door-repair',
    type: 'exact',
    description: 'Old garage door locks page to general repair'
  },
  {
    from: '/garage-door-hinges/',
    to: '/services/general-garage-door-repair',
    type: 'exact',
    description: 'Old garage door hinges page to general repair'
  },
  {
    from: '/garage-door-accessories/',
    to: '/services',
    type: 'exact',
    description: 'Old garage door accessories page to services'
  },

  // Old blog posts or articles - redirect to home with anchor
  {
    from: '/blog/*',
    to: '/blog',
    type: 'pattern',
    description: 'Old blog posts to main blog page'
  },
  
  // Old gallery or photos - redirect to home or about
  {
    from: '/gallery',
    to: '/#gallery',
    type: 'exact',
    description: 'Old gallery to home page gallery section'
  },
  {
    from: '/photos',
    to: '/#gallery',
    type: 'exact',
    description: 'Old photos to home page gallery section'
  },

  // Old service request forms
  {
    from: '/service-request',
    to: '/booking',
    type: 'exact',
    description: 'Old service request form to booking'
  },
  {
    from: '/request-quote',
    to: '/booking',
    type: 'exact',
    description: 'Old quote request to booking'
  },

  // Old warranty or guarantee pages
  {
    from: '/warranty',
    to: '/about#warranty',
    type: 'exact',
    description: 'Old warranty page to about page warranty section'
  },
  {
    from: '/guarantee',
    to: '/about#warranty',
    type: 'exact',
    description: 'Old guarantee page to about page warranty section'
  },

  // Old FAQ variations
  {
    from: '/frequently-asked-questions',
    to: '/faq',
    type: 'exact',
    description: 'Long FAQ URL to short version'
  },
  {
    from: '/questions',
    to: '/faq',
    type: 'exact',
    description: 'Questions page to FAQ'
  },

  // Old product pages - redirect to services
  {
    from: '/products',
    to: '/services',
    type: 'exact',
    description: 'Old products page to services'
  },
  {
    from: '/parts',
    to: '/services',
    type: 'exact',
    description: 'Old parts page to services'
  },

  // Old location pages without specific service area pages
  {
    from: '/locations',
    to: '/service-areas',
    type: 'exact',
    description: 'Old locations page to service areas'
  },
  {
    from: '/areas-served',
    to: '/service-areas',
    type: 'exact',
    description: 'Areas served to service areas'
  }
];

// Catchall patterns for common old website structures
export const patternRedirects: RedirectRule[] = [
  // Old WordPress/CMS patterns
  {
    from: '/wp-content/*',
    to: '/',
    type: 'catchall',
    description: 'Old WordPress content to home'
  },
  {
    from: '/wp-admin/*',
    to: '/',
    type: 'catchall',
    description: 'Old WordPress admin to home'
  },
  
  // Old HTML file extensions
  {
    from: '*.html',
    to: '/',
    type: 'pattern',
    description: 'HTML files to home page'
  },
  {
    from: '*.php',
    to: '/',
    type: 'pattern',
    description: 'PHP files to home page'
  },

  // Old asset patterns that should go to home
  {
    from: '/images/*',
    to: '/',
    type: 'catchall',
    description: 'Old image paths to home'
  },
  {
    from: '/assets/*',
    to: '/',
    type: 'catchall',
    description: 'Old asset paths to home'
  }
];

// Get all redirects combined
export function getAllRedirects(): RedirectRule[] {
  return [
    ...pageRedirects,
    ...orphanedPageRedirects,
    ...patternRedirects
  ];
}

// Check if a path should be redirected
export function getRedirectFor(path: string): RedirectRule | null {
  const allRedirects = getAllRedirects();
  
  // First check exact matches
  const exactMatch = allRedirects.find(
    rule => rule.type === 'exact' && rule.from === path
  );
  if (exactMatch) return exactMatch;
  
  // Then check pattern matches
  const patternMatch = allRedirects.find(rule => {
    if (rule.type === 'pattern') {
      const pattern = rule.from.replace('*', '.*');
      const regex = new RegExp(`^${pattern}$`);
      return regex.test(path);
    }
    return false;
  });
  if (patternMatch) return patternMatch;
  
  // Finally check catchall
  const catchallMatch = allRedirects.find(rule => {
    if (rule.type === 'catchall') {
      const prefix = rule.from.replace('/*', '');
      return path.startsWith(prefix);
    }
    return false;
  });
  
  return catchallMatch || null;
}