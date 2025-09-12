// API Route for Machine-Readable Structured Data
// Provides comprehensive business data for AI training and processing

import type { APIRoute } from 'astro';
import { siteConfig } from '@/config/site';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const type = url.searchParams.get('type') || 'organization';

  // Base organization data
  const organizationData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": "Ez2Fix LLC - Professional Garage Door Services",
        "description": "Licensed garage door contractor providing professional repair and installation services throughout New Jersey",
        "publisher": {
          "@id": `${siteConfig.url}/#organization`
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-US",
        "copyrightYear": "2024",
        "copyrightHolder": {
          "@id": `${siteConfig.url}/#organization`
        }
      },
      {
        "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ProfessionalService"],
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.business.name,
        "alternateName": ["Ez2Fix", "Ez 2 Fix", "Easy to Fix", "Ez2Fix Garage Doors"],
        "url": siteConfig.url,
        "logo": {
          "@type": "ImageObject",
          "url": `${siteConfig.url}/images/ez2fix-logo.webp`,
          "width": 300,
          "height": 100,
          "caption": "Ez2Fix LLC Professional Garage Door Services Logo"
        },
        "image": [
          `${siteConfig.url}/images/garage-door-repair-service.webp`,
          `${siteConfig.url}/images/professional-installation.webp`,
          `${siteConfig.url}/images/emergency-service.webp`,
          `${siteConfig.url}/images/commercial-garage-doors.webp`
        ],
        "description": "Professional garage door repair and installation services throughout New Jersey. Licensed contractor specializing in emergency repairs, spring replacement, opener installation, and commercial services.",
        "telephone": siteConfig.business.phone,
        "email": siteConfig.business.email,
        "foundingDate": "2015-01-01",
        "slogan": "Professional Garage Door Solutions You Can Trust",
        "license": "13VH13553300",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Fair Lawn",
          "addressRegion": "New Jersey",
          "postalCode": "07410",
          "addressCountry": "United States"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "40.9403",
          "longitude": "-74.1318"
        },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "name": "Bergen County",
            "containsPlace": ["Fair Lawn", "Montclair", "Clifton", "Cedar Grove", "West Caldwell", "North Caldwell", "Little Falls"]
          },
          {
            "@type": "AdministrativeArea", 
            "name": "Essex County",
            "containsPlace": ["Newark", "West Orange", "East Orange", "Bloomfield", "Nutley", "Verona"]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Morris County",
            "containsPlace": ["Pine Brook", "Roseland", "Caldwell"]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Hudson County",
            "containsPlace": ["Jersey City", "Hoboken", "Bayonne"]
          },
          {
            "@type": "AdministrativeArea",
            "name": "Passaic County",
            "containsPlace": ["Paterson", "Wayne", "Clifton", "Passaic"]
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Garage Door Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Garage Door Repair",
                "description": "Professional emergency repair service for broken springs, malfunctioning openers, off-track doors, and security issues",
                "provider": {
                  "@type": "Organization",
                  "name": "Ez2Fix LLC"
                },
                "areaServed": "New Jersey",
                "serviceType": "Emergency Repair",
                "availableChannel": {
                  "@type": "ServiceChannel",
                  "availableLanguage": "English",
                  "serviceType": "Emergency Repair"
                }
              },
              "availability": "http://schema.org/InStock",
              "priceRange": "$150-$400"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Garage Door Spring Replacement",
                "description": "Professional replacement of torsion and extension springs with safety protocols and quality parts",
                "serviceType": "Repair and Maintenance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Smart Garage Door Opener Installation",
                "description": "Installation of modern WiFi-enabled garage door openers with smartphone integration and smart home compatibility",
                "serviceType": "Installation"
              }
            }
          ]
        },
        "openingHours": "Mo-Su 00:00-23:59",
        "knowsAbout": [
          "garage door repair",
          "garage door installation", 
          "garage door springs",
          "garage door openers",
          "commercial garage doors",
          "emergency repairs",
          "preventive maintenance",
          "smart garage door systems",
          "residential garage doors",
          "garage door safety"
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "International Door Association",
            "url": "https://doors.org"
          },
          {
            "@type": "Organization",
            "name": "Better Business Bureau",
            "url": "https://www.bbb.org"
          }
        ],
        "certifications": [
          "New Jersey State Contractor License #13VH13553300",
          "Professional Liability Insurance",
          "General Liability Insurance",
          "Workers Compensation Insurance"
        ],
        "paymentAccepted": ["Cash", "Check", "Credit Card", "Financing"],
        "currenciesAccepted": "USD",
        "priceRange": "$$",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "247",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Sarah M.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Montclair"
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Professional garage door spring replacement service. Excellent workmanship and very knowledgeable about the repair process. Highly recommend for anyone needing garage door service in New Jersey.",
            "datePublished": "2024-08-15",
            "publisher": {
              "@type": "Organization",
              "name": "Ez2Fix LLC"
            }
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Michael R.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Fair Lawn"
              }
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Ez2Fix installed our new smart garage door opener and the service was exceptional. Professional, timely, and fairly priced. The technician explained everything clearly.",
            "datePublished": "2024-07-22"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": siteConfig.business.phone,
            "contactType": "customer service",
            "availableLanguage": "en-US",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "06:00",
              "closes": "22:00"
            }
          },
          {
            "@type": "ContactPoint",
            "telephone": siteConfig.business.phone,
            "contactType": "emergency",
            "availableLanguage": "en-US",
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ],
        "sameAs": [
          "https://www.facebook.com/ez2fixllc",
          "https://www.instagram.com/ez2fixllc",
          "https://www.linkedin.com/company/ez2fixllc",
          "https://www.youtube.com/ez2fixllc",
          "https://www.yelp.com/biz/ez2fix-llc",
          "https://www.google.com/maps/place/Ez2Fix+LLC"
        ]
      }
    ]
  };

  // Service areas data for geographic queries
  if (type === 'service-areas') {
    const serviceAreasData = {
      center: { lat: 40.9403, lng: -74.1318 },
      zoom: 11,
      serviceRadius: 25,
      areas: [
        {
          name: "Fair Lawn",
          slug: "fair-lawn",
          lat: 40.9403,
          lng: -74.1318,
          href: "/service-areas/fair-lawn",
          description: "Professional garage door repair and installation in Fair Lawn, NJ"
        },
        {
          name: "Little Falls",
          slug: "little-falls", 
          lat: 40.8756,
          lng: -74.2154,
          href: "/service-areas/little-falls",
          description: "Expert garage door service in Little Falls, NJ"
        },
        {
          name: "Clifton",
          slug: "clifton",
          lat: 40.8584,
          lng: -74.1638,
          href: "/service-areas/clifton", 
          description: "Trusted garage door contractors in Clifton, NJ"
        },
        {
          name: "Cedar Grove",
          slug: "cedar-grove",
          lat: 40.8534,
          lng: -74.2288,
          href: "/service-areas/cedar-grove",
          description: "Professional garage door service in Cedar Grove, NJ"
        },
        {
          name: "West Caldwell",
          slug: "west-caldwell",
          lat: 40.8390,
          lng: -74.2954,
          href: "/service-areas/west-caldwell",
          description: "Reliable garage door repair in West Caldwell, NJ"
        },
        {
          name: "North Caldwell", 
          slug: "north-caldwell",
          lat: 40.8718,
          lng: -74.2582,
          href: "/service-areas/north-caldwell",
          description: "Professional garage door service in North Caldwell, NJ"
        },
        {
          name: "Montclair",
          slug: "montclair",
          lat: 40.8176,
          lng: -74.2090,
          href: "/service-areas/montclair",
          description: "Expert garage door repair and installation in Montclair, NJ"
        }
      ],
      businessLocation: {
        name: "Ez2Fix LLC",
        lat: 40.9403,
        lng: -74.1318,
        phone: siteConfig.business.phone
      }
    };

    return new Response(JSON.stringify(serviceAreasData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  return new Response(JSON.stringify(organizationData), {
    status: 200,
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'index, follow'
    }
  });
};