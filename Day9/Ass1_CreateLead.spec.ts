//Week 3 - Day 4 : Assignment 1 : Create Lead
// Url : "https://login.salesforce.com/" 
// Username : dilipkumar.rajendran@testleaf.com
//Password : TestLeaf@2025
//Execute : npx playwright test Ass1_CreateLead.spec.ts 
//Debug : npx playwright test Ass1_CreateLead.spec.ts --debug

import {test, expect} from '@playwright/test'

test.beforeEach(async ({page }) => {
  page.on('dialog', async dialog => await dialog.dismiss());
  page.on('popup', async popup => await popup.close());

});

test ("Create Lead", async({page})=> {

    await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //console.log(await page.title())
    await page.waitForTimeout(1000)
    
    //Click on Toggle button - Partial attribute based
    //await page.locator(".slds-button slds-context-bar__button slds-icon-waffle_container slds-show").click();
    await page.locator('//button[contains(@class,"slds-button slds-context-bar")]').click()
    await page.waitForTimeout(2000)

    //Click on View all - Index based
    await page.locator('(//button[@class="slds-button"])[2]').click()
    await page.waitForTimeout(2000)

    //Click on Sales - Text based
    await page.locator('//p[text()="Sales"]').click()
    await page.waitForTimeout(2000)

    //Click on Leads - Index based
    await page.locator('(//span[text()="Leads"])[1]').click()
    await page.waitForTimeout(2000)

    //Click on New Button - Text based
    await page.locator('//button[text()="New"]').click()
    await page.waitForTimeout(2000)

    //Select Salutation drop down - Attribute based
    //await page.locator('//button[@data-value="Mr."]')
    //await page.selectOption("#salutation",{label:'Mr.'})
    //await page.selectOption('button[name="salutation"]')
    //await page.locator('//button[@data-value="Mr."]').click()
    await page.locator("//button[@aria-label='Salutation']").click()
    await page.locator('//span[@title="Mr."]').click()
    //console - allow pasting - setTimeout(()=>{debugger;},4000)-freeze the DOM
    //await page.waitForTimeout(5000)
    
    //Enter Last name
    await page.locator('//input[@placeholder="Last Name"]').fill("Vaidy")
    //await page.waitForTimeout(6000)

    //Enter Company name
    await page.locator('//input[@name="Company"]').fill("TestLeaf")
    //await page.waitForTimeout(6000)

    //Click Save and verify Lead name created - Index Based
    //await page.locator('(//button[text()="Save"])[1]').click()
    await page.locator('//button[@name="SaveEdit"]').click()
    //await page.waitForTimeout(3000)

    const expected = page.locator('//div[contains(text()," was created.")]')
    await expect(expected).toContainText(" was created.")
    console.log(`verified ${expected}`)
    

/*     const nameElement = page.locator('//button[@name="SaveEdit"]');
    await expect(nameElement).toBeVisible();
    console.log(`Name Element ${nameElement}`)
    // Get actual text
    const actvalue = await nameElement.textContent();
    const expvalue="Save"
      
    expect(actvalue).toBe(expvalue)
    console.log(`Created New Lead ${actvalue}`) */

})  
