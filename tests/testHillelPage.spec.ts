import { test, expect, Locator } from '@playwright/test';
import { describe } from 'node:test';
import { CorpPage } from '../page-objects/hillelCorpPage';


test.describe("corp page tests", async() => {
    test( 'check titles,link', async ({ page }) => {
        const corpPage = new CorpPage(page);
        await corpPage.goto();
        await corpPage.getCorpTitle.isVisible();
        await corpPage.getCorpTitle2.isVisible();
        await corpPage.getAppstoreLink.click();

});

test( 'check email input and send button', async ({ page }) => {
    const corpPage = new CorpPage(page);
    await corpPage.goto();
    await corpPage.getEmailInput.fill('email@test.com');
    await corpPage.getSubmitEmail.press('Enter');
});


test('check text and hidden button', async ({ page }) => {
    const corpPage = new CorpPage(page);
    await corpPage.goto();

    await corpPage.getEmailText.isVisible;
    await corpPage.getSubmitEmail.isDisabled;

});
});


