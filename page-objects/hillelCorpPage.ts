import { expect, type Locator, type Page } from '@playwright/test';

export class CorpPage{
    readonly page: Page;
    readonly getCorpTitle: Locator;
    readonly getCorpTitle2: Locator;
    readonly getAppstoreLink: Locator;
    readonly getEmailInput: Locator;
    readonly getSubmitEmail: Locator;
    readonly getEmailText: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.getCorpTitle = page.getByRole('heading', { name: 'Корпоративне навчання Online' });
        this.getCorpTitle2 = page.getByText('Стандартизовані курси та індивідуальні програми для ваших працівників');
        this.getAppstoreLink = page.getByRole('link', { name: 'apple' });
        this.getEmailInput = page.getByPlaceholder('Введіть свій email');
        this.getSubmitEmail = page.locator('#form-mailing').getByRole('button');
        this.getEmailText = page.locator('div').filter({ hasText: 'Підпишіться на розсилку — залишайтеся у курсі трендів IT' });
   
    }
async goto() {
    await this.page.goto('https://ithillel.ua/corp-ed/');
}

}
