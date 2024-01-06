import { expect, test } from "@playwright/test";
import { LoginPage } from "./page/login.page";
import { HomePage } from "./page/home.page";
import { LoginTwittahPage } from "./page/login-twittah";
import { invalidUsers, suspendedUser } from "../fixtures/user";

// test('Visit Twittah', async ({ page }) => {
//     await page.goto('https://twittah.web.app');
//     const appName = page.getByTestId('app-name');

//     await expect(appName).toBeVisible();
//     await expect(appName).toHaveText('Twittah!');
// });

test('Login and Post', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homepage = new HomePage(page);

    await test.step('visit website', async () => {
        await loginPage.visitTwitter()
    });

    await test.step('login', async () => {
        await loginPage.login()
        await homepage.expectToHomePage()
    });

    await test.step('Post', async () => {
        const messagePost = 'playwright eiei';
        await homepage.post(messagePost)
        await page.waitForTimeout(1000)
        await homepage.expectDisplayPostMessage(messagePost)
    });
    await test.step('logout', async () => {
        await loginPage.logout();
    });
})
test.describe('Login fail', async () => {
    for (const invalidUser of invalidUsers) {
        test(`invalid user: ${invalidUser.credential.login}`, async ({ page }) => {
            const loginTwittahPage = new LoginTwittahPage(page)

            await page.goto('https://twittah.web.app/')
            await loginTwittahPage.loginWithUsernamePassword(invalidUser.credential.login, invalidUser.credential.password)
            await loginTwittahPage.shouldContainErrorMessage(invalidUser.credential.errorMessage)
        })
    }
})
