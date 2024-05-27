import { Locator, type Page } from "@playwright/test";

export class ShareSection {
  readonly page: Page;
  readonly shareAndEmbedPopup: Locator;
  readonly sendToPhonePopup: Locator;
  readonly createQRBtn: Locator;
  readonly createQRPopup: Locator;
  readonly routeSection: Locator;
  readonly sideBarMenuBtn: Locator;
  readonly clearSearchIcon: Locator;
  readonly routeLoader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shareAndEmbedPopup = page.getByRole("heading", {
      name: "Share and embed",
    });
    this.sendToPhonePopup = page.getByRole("heading", {
      name: "Send to your phone",
    });
    this.createQRBtn = page.locator("#shareButton").getByRole("button");

    this.createQRPopup = page.getByRole("heading", {
      name: "Share your QR code",
    });
  }

  getShareButton(shareByOption: string) {
    return this.page.locator(`wz-button.wz-routing-poi-${shareByOption}`);
  }
}
