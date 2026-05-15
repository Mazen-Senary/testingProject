Feature: Reset Password

  Scenario: 1- Reset Password With Valid Email
    Given I am on the reset password page
    When I enter valid email
    And I click on forgot password button
    And I wait for processing
    Then I should see a reset success message

  Scenario: 2- Reset Password With Empty Email Field
    Given I am on the reset password page
    When I click on forgot password button
    Then I should see empty email error

  Scenario: 3- Reset Password With Invalid Email
    Given I am on the reset password page
    When I enter invalid reset email
    And I click on forgot password button
    And I wait for processing
    Then I should see invalid email error message