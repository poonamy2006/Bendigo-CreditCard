Feature: Bendigo Bank credit card 

Scenario: Apply for Bendigo Bright Credit Card

Given User is at Bendigo Personal page  
When User select Banking menu
Then Choose Credit Card option
And User verifies credit cards page and apply for Bendigo Bright credit card
Then User validates Check my eligibility screen and user clicks on Continue to apply button
And User selects Continue to apply button on New Existing Bendigo Bank customer popup
Then User navigates to Getting Started page
When User enters preferred Credit Limit and selects General purpose use purpose and clicks on Continue option
And Verifies Application Details section in credit card details
When User selects Single option from the relationship status drop down
And User selects No for a promo code option in credit card details page and selects Continue button
Then Verify Time & Eligibility section in credit card details
Then User selects yes button and click on Continue and verifies Branch Details section in credit card details
And User enters location as Melbourne and click Find
Then User select Clifton Hill option from the list and click continue
Then Validate Income details section is displayed and select Casual
And Input Professional in the textbox for Occupation and select Social Professionals
Then User enter Test Data Amount and Frequency as Annually and click Continue
Then Validate Expenses section is displayed
And User enter Test Data amount as and payment frequency as Monthly and click Cancel
Then Validate the message - Your application <application ref no.> has been cancelled



  


    
        








        