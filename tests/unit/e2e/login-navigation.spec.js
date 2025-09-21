import { test, expect } from "@playwright/test";
// Testing navigation to login page
test.describe("Login navigation", () => {
  test("navigates to the login page from homepage", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/");
    await page.click("text=Login");
    await expect(page).toHaveURL(/\/login/);
  });
});
