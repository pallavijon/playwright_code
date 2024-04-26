const { test, expect } = require('@playwright/test')
const exp = require('constants')

// test('Handling Radio buttons in playwright',async({page})=>{
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
//     await page.locator('input[id="vfb-7-1"]').check()
//     await expect(page.locator('input[id="vfb-7-1"]')).toBechecked()
//     await page.waitForTimeout(5000)
//     await page.locator('input[id="vfb-7-2"]').check()
//     await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
// })

// test('Handling checkboxes in playwright',async({page}) =>{
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await expect(page.locator('input[id="vfb-6-0"]')).not.toBeChecked()
//     await page.locator('input[id="vfb-6-0"]').check()
//     await page.waitForTimeout(4000)
//     await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked
// })

// // test.only('Handling checkbox using click method',async({page})=>{
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await page.locator('input[id="vfb-6-0"]').click()
//     await page.waitForTimeout(4000)
//     await expect(page.locator('input[id="vfb-6-0"]')).toBeChecked()
// })

// test('Handling Radio button2 in playwright',async({page})=>{
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await expect(page.locator('input[id="vfb-7-2"]')).not.toBeChecked()
//     await page.locator('input[id="vfb-7-2"]').check()
//     await expect(page.locator('input[id="vfb-7-2"]')).toBechecked()
//     await page.waitForTimeout(5000)
//     await page.locator('input[id="vfb-7-3"]').check()
//     await expect(page.locator('input[id="vfb-7-2"]')).not.toBeChecked()
// })

// test('Handling Radio button3 in playwright', async ({ page }) => {
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await expect(page.locator('input[id="vfb-7-3"]')).not.toBeChecked()
//     await page.locator('input[id="vfb-7-3"]').check()
//     await expect(page.locator('input[id="vfb-7-3"]')).toBechecked()
//     await page.waitForTimeout(5000)
//     await page.locator('input[id="vfb-7-1"]').check()
//     await expect(page.locator('input[id="vfb-7-3"]')).not.toBeChecked()
// })

// // test('Handling checkboxes2 in playwright',async({page}) =>{
//     await page.goto('https://www.demo.guru99.com/test/radio.html')
//     await expect(page.locator('input[id="vfb-7-1"]')).not.toBeChecked()
//     await page.locator('input[id="vfb-7-1"]').check()
//     await page.waitForTimeout(4000)
//     await expect(page.locator('input[id="vfb-7-1"]')).toBeChecked
//    })

test('Handling checkboxes3 in playwright', async ({ page }) => {
    await page.goto('https://www.demo.guru99.com/test/radio.html')
    await expect(page.locator('input[id="vfb-7-3"]')).not.toBeChecked()
    await page.locator('input[id="vfb-7-3"]').check()
    await page.waitForTimeout(4000)
    await expect(page.locator('input[id="vfb-7-3"]')).toBeChecked
})
