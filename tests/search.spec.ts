import { test, expect } from "../fixtures/basic.fixture";
import { cities, routesPoints } from "../testData";

test.describe(`Waze search tests`, () => {
  cities.forEach((city) => {
    test(`should search ${city} city as starting point using Enter key`, async ({
      routingSection: liveMapPage,
    }) => {
      await liveMapPage.searchStartPointByEnter(city);

      await expect(liveMapPage.getResultHeadlineByText(city)).toBeVisible();
    });
  });

  routesPoints.forEach((route) => {
    test(`should find ${route.startPoint} to ${route.destination} `, async ({
      routingSection: liveMapPage,
    }) => {
      await liveMapPage.searchStartPointByEnter(route.startPoint);
      await liveMapPage.searchDestinationByEnter(route.destination);

      await liveMapPage.routeSection.waitFor({
        state: "visible",
        timeout: 20000,
      });

      await expect(liveMapPage.routeSection).toBeVisible();
    });
  });

  test(`should clear search input`, async ({ routingSection: liveMapPage }) => {
    await liveMapPage.searchStartPointByEnter("Warsaw");

    await liveMapPage.startPointInput.click();

    await liveMapPage.clearSearchIcon.first().focus();
    await liveMapPage.clearSearchIcon.first().click();

    await expect(liveMapPage.startPointInput).toBeEmpty();
  });
});
