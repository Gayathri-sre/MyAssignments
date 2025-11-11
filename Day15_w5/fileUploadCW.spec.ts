/* Class roon:
https://www.naukri.com/registration/createAccount
click on I'm experienced
upload the file
setInputFiles() */

import test from '@playwright/test'

test("Upload file with Input tag",async({page})=> {

    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator('//p[contains(text(),"I have work")]').click()

    //await page.locator('#resumeUpload').setInputFiles("Data/Conditional Statements.pdf")
    await page.locator(".uploadAction").setInputFiles("Data/Conditional Statements.pdf")

})

