#!/usr/bin/env node

/**
 * Ez2Fix Migration Redirect Testing Script
 * Tests all 301 redirects to ensure proper functionality
 * Usage: node redirect-tester.js
 */

const https = require('https');
const http = require('http');
const { URL } = require('url');

// Configuration
const OLD_DOMAIN = 'https://ez2fixllc.com';
const NEW_DOMAIN = 'https://newdomain.com'; // Replace with actual new domain

// Test URLs organized by priority
const TEST_URLS = {
  // TIER 1: CRITICAL BUSINESS PAGES
  'CRITICAL': [
    '/',
    '/contact',
    '/booking', 
    '/services'
  ],
  
  // TIER 2: SERVICE PAGES
  'SERVICES': [
    '/services/emergency-garage-door-repair',
    '/services/garage-door-spring-repair',
    '/services/garage-door-opener-installation',
    '/services/new-garage-door-installation', 
    '/services/commercial-garage-door-service',
    '/services/general-garage-door-repair'
  ],
  
  // TIER 3: LOCATION PAGES  
  'LOCATIONS': [
    '/service-areas',
    '/service-areas/north-caldwell',
    '/service-areas/west-caldwell',
    '/service-areas/little-falls',
    '/service-areas/montclair',
    '/service-areas/cedar-grove',
    '/service-areas/fair-lawn',
    '/service-areas/clifton'
  ],
  
  // TIER 4: CONTENT PAGES
  'CONTENT': [
    '/blog',
    '/blog/choosing-right-garage-door-bergen-county',
    '/blog/emergency-garage-door-repair-when-to-call',
    '/blog/garage-door-spring-replacement-signs',
    '/blog/commercial-vs-residential-garage-doors',
    '/blog/smart-garage-door-openers-worth-investment',
    '/blog/winter-garage-door-maintenance-nj'
  ],
  
  // TIER 5: SUPPORTING PAGES
  'SUPPORTING': [
    '/about',
    '/reviews',
    '/faq',
    '/privacy-policy',
    '/terms-of-service',
    '/accessibility-policy',
    '/thank-you'
  ]
};

// Test results tracking
let results = {
  passed: 0,
  failed: 0,
  errors: []
};

/**
 * Test a single URL redirect
 */
function testRedirect(oldUrl, expectedNewUrl) {
  return new Promise((resolve) => {
    const url = new URL(oldUrl);
    const options = {
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'HEAD',
      timeout: 10000
    };
    
    const client = url.protocol === 'https:' ? https : http;
    
    const req = client.request(options, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;
      
      if (statusCode === 301 || statusCode === 302) {
        if (location === expectedNewUrl) {
          console.log(`✅ ${oldUrl} → ${location} (${statusCode})`);
          results.passed++;
          resolve({ status: 'PASS', oldUrl, newUrl: location, statusCode });
        } else {
          console.log(`❌ ${oldUrl} → ${location} (Expected: ${expectedNewUrl})`);
          results.failed++;
          results.errors.push({
            url: oldUrl,
            expected: expectedNewUrl,
            actual: location,
            issue: 'Wrong redirect target'
          });
          resolve({ status: 'FAIL', oldUrl, expected: expectedNewUrl, actual: location });
        }
      } else {
        console.log(`❌ ${oldUrl} → Status ${statusCode} (Expected: 301 redirect)`);
        results.failed++;
        results.errors.push({
          url: oldUrl,
          expected: 'Status 301',
          actual: `Status ${statusCode}`,
          issue: 'Not redirecting'
        });
        resolve({ status: 'FAIL', oldUrl, statusCode, issue: 'Not redirecting' });
      }
    });
    
    req.on('error', (error) => {
      console.log(`❌ ${oldUrl} → ERROR: ${error.message}`);
      results.failed++;
      results.errors.push({
        url: oldUrl,
        issue: error.message
      });
      resolve({ status: 'ERROR', oldUrl, error: error.message });
    });
    
    req.on('timeout', () => {
      console.log(`❌ ${oldUrl} → TIMEOUT`);
      results.failed++;
      results.errors.push({
        url: oldUrl,
        issue: 'Request timeout'
      });
      req.destroy();
      resolve({ status: 'ERROR', oldUrl, error: 'Timeout' });
    });
    
    req.end();
  });
}

/**
 * Run all redirect tests
 */
async function runAllTests() {
  console.log('🔄 Ez2Fix Migration Redirect Testing\n');
  console.log(`Testing redirects from ${OLD_DOMAIN} to ${NEW_DOMAIN}\n`);
  
  for (const [tier, urls] of Object.entries(TEST_URLS)) {
    console.log(`\n📋 Testing ${tier} URLs:`);
    console.log('=' + '='.repeat(50));
    
    const promises = urls.map(path => {
      const oldUrl = OLD_DOMAIN + path;
      const expectedNewUrl = NEW_DOMAIN + path;
      return testRedirect(oldUrl, expectedNewUrl);
    });
    
    await Promise.all(promises);
  }
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('🏁 MIGRATION REDIRECT TEST SUMMARY');
  console.log('='.repeat(60));
  console.log(`✅ Passed: ${results.passed}`);
  console.log(`❌ Failed: ${results.failed}`);
  console.log(`📊 Total: ${results.passed + results.failed}`);
  console.log(`📈 Success Rate: ${((results.passed / (results.passed + results.failed)) * 100).toFixed(1)}%`);
  
  if (results.errors.length > 0) {
    console.log('\n🚨 ERRORS THAT NEED ATTENTION:');
    results.errors.forEach((error, index) => {
      console.log(`\n${index + 1}. ${error.url}`);
      console.log(`   Issue: ${error.issue}`);
      if (error.expected) console.log(`   Expected: ${error.expected}`);
      if (error.actual) console.log(`   Actual: ${error.actual}`);
    });
  }
  
  // Migration readiness assessment
  const successRate = (results.passed / (results.passed + results.failed)) * 100;
  console.log('\n' + '='.repeat(60));
  console.log('🎯 MIGRATION READINESS ASSESSMENT');
  console.log('='.repeat(60));
  
  if (successRate === 100) {
    console.log('🟢 READY FOR MIGRATION - All redirects working perfectly!');
  } else if (successRate >= 95) {
    console.log('🟡 MOSTLY READY - Minor issues need fixing before migration.');
  } else {
    console.log('🔴 NOT READY - Critical redirect issues must be resolved first!');
  }
  
  return results;
}

// Export for use in other scripts
if (require.main === module) {
  runAllTests().catch(console.error);
}

module.exports = { runAllTests, testRedirect };