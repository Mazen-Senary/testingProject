import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import FavouritePage from "../POM/favourite-pom";

const favPage = new FavouritePage();

before(function () {
    cy.fixture("example").then(function (data) {
        globalThis.data = data;
    });
});

Given('I am on the favourites page', () => {
    favPage.favNavigation();
});

When('I search for a product', () => {
    favPage.searchForProduct();
});

When('I login as a user', () => {
    favPage.loginUser();
});

When('I navigate to favourites page', () => {
    favPage.favNavigation();
});

When('I search for a product again', () => {
    favPage.searchForProduct();
});

When('I add to favourites', () => {
    favPage.addToFav();
});

When('I visit the favourites page', () => {
    favPage.visitFavouritesPage();
});

When('I wait for favourites to load', () => {
    cy.wait(3000);
});

When('I remove from favourites', () => {
    favPage.removeFromFav();
});

Then('I should see product added to favourites', () => {
    favPage.favAssertions();
});

Then('I should see no favourites', () => {
    favPage.removeFavAssertions();
});

Then('I should see a login required message', () => {
    favPage.WithoutLoginAssertions();
});