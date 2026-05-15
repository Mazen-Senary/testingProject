import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../POM/searchpage-pom";
const search = new SearchPage();
before(function () {
    cy.fixture("example").then(function (data) {
        globalThis.data = data;
    });
});
Given('I am on the search page',() => {
    search.searchNavigation();
});
When('I enter a valid product',() => {
     search.enterValidProduct();
});
When('I enter an invalid product',() => {
     search.enterInvalidProduct();
});

When('I click on the search button',() => {
     search.searchBTN();
});
When('I click on reset button',() => {
     search.resetBTN();
});
When('I wait for results to load',() => {
     search.waitForResults();
});

Then('I should see the product appear success message', () => {
        search.validProductAssertions();
});
Then('I should see invalid product error message', () => {
        search.invalidProductAssertions();
});
Then('I should see reset products message', () => {
        search.resetBTNAssertions();
});
