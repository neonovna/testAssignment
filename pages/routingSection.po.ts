import { Locator, type Page } from "@playwright/test";

export class RoutingSection {
  readonly page: Page;
  readonly searchForm: Locator;
  readonly startPointInput: Locator;
  readonly destinationInput: Locator;
  readonly suggestionListbox: Locator;
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
    this.searchForm = page.locator(".wz-search-from-to");
    this.startPointInput = page.locator(".wz-search-container.is-origin");
    this.destinationInput = page.locator(".wz-search-container.is-destination");
    this.suggestionListbox = page.locator("#search-suggestions");
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
    this.routeSection = page.locator(".wm-routes");

    this.sideBarMenuBtn = page.locator(".wz-sidebar-btn.w-icon-hamburger-menu");

    this.clearSearchIcon = page.locator(".wm-search__clear-icon");
    this.routeLoader = page.locator(".wm-routing-status__loader");
  }

  async searchStartPointByEnter(searchText: string) {
    await this.startPointInput.click();
    await this.startPointInput.pressSequentially(searchText, { delay: 300 });

    await this.page.keyboard.press("Enter", { delay: 2000 });
  }

  async searchDestinationByEnter(searchText: string) {
    await this.destinationInput.click();
    await this.destinationInput.pressSequentially(searchText, { delay: 200 });

    await this.page.keyboard.press("Enter", { delay: 2000 });
  }

  async openSidebarMenu() {
    await this.sideBarMenuBtn.click();
  }

  async clearStartPointInput() {
    await this.startPointInput.click();
  }

  async searchStartAndDestionationByEnter(
    startPointText: string,
    destinationText: string
  ) {
    await this.searchStartPointByEnter(startPointText);
    await this.searchDestinationByEnter(destinationText);
  }

  getResultHeadlineByText(searchText: string) {
    return this.page.locator(
      `.wm-poi-name-and-address__name:has-text("${searchText}")`
    );
  }

  getShareButton(shareByOption: string) {
    return this.page.locator(`wz-button.wz-routing-poi-${shareByOption}`);
  }
}
