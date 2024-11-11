import { config } from "../../wdio.conf";

export class RetireMentCalculatorPage {
    browser;

    constructor (browser) {
        this.browser = browser;

    }

    public async goToRetirementCalculatorPage() {
        await this.browser.url(`${config.baseUrl}+/insights-tools/retirement-calculator.html`);
    }
}