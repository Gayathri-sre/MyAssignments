import {test as myTest} from '@playwright/test'

export const custFixture=myTest.extend<{useLogin:any}>({

    useLogin:async({page},use)=> { 

        await page.goto("https://login.salesforce.com/")
        await page.fill("#username","gayathriv2610306@agentforce.com")
        await page.fill("#password","Sremithra@123")
        await page.click("#Login")

        await use(page)
    }

})