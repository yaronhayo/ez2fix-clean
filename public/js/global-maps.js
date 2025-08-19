// Global Maps API loader - prevents duplicate loading
window.EZ2FIX_MAPS = window.EZ2FIX_MAPS || {
  isLoaded: false,
  isLoading: false,
  callbacks: [],
  
  // Load Google Maps API with deduplication
  loadAPI: function(apiKey) {
    return new Promise((resolve, reject) => {
      // If already loaded, resolve immediately
      if (window.google && window.google.maps) {
        this.isLoaded = true;
        resolve();
        return;
      }
      
      // If already loading, add to callback queue
      if (this.isLoading) {
        this.callbacks.push(resolve);
        return;
      }
      
      // Start loading
      this.isLoading = true;
      this.callbacks.push(resolve);
      
      // Create global callback
      window.EZ2FIX_MAPS_CALLBACK = () => {
        this.isLoading = false;
        this.isLoaded = true;
        
        // Execute all callbacks
        this.callbacks.forEach(callback => callback());
        this.callbacks = [];
      };
      
      // Load script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=EZ2FIX_MAPS_CALLBACK&loading=async`;
      script.async = true;
      script.defer = true;
      script.onerror = () => {
        this.isLoading = false;
        reject(new Error('Failed to load Google Maps API'));
      };
      
      document.head.appendChild(script);
    });
  }
};