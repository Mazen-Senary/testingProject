Cypress.Commands.add('searchBar',() =>{
cy.get('#search-query');
})
Cypress.Commands.add('searchBTN',() => {

cy.get('[data-test="search-submit"]').click();

})
Cypress.Commands.add('resetBTN',() => {

cy.get('[data-test="search-reset"]').click();

})