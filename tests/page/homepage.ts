import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly postTextArea: Locator;
    readonly postButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.postTextArea = this.page.getByTestId('tweetTextarea_0');
        this.postButton = this.page.getByTestId('tweetButtonInline');
    }
    async post() {
        await this.postTextArea.type('post')
        await this.postButton.click();
    }

}