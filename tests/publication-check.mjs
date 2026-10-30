/* global console, window, document, PerformanceObserver, performance */
import { chromium } from '@playwright/test';
const browser = await chromium.launch();
const results=[];
for (const mobile of [false,true]) {
 const context=await browser.newContext({viewport:mobile?{width:390,height:844}:{width:1200,height:675},reducedMotion:'reduce'});
 const page=await context.newPage();
 await page.addInitScript(()=>{
  window.__qa={lcp:0,cls:0};
  new PerformanceObserver(list=>{for(const entry of list.getEntries())window.__qa.lcp=entry.startTime;}).observe({type:'largest-contentful-paint',buffered:true});
  new PerformanceObserver(list=>{for(const entry of list.getEntries())if(!entry.hadRecentInput)window.__qa.cls+=entry.value;}).observe({type:'layout-shift',buffered:true});
 });
 if(mobile){const session=await context.newCDPSession(page);await session.send('Network.enable');await session.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:93750});await session.send('Emulation.setCPUThrottlingRate',{rate:4});}
 const response=await page.goto('https://main.d2p2c6exggp4f1.amplifyapp.com');await page.locator('h1').waitFor();await page.waitForTimeout(3000);
 results.push(await page.evaluate(({mobile,status})=>({mode:mobile?'mobile: simulated 1.6Mbps, 150ms latency, 4x CPU':'desktop: unthrottled',status,title:document.title,description:document.querySelector('meta[name="description"]')?.content,language:document.documentElement.lang,headings:document.querySelectorAll('h1').length,canonical:!!document.querySelector('link[rel="canonical"]'),openGraph:!!document.querySelector('meta[property="og:title"]'),fcpMs:performance.getEntriesByName('first-contentful-paint')[0]?.startTime,lcpMs:window.__qa.lcp,cls:window.__qa.cls,loadMs:performance.getEntriesByType('navigation')[0].loadEventEnd,resources:performance.getEntriesByType('resource').map(r=>({name:r.name,bytes:r.transferSize}))}),{mobile,status:response.status()}));
 if(!mobile){await page.screenshot({path:'screenshots/cover-1200x675.png'});const input=page.getByLabel('Terminal command');await input.fill('superpower');await input.press('Enter');await page.locator('.terminal').screenshot({path:'screenshots/command-center.png'});}
 await context.close();
}
console.log(JSON.stringify(results,null,2));
await browser.close();

