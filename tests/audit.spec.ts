import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
test('WCAG A/AA automated accessibility scan',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 const scan=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa']).analyze();
 expect(scan.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
});
test('assets, console, fragment targets and untrusted terminal input',async({page})=>{
 const failures:string[]=[];page.on('pageerror',e=>failures.push(e.message));page.on('response',r=>{if(r.url().startsWith(new URL(page.url()).origin)&&r.status()>=400)failures.push(`${r.status()} ${r.url()}`);});
 await page.goto('/');await expect(page.locator('h1')).toHaveCount(1);
 for(const link of await page.locator('a[href^="#"]').all()){const href=await link.getAttribute('href');if(href&&href!=='#')await expect(page.locator(href)).toHaveCount(1);}
 const input=page.getByLabel('Terminal command');await input.fill('<img src=x onerror=alert(1)>');await input.press('Enter');await expect(page.getByRole('log')).toContainText('<img src=x onerror=alert(1)>');await expect(page.getByRole('log').locator('img')).toHaveCount(0);
 await input.fill('unfinished command');await input.press('ArrowUp');await input.press('ArrowDown');await expect(input).toHaveValue('unfinished command');
 await input.fill('  ABOUT  ');await input.press('Enter');await expect(page.getByRole('log').locator('.entry').last()).toContainText('Sami Siddiqui');expect(failures).toEqual([]);
});
test('keyboard entry and narrow/zoomed layouts',async({page,browserName})=>{
 await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await expect(page.locator('h1')).toBeVisible();
 // WebKit follows the host's full-keyboard-access setting for tabbing to links.
 if(browserName==='webkit')await page.getByRole('link',{name:'Skip to content'}).focus();else await page.keyboard.press('Tab');
 await expect(page.getByRole('link',{name:'Skip to content'})).toBeFocused();await page.keyboard.press('Enter');
 for(const width of [320,360,390,640,768,1024,1440,1920]){await page.setViewportSize({width,height:900});expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`overflow at ${width}`).toBe(true);}
});
