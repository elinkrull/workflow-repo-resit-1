import { test, expect } from "@playwright/test";

// Testing clicks on the "Forgot Password?" link
test.describe("Forgot Password", () => {
  test("clicks the Forgot Password link and navigates to the Forgot Password page", async ({
    page,
  }) => {
    await page.goto("http://127.0.0.1:5500/login");
    await page.click("text=Forgot Password?");
    await expect(page).toHaveURL(/\/forgot-password/);
  });

  test("shows success message when submitting a valid email", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/forgot-password");

    await page.getByRole("textbox", { name: /email/i }).fill("workflow@noroff.no");
    await page.getByRole("button", { name: /reset password/i }).click();
    await expect(
      page.getByText(/Password reset instructions have been sent to your email./i),
    ).toBeVisible();
  });

  test("shows error message when submitting an unknown email", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/forgot-password");

    await page.getByRole("textbox", { name: /email/i }).fill("");
    await page.getByRole("textbox", { name: /email/i }).fill("nonexistent@noroff.no");
    await page.getByRole("button", { name: /reset password/i }).click();

    await expect(page.getByText(/No account found with that email address/i)).toBeVisible();
  });
});
