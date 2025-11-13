import test from '@playwright/test'

test("Normal Test",async({page})=> {

    await page.goto("https://flipkart.com/")

})

test("Test Only",async({page})=> {

    await page.goto("https://amazon.in/")

})

test.skip("Skip the test",async({page})=> {

    await page.goto("https://flipkart.com/")

})

test.fixme("Test.fixme",async({page})=> {

    //test.fixme will skip the test
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#Password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('text=CRM/SFA').click()

})

test.fail("Fail test case",async({page})=> {

    await page.goto("https://amazon.in/")

})

//Test Info -> 
test("Test Info",async({page})=> {

    test.info().annotations.push({type:'smoke',description:'Check Login function'},
        {type:'Author',description:'Gayathri'})

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('text=CRM/SFA').click()

})

test("Test Slow ",async({page})=> {

    test.slow()

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.locator('text=CRM/SFA').click()

})