import { test, expect } from '@playwright/test';
test('orbital motion respects reduced-motion preferences',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');
 const monogram=page.locator('.monogram');
 await expect(monogram).toHaveCSS('animation-name','monogram-drift');
 await page.emulateMedia({reducedMotion:'reduce'});
 await expect(monogram).toHaveCSS('animation-name','none');
 await expect(page.getByRole('heading',{level:1})).toBeVisible();
});
test('production terminal supports all commands, history, clear and recovery',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');
 const input=page.getByLabel('Terminal command');await input.scrollIntoViewIfNeeded();
 for(const command of ['about','skills','projects','experience','aws','devops','contact','superpower','unknown']){await input.fill(command);await input.press('Enter');await expect(page.getByRole('log').locator('.entry').last().locator('.prompt')).toContainText(command);}
 await expect(page.getByRole('log')).toContainText('Command not found: unknown');await input.press('ArrowUp');await expect(input).toHaveValue('unknown');await input.press('ArrowUp');await expect(input).toHaveValue('superpower');await input.press('ArrowDown');await expect(input).toHaveValue('unknown');await input.press('ArrowDown');await expect(input).toHaveValue('');await input.fill('clear');await input.press('Enter');await expect(page.getByRole('log').locator('.entry')).toHaveCount(0);await input.fill('help');await input.press('Enter');await expect(page.getByRole('log')).toContainText('Available commands');expect(errors).toEqual([]);
});
test('filters and section links work',async({page})=>{await page.goto('/');await page.getByRole('button',{name:'Data',exact:true}).click();await expect(page.locator('.project-card')).toHaveCount(1);await expect(page.locator('.project-card')).toContainText('Enterprise ETL');await page.getByRole('button',{name:'All projects'}).click();await expect(page.locator('.project-card')).toHaveCount(3);for(const id of ['about','skills','projects','journey','contact','command-center'])await expect(page.locator(`#${id}`)).toHaveCount(1);for(const link of await page.locator('a[target="_blank"]').all()){expect(await link.getAttribute('href')).toMatch(/^https:\/\/(github.com|www.linkedin.com)\//);expect(await link.getAttribute('rel')).toContain('noreferrer');}});
for(const [name,width,height] of [['desktop',1440,1000],['tablet',768,1024],['mobile',390,844],['small-mobile',320,740]] as const){test(`${name} layout and screenshot`,async({page})=>{await page.setViewportSize({width,height});await page.goto('/');await page.emulateMedia({reducedMotion:'reduce'});await expect(page.getByRole('heading',{level:1})).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);if(width<761){await page.getByRole('button',{name:'Open navigation'}).click();await page.getByRole('navigation').getByRole('link',{name:'About',exact:true}).click();await expect(page.getByRole('button',{name:'Open navigation'})).toBeVisible();}await page.screenshot({path:`screenshots/${name}.png`,fullPage:true});});}
