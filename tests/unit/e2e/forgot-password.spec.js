import { test, expect } from "@playwright/test";

// Testing clicks on the "Forgot Password?" link
test.describe("Forgot Password navigation link", () => {
  test("clicks the Forgot Password link on the login page", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/login");
    await page.click("text=Forgot Password?");
    await expect(page).toHaveURL(/\/forgot-password/);
  });
});
