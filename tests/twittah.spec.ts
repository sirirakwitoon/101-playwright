import { expect, test } from "@playwright/test";
import { LoginPage } from "./page/login-page";
import { HomePage } from "./page/homepage";
import { LoginTwittahPage } from "./page/login-twittah";
import { invalidUsers, suspendedUser } from "../fixtures/user";

// test('Visit Twittah', async ({page})=>{
//     await page.goto('https://twittah.web.app');
//     const appName = page.getByTestId('app-name');

//     await expect(appName).toBeVisible();
//     await expect(appName).toHaveText('Twittah!');
// });

// test('Login', async({page})=>{
//     await page.goto('https://twittah.web.app');
//     await page.getByTestId('login-field').fill('nutsrk');
//     await page.getByTestId('password-field').fill('123456');
//     await page.getByTestId('login-button').click();
//     await expect(page.getByTestId('user-profile-display-name'));
//     //post
//     await page.getByTestId('message-field"').fill('hola hola');
//     await page.getByTestId('post-button').click();
//     //logout
//     await page.getByTestId('menu-signout').click();
// })

// test('Post Twitter', async ({ page }) => {
//     const loginPage = new LoginPage(page)
//     const homepage = new HomePage(page)


//     await loginPage.visitTwitter()
//     await loginPage.login()
//     await homepage.post()
// });

// test('Login Fail', async ({ page }) => {
//     const loginPage = new LoginPage(page)

//     await loginPage.visitTwitter()
//     await loginPage.loginFail()
// })

// test('login twittah fail', async ({ page }) => {
//     const loginTwittahPage = new LoginTwittahPage(page)
//     await loginTwittahPage.loginFail()
// })
test.describe('test login fail', async () => {
    for (const invalidUser of invalidUsers) {
        test(`invalid user: ${invalidUser.credential.login}`, async ({ page }) => {
            const loginTwittahPage = new LoginTwittahPage(page)

            await page.goto('https://twittah.web.app/')
            await loginTwittahPage.loginWithUsernamePassword(invalidUser.credential.login, invalidUser.credential.password)
            await loginTwittahPage.shouldContainErrorMessage(invalidUser.credential.errorMessage)
        })
    }
})
