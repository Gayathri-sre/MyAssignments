// ClassRoom:
// Use PageFixture
// Url:https://www.telerik.com/contact
// 1st dropdown -> index
// 2nd dropdown -> value
// 3rd dropdown -> label

import test from '@playwright/test'

test("Practice DD with select tags",async({page})=> {

    await page.goto("https://www.telerik.com/contact")
    await page.selectOption("id=Dropdown-1",{index:1})
    await page.selectOption("#Dropdown-2",{value:'KendoReact'})
    await page.selectOption("#Country-1",{label:'India'})

})

