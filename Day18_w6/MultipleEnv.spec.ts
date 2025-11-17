import test from '@playwright/test'
import dotenv from 'dotenv'
//Execution : $env:envf="LoginDev"
//npx playwright test MultipeEnv.spec.ts
//$env:envf="" --- unset
//$env:envf="LoginQa"
//npx playwright test MultipeEnv.spec.ts

const file=process.env.envf||'LoginQa'

//dotenv.config({path:'utils/LoginQA.env'}) --instead
dotenv.config({path:`Utils/${file}.env`})

test("Read value from Env",async({page})=> {

        //process.env.variable
        //process -> global object for node.js
        //env -> environment path
        //variable -> LT_Username, LT_password
        console.log(process.env.LT_username)

        const url=process.env.LT_URL as string
        const uName=process.env.LT_username as string
        const passw=process.env.LT_password as string

        await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(passw)
        await page.locator(".decorativeSubmit").click()
        await page.locator('text=CRM/SFA').click()
    
})