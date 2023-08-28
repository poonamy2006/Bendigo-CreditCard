import { Given, When, Then } from '@wdio/cucumber-framework';
import Started from '../pageobjects/BendigoBankPages'
import Utils from '../pageobjects/Utils';

Given(/^User is at Bendigo Personal page$/, async () => {
  await Started.openHomePage();

})

When(/^User select Banking menu$/, async () => {
  await Started.selectBanking();
});

Then(/^Choose Credit Card option$/, async () => {
  await Started.chooseCreditCard();
});

Then(/^User verifies credit cards page and apply for Bendigo Bright credit card$/, async () => {
  await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/");
  await Started.applyForCreditCard();

});

Then(/^User validates Check my eligibility screen and user clicks on Continue to apply button$/, async () => {
  await expect(browser).toHaveUrl("https://www.bendigobank.com.au/personal/credit-cards/check-my-eligibility/?ccproduct=bright");
  await Started.continueToApply();
  
});

Then(/^User selects Continue to apply button on New Existing Bendigo Bank customer popup$/, async () => {
      await Started.PopUpClickApply();
});

Then(/^User navigates to Getting Started page$/, async () => {
  await Utils.waitForPageLoad();
  await Started.SwitchToNewWindow();
  await Started.VerifyPageTitle("Getting Started");
});


When(/^User enters preferred Credit Limit and selects General purpose use purpose and clicks on Continue option$/, async () => {
  await Utils.waitForPageLoad();
  await Started.setProductDetails();
 
});

Then(/^Verifies Application Details section in credit card details$/, async () => {
  await Utils.waitForPageLoad();
  await Started.VerifyPageTitle("Application Details");
});

When(/^User selects Single option from the relationship status drop down$/, async () => {
  await Started.SelectSingleMaritalStatus();
});


Then(/^User selects No for a promo code option in credit card details page and selects Continue button$/, async () => {
  await Utils.waitForPageLoad();
  await Started.SelectPromoCode();

});

Then(/^Verify Time & Eligibility section in credit card details$/, async () => {
  await Utils.waitForPageLoad();
  await Started.VerifyEligibiityTitle("Time & Eligibility");
});

Then(/^User selects yes button and click on Continue and verifies Branch Details section in credit card details$/, async () => {
  await Started.CriteriaButton();
  await Started.btnclick();
  await Started.VerifyPageTitle("Branch Details");
});

Then(/^User enters location as Melbourne and click Find$/, async () => {
  await Started.EnterLocation();
});

Then(/^User select Clifton Hill option from the list and click continue$/, async () => {
  await Started.SelectLocationFromList();
});

Then(/^Validate Income details section is displayed and select Casual$/, async () => {
  await Utils.waitForPageLoad();
 
  await Started.VerifyPageTitle("Income Details");
  await Started.SelectEmploymentStatus();
});

Then(/^Input Professional in the textbox for Occupation and select Social Professionals$/, async () => {
  await Started.EnterOccupationalDetails();

});


Then(/^User enter Test Data Amount and Frequency as Annually and click Continue$/, async () => {
  await Started.EnterAmountDetails("20000");
});


Then(/^Validate Expenses section is displayed$/, async () => {
  await Started.VerifyExpenseTitle();
});


Then(/^User enter Test Data amount as and payment frequency as Monthly and click Cancel$/, async () => {
  await Started.EnterExpensesAmountDetails("6000");
});


Then(/^Validate the message - Your application <application ref no.> has been cancelled$/, async () => {
  await Started.CancelConfirmationMessage();
});