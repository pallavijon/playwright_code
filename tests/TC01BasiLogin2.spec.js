const {test} = require('@playwright/test')

test('Verify the login functionality with valid credentials',async({page})=>{
  // AAA
  //Arrage
  //Action
  //Assertion
  // step 1 Navigate the URL
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  //Enter Username 
  // tagName[attr=value]
  await page.locator('input[name="username"]').fill('Admin')
  // Enter password
  await page.locator('input[name="password"]').fill('admin123')
  // Click om login button
  await page.locator('button[type="submit"]').click()
  await page.waitForTimeout(4000)
  // Valiadtion
  await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
  await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible()
  await expect(page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Dashboard')
  await expect(page).toHaveTitle('OrangeHRM')
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  })
  
  test.only('Verify the login functionality with invalid credentials',async({page})=>{
  //step 1 Navigate to the URL 
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //step 2 Enter invalid credentils in UsernameField
  //taganame[attr = value]
  await page.locator('[name="username"]').fill('Adminn')
  //Step 3 Enter invalid credentils in PasswordField
  await page.locator('[name="password"]').fill('admin1234')   
  //Step 4 Click on login Button 
  await page.locator('button[type="submit"]').click()
  await page.waitForTimeout(4000)
  //Validations
  await expect(page.locator('.oxd-alert-content-text')).toBeVisible()
  await expect(page.locator('.oxd-alert-content-text')).toHaveText('Invalid credentials')
  await expect(page.locator('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')).toBeVisible()
  await expect(page.locator('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')).toHaveText('Forgot your password?')
})