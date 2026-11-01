const { test, expect } = require("@playwright/test");

test("CareerPath homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await expect(page).toHaveTitle(/CareerPath/i);
});