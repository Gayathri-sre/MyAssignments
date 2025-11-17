//npm install csv-parse
//npm install fs
//If running in parallel go to config file - fullyParallel: false,

import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'

const data=parse(fs.readFileSync(path.join(__dirname,"../../Utils/Login.csv")),
{columns:true})

let value:any

for(value of data) {
test(`Login wuth CSV file ${value.TestCaseID}`,async({page})=> {
    
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill(value.Username)
    await page.locator("#password").fill(value.Password)
    await page.click("#Login")

})
}