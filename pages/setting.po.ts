import { Locator, type Page } from "@playwright/test";

export class SettingsPage {
  readonly page: Page;
  readonly cookiesHeading: Locator;
  readonly acceptCookiesButton: Locator;
  readonly tourTooltip: Locator;
  readonly tourTooltipButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cookiesHeading = page.getByRole("heading", { name: "Waze & Cookies" });
    this.acceptCookiesButton = page.getByRole("button", { name: "Agree" });
    this.tourTooltipButton = page.getByRole("button", { name: "Got it" });
  }

  async acceptCookies() {
    try {
      if (await this.cookiesHeading.isVisible()) {
        await this.acceptCookiesButton.click();
      }
    } catch (error) {
      console.warn("Cookies button not found");
    }
  }

  async closeTourTooltip() {
    try {
      await this.tourTooltipButton.waitFor({
        state: "visible",
        timeout: 3000,
      });
      await this.tourTooltipButton.click();
    } catch (error) {
      console.warn("Tour tooltip not visible");
    }
  }
}
