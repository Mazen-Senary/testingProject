Feature: Login Page

  Scenario: 1- Login with valid credentials
    Given I am on the login page
    When I enter valid email and password
    And I click on login button
    Then I should be redirected to dashboard

  Scenario: 2- Login with invalid credentials
    Given I am on the login page
    When I enter invalid email and password
    And I click on login button
    Then I should see an error message

  Scenario: 3- Login with empty email and password
    Given I am on the login page
    When I click on login button
    Then I should see empty fields errors