//Week 3 - Day 4 : Assignment 2 : Edit Lead
// Url : "http://leaftaps.com/opentaps/control/main" 
// Username : Demosalesmanager
//Password : crmsfa

import test from '@playwright/test'

test ("Edit Lead", async({page})=> {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(1000)
    
    //Click on CRM/SFA Image - Attribute based
    await page.locator('//div[@class="crmsfa"]').click()
    await page.waitForTimeout(2000)

    //Click on Leads - Text based
    await page.locator('//a[text()="Leads"]').click()
    await page.waitForTimeout(2000)

    //Click on Create Lead - Text based
    await page.locator('//a[text()="Create Lead"]').click()
    await page.waitForTimeout(2000)

    //Enter Company name
    await page.locator("#createLeadForm_companyName").fill("TestLeaf")
    await page.waitForTimeout(2000)

    //Enter First Name
    await page.locator("#createLeadForm_firstName").fill("Harry ")
    await page.waitForTimeout(2000)

    //Enter Sur Name
    await page.locator("#createLeadForm_lastName").fill("Potter")
    await page.waitForTimeout(2000)

    //Click on Create Lead - Attribute based
    await page.locator('//input[@class="smallSubmit"]').click()
    await page.waitForTimeout(2000)

    //Click Edit - Text based
    await page.locator('//a[text()="Edit"]').click()
    await page.waitForTimeout(5000)

    //Update Company name
    await page.locator("#updateLeadForm_companyName").fill("Amazon")
    //await page.waitForTimeout(5000)

    //Click Update - Attribute based
    await page.locator('//input[@value="Update"]').click()
    //await page.waitForTimeout(6000)

})
