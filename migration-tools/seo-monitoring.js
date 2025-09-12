#!/usr/bin/env node

/**
 * Ez2Fix Post-Migration SEO Monitoring Script
 * Monitors key SEO metrics after migration
 * Usage: node seo-monitoring.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const NEW_DOMAIN = 'https://newdomain.com'; // Replace with actual domain
const MONITORING_CONFIG = {
  checkInterval: 3600000, // 1 hour in milliseconds
  alertThresholds: {
    responseTime: 3000, // Alert if response time > 3 seconds
    statusCodeErrors: 5   // Alert if more than 5 pages return errors
  }
};

// Critical pages to monitor
const CRITICAL_PAGES = [
  // Emergency service pages (highest priority)
  '/',
  '/contact',
  '/booking',
  '/services/emergency-garage-door-repair',
  
  // High-value service pages
  '/services',
  '/services/garage-door-spring-repair',
  '/services/garage-door-opener-installation',
  
  // Top location pages
  '/service-areas',
  '/service-areas/fair-lawn',
  '/service-areas/north-caldwell'
];

// Key SEO elements to check
const SEO_CHECKS = [
  'title',
  'meta[name="description"]',
  'h1',
  'script[type="application/ld+json"]', // Schema markup
  'link[rel="canonical"]',
  'meta[property="og:title"]'
];

/**
 * Check page performance and SEO elements
 */
function checkPage(url) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    
    const req = https.get(url, (res) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      let data = '';
      
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const result = {
          url,
          statusCode: res.statusCode,
          responseTime,
          timestamp: new Date().toISOString(),
          seoElements: {},
          issues: []
        };
        
        // Check SEO elements
        SEO_CHECKS.forEach(selector => {
          const regex = new RegExp(`<${selector}[^>]*>([^<]*)</|<${selector}[^>]*content="([^"]*)"`, 'i');
          const match = data.match(regex);
          
          if (match) {
            result.seoElements[selector] = match[1] || match[2] || 'Found';
          } else {
            result.issues.push(`Missing ${selector}`);
          }
        });
        
        // Performance checks
        if (responseTime > MONITORING_CONFIG.alertThresholds.responseTime) {
          result.issues.push(`Slow response time: ${responseTime}ms`);
        }
        
        if (res.statusCode !== 200) {
          result.issues.push(`HTTP ${res.statusCode} error`);
        }
        
        resolve(result);
      });
    });
    
    req.on('error', (error) => {
      resolve({
        url,
        error: error.message,
        timestamp: new Date().toISOString(),
        issues: [`Request failed: ${error.message}`]
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        error: 'Timeout',
        timestamp: new Date().toISOString(),
        issues: ['Request timeout']
      });
    });
  });
}

/**
 * Run monitoring check on all critical pages
 */
async function runMonitoringCheck() {
  console.log('🔍 Ez2Fix Post-Migration SEO Monitoring');
  console.log(`⏰ ${new Date().toLocaleString()}`);
  console.log('=' + '='.repeat(50));
  
  const results = [];
  let totalIssues = 0;
  let errorPages = 0;
  
  for (const path of CRITICAL_PAGES) {
    const url = NEW_DOMAIN + path;
    console.log(`🔄 Checking ${path}...`);
    
    const result = await checkPage(url);
    results.push(result);
    
    if (result.issues && result.issues.length > 0) {
      totalIssues += result.issues.length;
      if (result.statusCode && result.statusCode !== 200) {
        errorPages++;
      }
      
      console.log(`❌ ${path} - ${result.issues.length} issues:`);
      result.issues.forEach(issue => console.log(`   • ${issue}`));
    } else {
      console.log(`✅ ${path} - OK (${result.responseTime}ms)`);
    }
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 MONITORING SUMMARY');
  console.log('='.repeat(60));
  console.log(`📄 Pages Checked: ${CRITICAL_PAGES.length}`);
  console.log(`✅ Healthy Pages: ${CRITICAL_PAGES.length - errorPages}`);
  console.log(`❌ Error Pages: ${errorPages}`);
  console.log(`🚨 Total Issues: ${totalIssues}`);
  
  // Alert assessment
  if (errorPages > MONITORING_CONFIG.alertThresholds.statusCodeErrors) {
    console.log('\n🚨 CRITICAL ALERT: Too many pages with errors!');
    console.log('   Action Required: Immediate investigation needed');
  } else if (totalIssues > 0) {
    console.log('\n⚠️  Warning: Some issues detected');
    console.log('   Action Required: Review and address issues');
  } else {
    console.log('\n✅ All systems healthy!');
  }
  
  // Save results to file
  const logFile = path.join(__dirname, 'monitoring-logs', `monitoring-${Date.now()}.json`);
  const logDir = path.dirname(logFile);
  
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
  }
  
  fs.writeFileSync(logFile, JSON.stringify({
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: CRITICAL_PAGES.length,
      healthyPages: CRITICAL_PAGES.length - errorPages,
      errorPages,
      totalIssues
    },
    results
  }, null, 2));
  
  console.log(`\n📝 Results saved to: ${logFile}`);
  
  return results;
}

/**
 * Start continuous monitoring
 */
function startContinuousMonitoring() {
  console.log('🚀 Starting Ez2Fix SEO Monitoring Service');
  console.log(`⏱️  Check Interval: ${MONITORING_CONFIG.checkInterval / 60000} minutes`);
  
  // Run initial check
  runMonitoringCheck();
  
  // Set up recurring checks
  setInterval(runMonitoringCheck, MONITORING_CONFIG.checkInterval);
}

/**
 * Generate monitoring report from log files
 */
function generateReport() {
  const logsDir = path.join(__dirname, 'monitoring-logs');
  if (!fs.existsSync(logsDir)) {
    console.log('No monitoring logs found');
    return;
  }
  
  const logFiles = fs.readdirSync(logsDir)
    .filter(file => file.endsWith('.json'))
    .sort()
    .slice(-24); // Last 24 checks
  
  console.log('📈 Ez2Fix Monitoring Report (Last 24 Checks)');
  console.log('=' + '='.repeat(50));
  
  let totalChecks = 0;
  let totalIssues = 0;
  let errorCounts = {};
  
  logFiles.forEach(file => {
    const logData = JSON.parse(fs.readFileSync(path.join(logsDir, file), 'utf8'));
    totalChecks++;
    totalIssues += logData.summary.totalIssues;
    
    logData.results.forEach(result => {
      if (result.issues && result.issues.length > 0) {
        result.issues.forEach(issue => {
          errorCounts[issue] = (errorCounts[issue] || 0) + 1;
        });
      }
    });
  });
  
  console.log(`📊 Checks Analyzed: ${totalChecks}`);
  console.log(`🚨 Total Issues Found: ${totalIssues}`);
  console.log(`📈 Average Issues per Check: ${(totalIssues / totalChecks).toFixed(1)}`);
  
  if (Object.keys(errorCounts).length > 0) {
    console.log('\n🔍 Most Common Issues:');
    Object.entries(errorCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .forEach(([issue, count]) => {
        console.log(`   ${count}x - ${issue}`);
      });
  }
}

// CLI handling
if (require.main === module) {
  const command = process.argv[2];
  
  switch (command) {
    case 'check':
      runMonitoringCheck();
      break;
    case 'monitor':
      startContinuousMonitoring();
      break;
    case 'report':
      generateReport();
      break;
    default:
      console.log('Ez2Fix SEO Monitoring Tool');
      console.log('Usage:');
      console.log('  node seo-monitoring.js check    - Run single check');
      console.log('  node seo-monitoring.js monitor  - Start continuous monitoring');
      console.log('  node seo-monitoring.js report   - Generate report from logs');
  }
}

module.exports = { runMonitoringCheck, startContinuousMonitoring, generateReport };