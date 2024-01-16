import { test, expect } from '@playwright/test';


test( 'Hillel1', async ({ page }) => {
 await page.goto('https://ithillel.ua/');

 await expect(page).toHaveTitle(/Комп'ютерна школа Hillel Online: Курси IT-технологій/);

 await page.getByRole('link', { name: 'Контакти' }).click();

 await page.getByRole('button', { name: 'Безкоштовна консультація' }).click();
});




test( 'Hillel2', async ({ page }) => {
    await page.goto('https://ithillel.ua/corp-ed/');

    await expect(page).toHaveTitle('Корпоративне навчання Online: корпоративні тренінги для співробітників');
    
    await expect(page.getByText('Стандартизовані курси та індивідуальні програми для ваших працівників')).toBeVisible();

    const activeLink = page.getByRole('link', { name: 'apple' });
     await activeLink.click();


});

test( 'Hillel3', async ({ page }) => {
    await page.goto('https://ithillel.ua/corp-ed/');

    const TEST_EMAIL = [
        'email@test.com'
    ];
    const email = page.getByPlaceholder('Введіть свій email');
    
    await email.fill(TEST_EMAIL[0]);
    await email.press('Enter');
});


test( 'Hillel4', async ({ page }) => {
    await page.goto('https://ithillel.ua/corp-ed/');
    await page.locator('div').filter({ hasText: 'Підпишіться на розсилку — залишайтеся у курсі трендів IT' }).isVisible;
    await expect(page.getByRole('button', { name: 'form-mailing' })).toBeHidden();

});

test( 'Hillel5', async ({ page }) => {
    await page.goto('https://ithillel.ua/');
    await page.getByRole('button', { name: 'Курси' }).click();
    const search = page.getByRole('textbox', { name: 'Пошук по курсам' });
    await search.fill('QA');
    await page.locator('#coursesMenuSearchPanel').getByRole('link', { name: 'QA Start' }).isVisible;

});
