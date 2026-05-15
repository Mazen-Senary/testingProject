Feature: searching for products
Scenario:1- search for existing product
 Given I am on the search page
 When I enter a valid product
 And I click on the search button
 Then I should see the product appear success message

Scenario: 2- search for non existing product
Given I am on the search page
When I enter an invalid product
And I click on the search button
Then I should see invalid product error message

Scenario: 3- reset search
Given I am on the search page
When I enter a valid product
And I click on the search button
And I wait for results to load
And I click on reset button
Then I should see reset products message


