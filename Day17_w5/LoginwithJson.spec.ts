//import <variable name> from <Path of json file>
import test from '@playwright/test'
import getData from "../../utils/Login.json"

//Create utils folder inside the workspace
for(let getValue of getData){
    //For single value
//const value=getData[0]
test(`Read the value from Json ${getValue.TestCase}`,async({page})=> {

    console.log(getValue.UserName)
    await page.goto("http://www.leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill(getValue.UserName)
    await page.locator("#password").fill(getValue.Password)
    await page.locator(".decorativeSubmit").click()
    await page.locator('text=CRM/SFA').click()

})
}