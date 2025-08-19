// Google Maps and Places API Integration
import { clientEnv, serverEnv } from '@/config/env';

// Google Maps initialization with Places API for address autocomplete only
export async function initializeGoogleMaps(): Promise<void> {
  if (typeof window === 'undefined') {
    throw new Error('Google Maps can only be initialized on client side');
  }

  // Check if already loaded
  if (window.google && window.google.maps) {
    return;
  }

  // Only load if we have the client-side API key for Places autocomplete
  if (!clientEnv.googleMaps.apiKey) {
    throw new Error('Google Maps API key not configured for client-side use. Check PUBLIC_GOOGLE_MAPS_API_KEY environment variable.');
  }

  return new Promise((resolve, reject) => {
    // Create script element - only load Places library for autocomplete
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${clientEnv.googleMaps.apiKey}&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;

    // Create global callback
    (window as any).initMap = () => {
      resolve();
    };

    script.onerror = () => {
      reject(new Error('Failed to load Google Maps script'));
    };

    document.head.appendChild(script);
  });
}

// Service area configuration
export interface ServiceAreaConfig {
  center: { lat: number; lng: number };
  radius: number; // in miles
  primaryAreas: string[];
}

export const serviceAreaConfig: ServiceAreaConfig = {
  center: serverEnv.business.coordinates,
  radius: serverEnv.serviceArea.radiusMiles,
  primaryAreas: serverEnv.serviceArea.primaryAreas,
};

// Create service area map
export function createServiceAreaMap(
  container: HTMLElement,
  options: {
    showRadius?: boolean;
    showMarkers?: boolean;
    interactive?: boolean;
  } = {}
): google.maps.Map {
  const {
    showRadius = true,
    showMarkers = true,
    interactive = true,
  } = options;

  // Map configuration
  const mapOptions: google.maps.MapOptions = {
    center: serviceAreaConfig.center,
    zoom: 11,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: !interactive,
    gestureHandling: interactive ? 'cooperative' : 'none',
    styles: [
      {
        featureType: 'all',
        elementType: 'geometry',
        stylers: [{ color: '#f5f5f5' }],
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#ffffff' }],
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }],
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c9c9c9' }],
      },
    ],
  };

  const map = new google.maps.Map(container, mapOptions);

  // Add business marker
  const businessMarker = new google.maps.Marker({
    position: serviceAreaConfig.center,
    map: map,
    title: serverEnv.business.name,
    icon: {
      url: 'data:image/svg+xml;base64,' + btoa(`
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="18" fill="#D2A63C" stroke="#1D1912" stroke-width="2"/>
          <circle cx="20" cy="20" r="6" fill="#1D1912"/>
        </svg>
      `),
      scaledSize: new google.maps.Size(40, 40),
      anchor: new google.maps.Point(20, 20),
    },
  });

  // Add info window for business marker
  const infoWindow = new google.maps.InfoWindow({
    content: `
      <div style="padding: 10px; max-width: 200px;">
        <h3 style="margin: 0 0 5px 0; color: #1D1912;">${serverEnv.business.name}</h3>
        <p style="margin: 0 0 5px 0; color: #BB8525;">Licensed Garage Door Service</p>
        <p style="margin: 0; color: #D2A63C; font-weight: bold;">${serverEnv.business.phone}</p>
      </div>
    `,
  });

  businessMarker.addListener('click', () => {
    infoWindow.open(map, businessMarker);
  });

  // Add service radius circle
  if (showRadius) {
    const serviceCircle = new google.maps.Circle({
      strokeColor: '#D2A63C',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#D2A63C',
      fillOpacity: 0.15,
      map: map,
      center: serviceAreaConfig.center,
      radius: serviceAreaConfig.radius * 1609.34, // Convert miles to meters
    });
  }

  // Add markers for primary service areas
  if (showMarkers) {
    addServiceAreaMarkers(map);
  }

  return map;
}

// Add markers for primary service areas
async function addServiceAreaMarkers(map: google.maps.Map): Promise<void> {
  const geocoder = new google.maps.Geocoder();
  const bounds = new google.maps.LatLngBounds();

  for (const area of serviceAreaConfig.primaryAreas) {
    try {
      const result = await geocodeAddress(`${area}, NJ`);
      if (result) {
        const marker = new google.maps.Marker({
          position: result,
          map: map,
          title: `${area}, NJ - We serve this area!`,
          icon: {
            url: 'data:image/svg+xml;base64,' + btoa(`
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" fill="#EECD5C" stroke="#1D1912" stroke-width="1"/>
                <circle cx="12" cy="12" r="3" fill="#1D1912"/>
              </svg>
            `),
            scaledSize: new google.maps.Size(24, 24),
            anchor: new google.maps.Point(12, 12),
          },
        });

        bounds.extend(result);

        // Add click listener
        marker.addListener('click', () => {
          const infoWindow = new google.maps.InfoWindow({
            content: `
              <div style="padding: 8px;">
                <h4 style="margin: 0 0 5px 0; color: #1D1912;">${area}, NJ</h4>
                <p style="margin: 0; color: #BB8525; font-size: 12px;">We provide garage door service in this area</p>
              </div>
            `,
          });
          infoWindow.open(map, marker);
        });
      }
    } catch (error) {
      // Failed to geocode area, using fallback
    }
  }
}

// Geocoding helper
function geocodeAddress(address: string): Promise<google.maps.LatLng | null> {
  return new Promise((resolve) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
        resolve(results[0].geometry.location);
      } else {
        resolve(null);
      }
    });
  });
}

// Address autocomplete functionality
export function setupAddressAutocomplete(
  input: HTMLInputElement,
  options: {
    onPlaceSelected?: (place: google.maps.places.PlaceResult) => void;
    restrictToServiceArea?: boolean;
  } = {}
): google.maps.places.Autocomplete {
  const autocompleteOptions: google.maps.places.AutocompleteOptions = {
    types: ['address'],
    componentRestrictions: { country: 'US' },
  };

  // Restrict to service area if requested
  if (options.restrictToServiceArea) {
    const bounds = new google.maps.LatLngBounds();
    const center = new google.maps.LatLng(
      serviceAreaConfig.center.lat,
      serviceAreaConfig.center.lng
    );
    const radiusInDegrees = serviceAreaConfig.radius / 69; // Rough conversion to degrees
    
    bounds.extend(
      new google.maps.LatLng(
        center.lat() - radiusInDegrees,
        center.lng() - radiusInDegrees
      )
    );
    bounds.extend(
      new google.maps.LatLng(
        center.lat() + radiusInDegrees,
        center.lng() + radiusInDegrees
      )
    );
    
    autocompleteOptions.bounds = bounds;
    autocompleteOptions.strictBounds = true;
  }

  const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions);

  // Add place selection listener
  if (options.onPlaceSelected) {
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      options.onPlaceSelected!(place);
    });
  }

  return autocomplete;
}

// Check if address is within service area
export function isAddressInServiceArea(
  address: google.maps.LatLng | { lat: number; lng: number }
): boolean {
  const addressLatLng = address instanceof google.maps.LatLng 
    ? address 
    : new google.maps.LatLng(address.lat, address.lng);
    
  const centerLatLng = new google.maps.LatLng(
    serviceAreaConfig.center.lat,
    serviceAreaConfig.center.lng
  );

  const distance = google.maps.geometry.spherical.computeDistanceBetween(
    centerLatLng,
    addressLatLng
  );

  const radiusInMeters = serviceAreaConfig.radius * 1609.34; // Convert miles to meters
  return distance <= radiusInMeters;
}

// Fetch service area map data from secure API
export async function fetchServiceAreaMapData(): Promise<{
  center: { lat: number; lng: number };
  zoom: number;
  serviceRadius: number;
  areas: Array<{
    name: string;
    slug: string;
    lat: number;
    lng: number;
    href: string;
    description: string;
  }>;
  businessLocation: {
    name: string;
    lat: number;
    lng: number;
    phone: string;
  };
}> {
  const response = await fetch('/api/service-areas?type=service-areas');
  if (!response.ok) {
    throw new Error('Failed to fetch service area data');
  }
  return response.json();
}

// Fetch static map URL from secure API
export async function fetchStaticMapUrl(options: {
  width?: number;
  height?: number;
  zoom?: number;
} = {}): Promise<string> {
  const params = new URLSearchParams({
    type: 'static',
    width: (options.width || 600).toString(),
    height: (options.height || 400).toString(),
    zoom: (options.zoom || 11).toString(),
  });
  
  const response = await fetch(`/api/service-areas?${params.toString()}`);
  if (!response.ok) {
    throw new Error('Failed to fetch static map URL');
  }
  
  const data = await response.json();
  return data.url;
}

// Type declarations for Google Maps
declare global {
  interface Window {
    google: typeof google;
  }
}