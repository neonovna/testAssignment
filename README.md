# Test assignment

## Playwright project

This project uses [Playwright](https://playwright.dev/) test framework.

## Prerequirements

To run the project you need to have the following tools installed on your machine:

- [NodeJS LTS, 18+](https://nodejs.org/en/download/)
- [Allure](https://allurereport.org/docs/playwright/) for reports generation and preview

## Installation

To install all the project dependencies, run the following command:

```bash
npm install
```

## Running tests

To run tests in the headless mode:

```bash
npm run test
```

To run tests in the headed mode (when actual browser opens and the test flow is visible), run the following command:

```bash
npm run test:headed
```

To run tests using VS extension:
- [Playwright VS extension](https://playwright.dev/docs/running-tests#run-tests-in-vs-code)

## Reporting

The project utilizes two different reporters:

- Inline reporter
- Allure reporter

When the test finishes, it outputs test results that can be interpreted by Allure reporter. To generate report, run the following:

```bash
allure generate allure-results -o allure-report --clean
```

To view and open Allure results, run:

```bash
allure open allure-report
```