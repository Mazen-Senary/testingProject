import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from "../POM/contact-pom";
const contactpage = new ContactPage();
before(function () {
    cy.fixture("example").then(function (data) {
        globalThis.data = data;
    });
});
Given('I am on the contact form page',() =>{
contactpage.contactNavigation();
});
When('I enter first name',() =>{
    contactpage.enterFirstName();
});
When('I enter last name',() =>{
    contactpage.enterLastName();
});
When('I enter email',() =>{
    contactpage.enterEmail();
});
When('I enter invalid email',() =>{
contactpage.enterInvalidEmail();

});
When('I select subject',() =>{
contactpage.selectSubject();

});
When('I write a message',() =>{
contactpage.writeMessage();

});
When('I write a short message',() =>{
    contactpage.shortMessage();
});
When('I attach a file',() =>{
    contactpage.attachFile();
});
When('I click on submit button',() =>{
    contactpage.clickSubmit();
});     
Then('I should see a success message', () => {
    contactpage.enterAllFields();
});

Then('I should see all fields empty error message', () => {
    contactpage.emptyFields();
});

Then('I should see an invalid email error', () => {
    contactpage.invalidEmailAssertions();
});

Then('I should see a short message error', () => {
    contactpage.shortMessageAssertions();
});

Then('I should see a file error', () => {
    contactpage.attachFilewithtextAssertions();
});



