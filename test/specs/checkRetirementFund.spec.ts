import { RetireMentCalculatorPage } from '../helpers/pageobjects/RetirementCalculator.page';
import { userInput } from '../helpers/constants';

let retirementPage = new RetireMentCalculatorPage();

describe("Check Retirement Funds", () => {
    it("should be able to fill in values", async () => {
        await retirementPage.fillForm(userInput.CurrentAge, userInput.RetirementAge, userInput.CurrentAnnualIncome, 
            userInput.SpouseAnnualIncome, userInput.CurrentRetirementSavings, userInput.CurrentRetirementContribution, 
            userInput.AnnualRetirementContributionIncrease, userInput.SocialSecurityIncome, userInput.SocialSecurityOverride);
    })
})