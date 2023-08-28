import Utils from "./Utils"

class GettingStarted {


  public async openHomePage() {
    await browser.url("https://www.bendigobank.com.au/");
    await Utils.waitForPageLoad();
    await Utils.maximizeWindow();
  }


  public async selectBanking() {
    await Utils.clickOnElement("button[name='banking']");
  }

  public async chooseCreditCard() {
    await Utils.clickOnElement("=Credit cards");
  }

  public async applyForCreditCard() {
    await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/");
    await Utils.scrollIntoElementView("//a[@id='Button-232952']");
    await Utils.clickOnElement("//a[@id='Button-232952']");
  }

  public async continueToApply() {
    await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright");
    await Utils.clickOnElement("//*[@id=\"ModalButton-248418\"]");
  }

  public async PopUpClickApply() {
    await Utils.clickOnElement("(//a[@id='Button-237631'])[3]");

  }


  public async SwitchToNewWindow() {
    await browser.pause(5000);
    const Title = "Product Details | Bendigo Bank Apply Online | Credit Card";
    await Utils.SwitchToWindow(Title);
  }


  public async setProductDetails() {
    const CreditLimitInput = "#creditLimitAmountInput";
    await Utils.waitForElementDisplayed(CreditLimitInput);
    await Utils.clickOnElement(CreditLimitInput);
    await Utils.setInputField(CreditLimitInput, "10000");
    await Utils.clickOnElement("button[name='creditCardUsage']");
    await Utils.clickOnElement("button[name='contBtn']");
    await browser.pause(8000);
  }

  public async VerifyPageTitle(value: string) {

    const element = "//h2[normalize-space()='" + value + "']";
    await Utils.VerifyElementText(element, value);
  }

  public async SelectSingleMaritalStatus() {
    await Utils.waitForElementDisplayed("//*[@name=\"maritalStatus\"]");
    await Utils.selectDropdownByVisibleText("//*[@name=\"maritalStatus\"]", "Single")

  }


  public async SelectPromoCode() {

    const element = "//*[@ng-change='promoCodeDisplay(false)'][1]";
    await Utils.waitForElementDisplayed(element);
    await Utils.clickOnElement(element);
    await Utils.clickOnElement("//button[normalize-space()='Continue']");
  }

  public async VerifyEligibiityTitle(value: string) {

    const Title = "//h2[normalize-space()='Time & Eligibility'][1]";
    await Utils.VerifyElementText(Title, "Time & Eligibility");
  }

  public async VerifyExpenseTitle() {
    await Utils.VerifyElementPresent("//h3[normalize-space()='Expenses']");
  }


  public async CriteriaButton() {
    const CriteriaButton = "//button[normalize-space()='Yes'][1]";
    await Utils.scrollIntoElementView(CriteriaButton);
    await Utils.clickOnElement(CriteriaButton);
  }

  public async btnclick() {

    await Utils.clickOnElement("//*[@name='contBtn']");
  }

  public async EnterLocation() {
    await Utils.waitForElementDisplayed("//input[@placeholder='Enter a location']");
    await Utils.setInputField("//input[@placeholder='Enter a location']", "Melbourne");
    await Utils.clickOnElement("//button[@id='branchSearch']");
  }

  public async SelectLocationFromList() {
    await Utils.clickOnElement("//li[@class='ng-binding ng-scope'][4]");
    await browser.pause(5000);
    await Utils.scrollIntoElementView("//*[@name='contBtn']");
    await Utils.clickOnElement("//*[@name='contBtn']");

  }

  public async SelectEmploymentStatus() {
    await Utils.VerifyElementPresent("//select[@name='employmentStatus']");
    await Utils.selectDropdownByVisibleText("//select[@name='employmentStatus']", "Casual");

  }

  public async EnterOccupationalDetails() {
    (await browser.$("//input[@name='occupationSearch']")).click();
    await Utils.setInputField("//input[@name='occupationSearch']", "Professional");
    await Utils.clickOnElement("//a[@title='Social Professionals (general)']");

  }

  public async EnterAmountDetails(Amount: string) {

    await Utils.clickOnElement("//input[@name='incomeAmount']");
    await Utils.setInputField("//input[@name='incomeAmount']", Amount);
    await Utils.selectDropdownByVisibleText("//select[@name='incomeFrequency']", "Annually");
    await Utils.scrollIntoElementView("button[name='contBtn']");
    await Utils.clickOnElement("button[name='contBtn']");
  }

  public async EnterExpensesAmountDetails(Amount: string) {
    await Utils.clickOnElement("//input[@name='expenseAmount']");
    await Utils.setInputField("//input[@name='expenseAmount']", Amount);
    await Utils.selectDropdownByVisibleText("//select[@name='frequency']", "Monthly");
    await Utils.scrollIntoElementView("button[name='cancelBtn']");
    await Utils.clickOnElement("button[name='cancelBtn']");
    await Utils.clickOnElement("button[name='confirmYes']");

  }


  public async CancelConfirmationMessage() {
    await Utils.VerifyElementPresent("//h1[contains(text(),'Your application')]");
    const message = await browser.$("//h1[contains(text(),'Your application')]").getText();
    const appnumber = message.replace(/[^0-9]/g, '');
    const expected_message = "Your application " + appnumber + " has been cancelled";
    await Utils.VerifyElementText("//h1[contains(text(),'Your application')]", expected_message);

  }


}
export default new GettingStarted()