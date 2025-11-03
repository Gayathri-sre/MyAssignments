//Week 3 - Day 4 : Assignment 3 : Create Individuals
// Url : "https://login.salesforce.com/" 
// Username : dilipkumar.rajendran@testleaf.com
//Password : TestLeaf@2025

import {test, expect} from '@playwright/test'

test ("Create Individuals", async({page})=> {

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
    //await page.waitForTimeout(2000)

    //Click Individuals from App Launcher - Text based
    await page.locator('//p[text()="Individuals"]').click()
    await page.waitForTimeout(2000)

    //Click on the New Individual tab - Partial and text based
    //await page.locator('(//span[text()="Individuals"])[1]').click()
    await page.locator('//div[contains(@class,"bar__label-action slds-p-left_none slds")]').click()
    await page.locator('//span[text()="New Individual"]').click()
    //await page.waitForTimeout(2000)

   //Enter Last Name
    await page.locator('//input[@placeholder="Last Name"]').fill("Vaidy")
    await page.waitForTimeout(4000)

    //Click Save and verify Lead name created - Index Based
    //await page.locator('(//button[text()="Save"])[1]').click()
    await page.locator('//button[contains(@class,"button_neutral uiButton--brand")]').click()
    //await page.waitForTimeout(6000)

    //const nameElement = page.locator('//lightning-formatted-name | //slot//lightning-formatted-text | //record-header//*[contains(@title,"Test")] | //records-lwc-highlight-panel//slot//span[contains(text(),"Test")]');
    //await nameElement.first().waitFor({ state: 'visible' });

    //Get actual text
    //const actvalue = (await nameElement.first().textContent())?.trim();
    //const expvalue = "Test";

    /* const nameElement = page.locator('//button[contains(@class,"button_neutral uiButton--brand")]');
    console.log(`Locator  ${nameElement}`)
    await expect(nameElement).toBeVisible();
    await page.waitForTimeout(5000)
    
    // Get actual text
    const actvalue = await nameElement.textContent();
    //await page.waitForTimeout(4000)
    console.log(`Actual Value ${actvalue}`)
    console.log("Actual Value is ", actvalue)
    const expvalue="Vaidy"
      
    expect(actvalue).toBe(expvalue)
    console.log(`Created New Lead ${actvalue}`) */

})
