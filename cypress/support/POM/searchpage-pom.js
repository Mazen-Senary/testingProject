class SearchPage{
    searchNavigation(){ 
          cy.visit(data.websiteUrl)
    }
    enterValidProduct(){
        cy.searchBar().type(data.validProduct);
    }
    enterInvalidProduct(){
        cy.searchBar().type(data.invalidProduct);
    }
    searchBTN(){
        cy.searchBTN();
    }
    resetBTN(){ 
        cy.resetBTN();
    }
    waitForResults(){
        cy.wait(3000);
    }
    validProductAssertions(){
     cy.get('[data-test="search-term"]').should('be.visible')
    cy.wait(3000)
    cy.contains('Claw Hammer with Shock Reduction Grip').should('be.visible')
    cy.get('[data-test="no-results"]').should('not.exist')

    }
    invalidProductAssertions(){
    cy.contains('There are no products found.').should('be.visible');
    cy.get('[data-test="search-submit"]').should('be.visible')
    cy.get('[data-test="search-reset"]').should('be.visible')

    }
    resetBTNAssertions(){
    cy.get('[data-test="no-results"]').should('not.exist')
    cy.get('[data-test="search-term"]').should('not.exist')
    cy.get('[data-test="product-name"]').should('be.visible')
    }
}
export default SearchPage;