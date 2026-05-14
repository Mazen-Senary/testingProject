Cypress.Commands.add('addToCart',() => {
cy.get('#btn-add-to-cart').click();

})
Cypress.Commands.add('removeFromCart', () => {
    cy.get('a.btn-danger').click();
})