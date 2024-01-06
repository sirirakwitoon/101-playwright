import { Locator, Page, expect } from "@playwright/test";
import { incorrectUserPassword, invalidUsers, validUser } from "../../fixtures/user";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly nextButton: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByTestId('login-field');
        this.passwordInput = this.page.getByTestId('password-field');
        this.loginButton = this.page.getByTestId('login-button');
        this.logoutButton = this.page.getByTestId('menu-signout');
    }

    async visitTwitter() {
        await this.page.goto('https://twittah.web.app');
    }
    async typeUsername() {
        await this.usernameInput.type(validUser.credential.login);
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

    async logout(){
        await this.logoutButton.click()
    }
}
