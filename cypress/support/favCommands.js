Cypress.Commands.add('addtoFavorites',() => {
    cy.get('#btn-add-to-favorites').click();
})
Cypress.Commands.add('removeFav',()=>{
cy.get('[data-test="delete"]').click();
});
