import { Locator, Page, expect } from "@playwright/test";
import { incorrectUserPassword, invalidUsers, validUser } from "../../fixtures/user";

export class LoginTwittahPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByTestId('login-field');
        this.passwordInput = this.page.getByTestId('password-field');
        this.loginButton = this.page.getByTestId('login-button');
    }
    async visitTwitter() {
        await this.page.goto('https://twittah.web.app/');
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

    async shouldContainErrorMessage(message: string) {
        await expect(this.page.getByTestId('error-message')).toHaveText(message)
    }

    async loginWithUsernamePassword(username: string, password: string) {
        await this.usernameInput.type(username)
        await this.passwordInput.type(password)
        this.loginButton.click()
    }
}
