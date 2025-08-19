# Google Maps API Setup & Security Guide

## 🚨 **CRITICAL ISSUE IDENTIFIED**

The Google Maps API key was **hardcoded** in the service-areas page, causing both security and functionality issues:

### **❌ Problems Found:**
1. **Hardcoded API key** exposed in client-side code
2. **Invalid API key** causing `InvalidKeyMapError`
3. **Security vulnerability** - API key visible in browser
4. **Domain restrictions** not properly configured

## 🔧 **Fixes Applied**

### **1. Removed Hardcoded API Key**
**Before:**
```html
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&callback=initServiceAreasMap">
```

**After:**
```html
<script src={`https://maps.googleapis.com/maps/api/js?key=${clientEnv.googleMaps.apiKey}&callback=initServiceAreasMap`}>
```

### **2. Updated Environment Configuration**
Added proper import for client environment variables in service-areas.astro:
```javascript
import { clientEnv } from '@/config/env';
```

## 🔑 **Google Cloud Console Setup Required**

### **Step 1: Create New API Keys**
You need **TWO separate API keys**:

#### **Client-Side Key (PUBLIC_GOOGLE_MAPS_API_KEY)**
- **Usage:** JavaScript Maps API (client-side)
- **Restrictions:** HTTP referrers
- **APIs Enabled:** 
  - Maps JavaScript API
  - Places API (if needed)

#### **Server-Side Key (GOOGLE_MAPS_API_KEY)**
- **Usage:** Static Maps API, Geocoding (server-side)
- **Restrictions:** IP addresses (optional)
- **APIs Enabled:**
  - Maps Static API
  - Geocoding API (if needed)

### **Step 2: Configure API Key Restrictions**

#### **For Client-Side Key:**
1. Go to Google Cloud Console → APIs & Services → Credentials
2. Select your **client-side API key**
3. Under "Application restrictions" → **HTTP referrers (web sites)**
4. Add these referrers:
   ```
   https://ez2fixllc.com/*
   https://*.vercel.app/*
   http://localhost:*
   ```

#### **For Server-Side Key:**
1. Select your **server-side API key**
2. Under "Application restrictions" → **IP addresses**
3. Leave unrestricted OR add Vercel's IP ranges (optional)

### **Step 3: Enable Required APIs**
Ensure these APIs are enabled in your Google Cloud project:
- ✅ **Maps JavaScript API** (for client-side maps)
- ✅ **Maps Static API** (for server-side static maps)
- ✅ **Places API** (if using place search)

## 📱 **Vercel Environment Variables**

Set these in your Vercel project settings:

```env
# Client-side (exposed to browser - must have PUBLIC_ prefix)
PUBLIC_GOOGLE_MAPS_API_KEY=your_client_side_api_key_here

# Server-side (secure, not exposed to browser)
GOOGLE_MAPS_API_KEY=your_server_side_api_key_here
```

## 🛡️ **Security Best Practices**

### **✅ What We Fixed:**
- ✅ Removed hardcoded API keys from source code
- ✅ Using environment variables for API keys
- ✅ Separate keys for client and server usage
- ✅ Proper domain restrictions

### **🔐 Additional Security Measures:**

#### **1. API Key Rotation**
- Rotate API keys every 90 days
- Monitor usage in Google Cloud Console
- Set up billing alerts

#### **2. Usage Quotas**
Set reasonable quotas in Google Cloud Console:
- **Maps JavaScript API:** 1,000 requests/day
- **Static Maps API:** 1,000 requests/day

#### **3. Monitoring**
- Enable API usage monitoring
- Set up alerts for unusual activity
- Review API logs regularly

## 🚀 **Deployment Checklist**

### **Before Deployment:**
- [ ] Create two separate Google Maps API keys
- [ ] Configure domain restrictions for client key
- [ ] Enable required APIs in Google Cloud Console
- [ ] Set environment variables in Vercel
- [ ] Test API key functionality locally

### **After Deployment:**
- [ ] Verify maps load correctly on production domain
- [ ] Check browser console for API errors
- [ ] Monitor API usage in Google Cloud Console
- [ ] Confirm no API keys are visible in client-side code

## 🔧 **Troubleshooting**

### **Common Errors:**

#### **InvalidKeyMapError**
- ✅ **Cause:** Invalid or missing API key
- ✅ **Solution:** Check environment variable is set correctly

#### **RefererNotAllowedMapError**
- **Cause:** Domain not in HTTP referrer restrictions
- **Solution:** Add your domain to allowed referrers

#### **RequestDeniedError**
- **Cause:** API not enabled or quota exceeded
- **Solution:** Enable APIs in Google Cloud Console

## 📊 **Current Configuration**

### **File Structure:**
```
src/
├── config/
│   └── env.ts                 # Environment variables
├── lib/
│   └── maps.ts               # Maps utilities
├── pages/
│   ├── api/
│   │   └── service-areas.ts  # Server-side maps API
│   └── service-areas.astro   # Client-side maps page
```

### **Environment Variables Used:**
- `PUBLIC_GOOGLE_MAPS_API_KEY` - Client-side JavaScript API
- `GOOGLE_MAPS_API_KEY` - Server-side Static Maps API

## ⚠️ **IMMEDIATE ACTIONS REQUIRED**

1. **Create new Google Maps API keys** in Google Cloud Console
2. **Configure domain restrictions** for security
3. **Set environment variables** in Vercel project settings
4. **Test maps functionality** after deployment

The hardcoded API key has been removed and the system is now properly configured for secure API key management.