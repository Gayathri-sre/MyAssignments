//Classroom activity for Frame Locator
//Execute from root -> npx playwright test frameLocator.spec.ts
/* https://www.leafground.com/frame.xhtml
1. FrameLocator
Nested Frame
Locate First Frame .Locate Sceond Frame.locator().do the action
print the innerText */

import test from '@playwright/test'

/* test("Activity on Frame Locator", async({page})=> {
     
    await page.goto("https://www.leafground.com/frame.xhtml")
    const totalFrame=page.frames()
    console.log(totalFrame.length)

    const firstFrame=totalFrame[1]
    console.log(await firstFrame.locator("#Click").innerText())
    await firstFrame.locator("#Click").click()

}) */

/* test("Nested Frame", async({page})=> {
     
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("#Click").click()
    console.log(await page.frameLocator("(//iframe)[3]").frameLocator("//iframe[@id='frame2']").locator("#Click").innerText())

}) */

/*2.FrameObject
Directly go to 4th frame -> (url and name) use name 
do the action 
print the innerText */

test("Frame Object", async({page}) => {

    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frame({url:"https://www.leafground.com/nested.xhtml"})?.locator("#Click").click()
    await page.waitForTimeout(3000)
    console.log(await page.frame({url:"https://www.leafground.com/nested.xhtml"})?.locator("#Click").innerText())
    await page.waitForTimeout(3000)

})
