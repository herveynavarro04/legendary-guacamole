import { test, expect } from '@playwright/test';

test.describe('Contact Form Suite', () => {

  test('✅ Send contact form successfully', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await page.fill('[data-qa="name"]', 'Hervey');
    await page.fill('[data-qa="email"]', 'hervey@mail.com');
    await page.fill('[data-qa="subject"]', 'Testing');
    await page.fill('[data-qa="message"]', 'Hola, estoy probando Playwright');
    await page.click('[data-qa="submit-button"]');

    page.once('dialog', async dialog => {
      await dialog.accept();
    });

    await expect(page.locator('.status')).toContainText('Success! Your details have been submitted successfully.');
  });

  test('❌ Contact form with empty fields (should fail)', async ({ page }) => {
    await page.goto('https://automationexercise.com/contact_us');
    await page.click('[data-qa="submit-button"]');

    await expect(page.locator('.status')).toContainText('Error');
  });
});
