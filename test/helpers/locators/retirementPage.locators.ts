export const retirementPageLocators = {
    currentAge: "#current-age",
    retirementAge: "#retirement-age",
    currentAnnualIncome: "#current-income",
    spouseAnnualIncome: "#spouse-income",
    currentRetirementSavingsBalance: "input#current-total-savings",
    currentRetirementSavingsRate: "input#current-annual-savings",
    savingsIncreaseRate: "input#savings-increase-rate",
    socialSecurityToggle: (choice:string) => `#${choice}-social-benefits`,
    maritalStatusMarried: "#married",
    socialSecurityOverride: "//input[@id='social-security-override']",
    calculateBtn: "//*[text()='Calculate']"
}

export const resultsPageLocators = {
    resultHeader: "//*[contains(@id,'calculator-results')]/h3[contains(text(),'Results')]",
}