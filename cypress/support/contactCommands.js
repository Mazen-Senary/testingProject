Cypress.Commands.add('firstName',() => {
cy.get('#first_name');

})
Cypress.Commands.add('lastName',() => {
    cy.get('#last_name');
})      
Cypress.Commands.add('email',() => {
    cy.get('#email');
})
Cypress.Commands.add('selectSubject',() => {
    cy.get('#subject');
})
Cypress.Commands.add('message',() => {
    cy.get('#message');
})

Cypress.Commands.add('submitBTN',() => {
    cy.get('[data-test="contact-submit"]').click();
})