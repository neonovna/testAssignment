import { test, expect } from "../fixtures/basic.fixture";

test.describe(`Waze share tests`, () => {
  test(`should open Share and Embed popup`, async ({ shareSection }) => {
    await shareSection.getShareButton("share").click();

    await expect(shareSection.shareAndEmbedPopup).toBeVisible();
  });

  test(`should open Send to Phone popup`, async ({ shareSection }) => {
    await shareSection.getShareButton("send-to-phone").click();

    await expect(shareSection.sendToPhonePopup).toBeVisible();
  });

  test(`should open create QR popup`, async ({ shareSection }) => {
    await shareSection.createQRBtn.click();

    await expect(shareSection.createQRPopup).toBeVisible();
  });
});
