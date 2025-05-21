import { test, expect } from '@playwright/test';

test.describe('Register User Suite', () => {

  test('✅ Successful registration', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.fill('#name', 'Hervey');
    await page.fill('input[data-qa="signup-email"]', `hervey${Date.now()}@mail.com`);
    await page.click('button[data-qa="signup-button"]');

    await expect(page.locator('h2')).toContainText('Enter Account Information');
  });

  test('❌ Registration with existing email (should fail)', async ({ page }) => {
    await page.goto('https://automationexercise.com/login');
    await page.fill('#name', 'Hervey');
    await page.fill('input[data-qa="signup-email"]', 'existing@mail.com');
    await page.click('button[data-qa="signup-button"]');

    await expect(page.locator('form p')).toContainText('Email Address already exist!');
  });
});
