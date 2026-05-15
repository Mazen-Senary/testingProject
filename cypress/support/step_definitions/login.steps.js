import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../POM/login-pom";

const loginPage = new LoginPage();

before(function () {
    cy.fixture("example").then(function (data) {
        globalThis.data = data;
    });
});

Given('I am on the login page', () => {
    loginPage.loginNavigation();
});

When('I enter valid email and password', () => {
    loginPage.enterEmail();
    loginPage.enterPassword();
});

When('I enter invalid email and password', () => {
    loginPage.enterInvalidEmail();
    loginPage.enterInvalidPassword();
});

When('I click on login button', () => {
    loginPage.clickLoginBtn();
});

Then('I should be redirected to dashboard', () => {
    loginPage.validCredentials();
});

Then('I should see an error message', () => {
    loginPage.invalidCredentials();
});

Then('I should see empty fields errors', () => {
    loginPage.emptyCredentials();
});