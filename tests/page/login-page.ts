import { Locator, Page, expect } from "@playwright/test";
import { incorrectUserPassword, invalidUsers, validUser } from "../../fixtures/user";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByLabel('Phone, email, or username');
        this.nextButton = this.page.getByRole('button', { name: 'Next' });
        this.passwordInput = this.page.getByLabel('Password', { exact: true });
        this.loginButton = this.page.getByTestId('LoginForm_Login_Button');
    }

    async visitTwitter() {
        await this.page.goto('https://twitter.com/login');
    }
    async typeUsername() {
        await this.usernameInput.type(validUser.credential.login);
        await this.nextButton.click();
    }
    async typePassword() {
        await this.passwordInput.type(validUser.credential.password);
    }
    async login() {
        await this.typeUsername()
        await this.typePassword()
        await this.loginButton.click();

    }
    async typeInvalidUsername() {
        await this.usernameInput.type(incorrectUserPassword.credential.login)
        await this.nextButton.click();
    }
    async typeInvalidPassword() {
        await this.passwordInput.type(incorrectUserPassword.credential.password)
        await this.loginButton.click();
    }

    async loginFail() {
        await this.typeInvalidUsername()
        await this.typeInvalidPassword()
    }
}
