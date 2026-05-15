Feature: Contact Form

  Scenario: 1- Enter All Fields
    Given I am on the contact form page
    When I enter first name
    And I enter last name
    And I enter email
    And I select subject
    And I write a message
    And I click on submit button
    Then I should see a success message

  Scenario: 2- Leave All Fields Empty
    Given I am on the contact form page
    When I click on submit button
    Then I should see all fields empty error message

  Scenario: 3- Enter invalid email address
    Given I am on the contact form page
    When I enter first name
    And I enter last name
    And I enter invalid email
    And I select subject
    And I write a message
    And I click on submit button
    Then I should see an invalid email error

  Scenario: 4- Enter message shorter than 50 characters
    Given I am on the contact form page
    When I enter first name
    And I enter last name
    And I enter email
    And I select subject
    And I write a short message
    And I click on submit button
    Then I should see a short message error

  Scenario: 5- Attach file not empty to the contact form
    Given I am on the contact form page
    When I enter first name
    And I enter last name
    And I enter email
    And I select subject
    And I write a message
    And I attach a file
    And I click on submit button
    Then I should see a file error