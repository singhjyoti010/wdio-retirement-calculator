import { config } from "../../../wdio.conf";
import { retirementPageLocators, resultsPageLocators } from "../locators/retirementPage.locators";

export class RetireMentCalculatorPage {

    public async goToRetirementCalculatorPage() {
        await browser.url(`${config.baseUrl}/insights-tools/retirement-calculator.html`);
        await browser.maximizeWindow();
    }

    public async fillCurrentAge(currAge: number) {
    await $(retirementPageLocators.currentAge).setValue(currAge);
    }

    public async fillRetirementAge(retirementAge: number) {
        await $(retirementPageLocators.retirementAge).setValue(retirementAge);
    }

    public async fillAnnualIncome(annualIncome: number) {
        await $(retirementPageLocators.currentAnnualIncome).setValue(annualIncome);
    }

    public async fillSpouseAnnualIncome(spouseAnnualIncome: number) {
        await $(retirementPageLocators.spouseAnnualIncome).setValue(spouseAnnualIncome);
    }

    public async fillRetirementSavingBal(savingsBalance: number) {
        await $(retirementPageLocators.currentRetirementSavingsBalance).setValue(savingsBalance);
    }

    public async fillRetirementSavingsRate(savingsRate: number) {
        await $(retirementPageLocators.currentRetirementSavingsRate).setValue(savingsRate);
    }

    public async fillYearlySavingsRateIncrease(savingsRateIncrease: number) {
        await $(retirementPageLocators.savingsIncreaseRate).setValue(savingsRateIncrease);
    }   
    
    public async socialSecurityBenefits(choice: string) {
        // await $(retirementPageLocators.socialSecurityToggle(choice.toLowerCase())).scrollIntoView();
        // const isChecked = await $(retirementPageLocators.socialSecurityToggle(choice.toLowerCase())).isSelected();
        // console.log(isChecked);
        // await $(retirementPageLocators.socialSecurityToggle(choice.toLowerCase())).waitForClickable({ timeout: 15000 });
        // await $(retirementPageLocators.socialSecurityToggle(choice.toLowerCase())).click();
        let element = await $(retirementPageLocators.socialSecurityToggle(choice.toLowerCase()));
        await browser.execute((el) => el.click(), element);
    }

    public async markMaritalStatusMarried() {
        let element = await $(retirementPageLocators.maritalStatusMarried);
        await browser.execute((el) => el.click(), element);
    }

    public async socialSecurityOverride(securityOverride: number) {
        await $(retirementPageLocators.socialSecurityOverride).setValue(securityOverride);
    }

    public async clickCalculate() {
        await $(retirementPageLocators.calculateBtn).click();
    }

    public async checkResults() {
        await ($(resultsPageLocators.resultHeader)).waitForDisplayed();
        await expect($(resultsPageLocators.resultHeader)).toBe('visible');
    }


    public async fillForm(someCurrAge: number, someRetirementAge: number, currAnnualIncome: number, spouseAnnualIncome:number, 
        retirementSavings: number, savingsRate: number, annualIncreaseInsavings: number, socialSecurity: string, securityOverrideAmount: number) {
        await this.goToRetirementCalculatorPage();
        await this.fillCurrentAge(someCurrAge);
        await this.fillRetirementAge(someRetirementAge);
        await this.fillAnnualIncome(currAnnualIncome);
        await this.fillSpouseAnnualIncome(spouseAnnualIncome);
        await this.fillRetirementSavingBal(retirementSavings);
        await this.fillRetirementSavingsRate(savingsRate);
        await this.fillYearlySavingsRateIncrease(annualIncreaseInsavings);
        await this.socialSecurityBenefits(socialSecurity);
        await this.markMaritalStatusMarried();
        await this.socialSecurityOverride(securityOverrideAmount);
        await this.clickCalculate();
        await this.checkResults();
    }
}