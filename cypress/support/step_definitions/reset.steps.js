import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ResetPasswordPage from "../POM/restpass-pom";

const resetpass = new ResetPasswordPage();

before(function () {
    cy.fixture("example").then(function (data) {
        globalThis.data = data;
    });
});

Given('I am on the reset password page', () => {
    resetpass.resetPassNavigation();
});

When('I enter valid email', () => {
    resetpass.enterEmail();
});

When('I enter invalid reset email', () => {
    resetpass.invalidEmail();
});

When('I click on forgot password button', () => {
    resetpass.forgotPasswordBtn();
});

When('I wait for processing', () => {
    resetpass.waitForProcessing();
});

Then('I should see a reset success message', () => {
    resetpass.validEmailAssertions();
});

Then('I should see empty email error', () => {
    resetpass.emptyEmailAssertions();
});

Then('I should see invalid email error message', () => {
    resetpass.invalidEmailAssertions();
});