import test from '@playwright/test'

test("Handle Multiple Window", async({page,context})=> {

    await page.goto("https://www.leafground.com/window.xhtml")
    const[multipleWindow] = await Promise.all([context.waitForEvent('page'),
    await page.locator('//span[text()="Open Multiple"]').click()   

])

    const count = multipleWindow.context().pages()
    console.log(count.length)

    let dashboard:any
    let webtable:any

    for (let i=0;i<count.length;i++) {
        await count[i].waitForLoadState();
        const title=await count[i].title()
        console.log("Page title:", title);

        if(title.includes('Web Table')){
            //resolve the promise
            webtable=count[i]
        }else if(title.includes('Dashboard')){
            //resolve promise
            dashboard=count[i]
    }   
}

    if(webtable) {
        await webtable.locator('//input[@id="form:j_idt89:globalFilter"]').fill("France")
        await webtable.keyboard.press('Enter');
        await webtable.waitForTimeout(5000);
  } else {
    console.log("❌ Web Table page not found!");
  }
})