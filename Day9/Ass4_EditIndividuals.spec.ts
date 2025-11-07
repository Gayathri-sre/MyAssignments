//Week 3 - Day 4 : Assignment 4 : Edit Individuals
// Url : "https://login.salesforce.com/" 
// Username : dilipkumar.rajendran@testleaf.com
//Password : TestLeaf@2025

import {test,expect} from '@playwright/test'

test ("Edit Individuals", async({page})=> {

    await page.goto("https://login.salesforce.com/")

    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    //console.log(await page.title())
    await page.waitForTimeout(1000)
    
    //Click on Toggle button - Partial attribute based
    await page.locator('//button[contains(@class,"slds-button slds-context-bar")]').click()
    await page.waitForTimeout(2000)

    //Click on View all - Index based
    await page.locator('(//button[@class="slds-button"])[2]').click()
    await page.waitForTimeout(2000)

    //Click Individuals from App Launcher - Text Index based
    await page.locator('(//p[text()="Individuals"])[1]').click()
    await page.waitForTimeout(2000)

    //Click on Search bar and enter Last name - attribute based
    //await page.locator('//input[@name="Individual-search-input"]').fill("rajendran")
    const searchBox = page.locator('//input[@name="Individual-search-input"]'); // adjust name or placeholder if different

    // Fill in the text
    await searchBox.fill("Rajendran");

    // Press Enter key manually
    await searchBox.press('Enter');
    //await page.waitForTimeout(9000)

    //Click on Dropdown button and click Edit - Attribute based
/*     //console.log(await page.locator('(//a[@title="Show 2 more actions"])[1]').count());
    await page.locator('(//a[contains(@class,"-icon-x-small")])[1]').click()
    //Force Click
    //await page.locator('(//a[@title="Show 2 more actions"])[1]').click({ force: true });
    await page.waitForTimeout(50000)
    await page.locator('//a[@title="Edit"]').click()
    //await page.waitForTimeout(2000) */

    await page.locator('//div[@class="slds-table_header-fixed_container slds-scrollable_x"]').click()
    await page.locator('span').filter({ hasText: 'Show Actions' }).first().click()
    await page.locator("//a[@title='Edit']").click()
    //await page.locator('//input[@placeholder="First Name"]').fill("Dilip")
    //await page.locator("//span[text()='Save']").click()

    //Select Salutation drop down and click Mr.
    await page.locator('(//a[@class="select"])[1]').click()
    await page.locator('//a[@title="Mr."]').click()
    await page.waitForTimeout(2000)
    
    //Clear and Enter the First name - Attribute based
    await page.locator('//input[@placeholder="First Name"]').clear()
    await page.locator('//input[@placeholder="First Name"]').fill("MS")
    await page.waitForTimeout(2000)

    //Click on Save - Text based
    await page.locator('//span[text()="Save"]').click()

    //Save and verify the First name
    const expected = page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]')
    await expect(expected).toContainText(" was created.")
    console.log(`verified ${expected}`)

    /*  const nameElement = page.locator('//input[@placeholder="First Name"]');
        await expect(nameElement).toBeVisible();
        console.log(`Name Element ${nameElement}`)
        // Get actual text
        const actvalue = await nameElement.textContent();
        const expvalue="MS"
          
        expect(actvalue).toBe(expvalue)
        console.log(`Verified the Frst Name ${actvalue}`) */

})
