Feature: Add To Favourite Page 
Scenario: 1- Add To Favourite When Logged in
 Given I am on the favourites page
 When I search for a product
 And I login as a user
 And I navigate to favourites page
 And I search for a product again
 And I add to favourites
 Then I should see product added to favourites

Scenario: 2- Remove From Favourites
    Given I am on the favourites page
    When I search for a product
    And I login as a user
    And I visit the favourites page
    And I wait for favourites to load
    And I remove from favourites
    Then I should see no favourites

  Scenario: 3- Add To Favourites Not Signed In
    Given I am on the favourites page
    When I search for a product
    And I add to favourites
    Then I should see a login required message