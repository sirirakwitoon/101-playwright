import { Locator, Page, expect } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly userDisplayName: Locator;
    readonly postTextArea: Locator;
    readonly postButton: Locator;
    readonly postMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.postTextArea = this.page.getByTestId('message-field');
        this.postButton = this.page.getByTestId('post-button');
        this.userDisplayName = this.page.getByTestId('user-profile-display-name');
        this.postMessage = this.page.getByText('playwright eiei').first()

    }
    async expectToHomePage(){
        await expect(this.userDisplayName).toHaveText('sirirak')
    }

    async post(message) {
        await this.postTextArea.click();
        await this.postTextArea.type(message);
        await this.postButton.click();
    }

    async expectDisplayPostMessage(message){
        await expect(this.postMessage).toHaveText(message);
    }

}