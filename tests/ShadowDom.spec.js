const {test,expect}= require('@playwright/test')

test('ShadowDom',async({page})=>{
    await page.goto('https://books-pwakit.appspot.com/')
    await page.locator('#input').fill('pallavi')
    await page.waitForTimeout(3000)
})