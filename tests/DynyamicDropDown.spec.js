const { test, expect } = require('@playwright/test')

test('verify dynyamic dropdown',async({page})=>{
    await page.goto('https://www.redbus.in/')
    await page.goto('#src').fill('pune',{delay:1000})
    await page.waitForSelector('.placeHolderMainText')
    let optionsCount = await page.locators('.placeHolderMainText').count()
    console.log(optionCount)
    for(let i = 0; i < optionCount;i++){
        let resultText = await page.locator('.placeHolderMainText').nth(i).textContent()
        console.log(resultText)
        if(resultText =="Nigdi"){
            await page.locator(".placeHolderMainText").nth(i).click()
        }
        break
    }
    await page.waitForTimeout(4000)
})  