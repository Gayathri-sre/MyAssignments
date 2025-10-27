//Save filename as "Filename.spec.ts"
//No spaces in the filname
//launch_browser

//Execution : npx playwright test filename.spec.ts
//Playwright should run from workspace not from folder


import test, { chromium } from '@playwright/test'

test("Launch Browser",async()=> {
    //Launch browser
    const browser=await chromium.launch({channel:"chrome",headless:false})
    //const browser1=await firefox.launch()
    //const browser2=await webkit.launch()
    //Headless - Able to see UI
    //open window
    const context=await browser.newContext()
    //without await we cannot do anything
    //Open page
    const page=await context.newPage()
    //load the url
    await page.goto("https://playwright.dev/")
    await page.waitForTimeout(3000)

})
