// Global Maps API loader - prevents duplicate loading
declare global {
  interface Window {
    google?: any;
    mapsApiLoaded?: boolean;
    mapsApiCallbacks?: Array<() => void>;
    globalMapsCallback?: () => void;
  }
}

let isLoading = false;

export function loadGoogleMapsAPI(apiKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    // If already loaded, resolve immediately
    if (window.google && window.google.maps) {
      resolve();
      return;
    }

    // If already loading, add to callback queue
    if (isLoading) {
      window.mapsApiCallbacks = window.mapsApiCallbacks || [];
      window.mapsApiCallbacks.push(resolve);
      return;
    }

    // Start loading
    isLoading = true;
    window.mapsApiCallbacks = [resolve];

    // Create global callback function
    (window as any).globalMapsCallback = () => {
      isLoading = false;
      window.mapsApiLoaded = true;
      
      // Execute all waiting callbacks
      window.mapsApiCallbacks?.forEach(callback => callback());
      window.mapsApiCallbacks = [];
    };

    // Load the script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=globalMapsCallback&loading=async`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      isLoading = false;
      reject(new Error('Failed to load Google Maps API'));
    };
    
    document.head.appendChild(script);
  });
}

export async function initializeMap(mapElement: HTMLElement, config: any): Promise<any> {
  await loadGoogleMapsAPI(config.apiKey);
  
  const map = new window.google.maps.Map(mapElement, {
    center: config.center,
    zoom: config.zoom,
    mapTypeId: config.mapTypeId || 'roadmap',
    styles: config.styles || [],
    mapTypeControl: config.mapTypeControl !== false,
    streetViewControl: config.streetViewControl !== false,
    fullscreenControl: config.fullscreenControl !== false,
    zoomControl: config.zoomControl !== false
  });

  return map;
}