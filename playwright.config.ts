import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'https://automationexercise.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',     
    video: 'retain-on-failure',        
  },
  projects: [
    { name: 'Chromium', use: { browserName: 'chromium' } },
    { name: 'Firefox', use: { browserName: 'firefox' } },
  ],
});
