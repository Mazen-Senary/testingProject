Cypress.Commands.add('emailAddress', (email) => {
cy.get('#email');

})
Cypress.Commands.add('password', (password) => {
    cy.get('#password');

})
Cypress.Commands.add('loginBTN',() => {
cy.get('[data-test="login-submit"]').click();

})
Cypress.Commands.add('forgotPasswordBtn',() => {
    cy.get('[data-test="forgot-password-submit"]').click();
})