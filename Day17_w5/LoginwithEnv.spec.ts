import test from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config({path:'utils/LoginDev.env'})

test("Read value from Env",async({page})=> {

        //process.env.variable
        //process -> global object for node.js
        //env -> environment path
        //variable -> LT_Username, LT_password
        console.log(process.env.LT_username)

        const url=process.env.LT_url as string
        const uName=process.env.LT_username as string
        const passw=process.env.LT_password as string

        await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(passw)
        await page.locator(".decorativeSubmit").click()
        await page.locator('text=CRM/SFA').click()
    
})