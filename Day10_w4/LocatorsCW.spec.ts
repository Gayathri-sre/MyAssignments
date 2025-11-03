//Playwright Locators Class task 
/* ClassRoom:
http://leaftaps.com/opentaps/control/main
Enter username -> getByLable
enter password -> getByRole 
clickon login button -> getByRole
click crmsfa -> getByRole */

// Url : "http://leaftaps.com/opentaps/control/main" 
// Username : Demosalesmanager
//Password : crmsfa

import test from '@playwright/test'

test ("Locators Class work ", async({page})=> {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByLabel("Username").fill("Demosalesmanager")
    await page.getByRole("textbox",{name:"Password"}).fill("crmsfa")
    await page.getByRole("button",{name:"Login"}).click()
    await page.waitForTimeout(1000)

})