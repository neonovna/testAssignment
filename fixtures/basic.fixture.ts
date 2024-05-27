import { test as base } from "@playwright/test";
import { RoutingSection } from "../pages/routingSection.po";
import { SettingsPage } from "../pages/setting.po";
import { ShareSection } from "../pages/shareSection.po";

type MyFixtures = {
  routingSection: RoutingSection;
  shareSection: ShareSection;
};
export let navigate = true;

export const test = base.extend<MyFixtures>({
  routingSection: async ({ page }, use) => {
    const routingSection = new RoutingSection(page);
    const settingsPage = new SettingsPage(page);

    await page.goto("en/live-map/");
    await settingsPage.acceptCookies();
    await settingsPage.closeTourTooltip();

    await use(routingSection);
  },

  shareSection: async ({ page }, use) => {
    const shareSection = new ShareSection(page);
    const settingsPage = new SettingsPage(page);

    await page.goto(
      "/en/live-map/directions/berlin-be-de?to=place.ChIJAVkDPzdOqEcRcDteW0YgIQQ&from=place.ChIJAZ-GmmbMHkcR_NPqiCq-8HI"
    );
    await settingsPage.acceptCookies();
    await settingsPage.closeTourTooltip();

    await use(shareSection);
  },
});

export { expect } from "@playwright/test";
