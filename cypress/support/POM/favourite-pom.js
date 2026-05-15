class FavouritePage {
favNavigation() {
        cy.visit(data.websiteUrl);
    }
    searchForProduct() {
    cy.searchBar().type('Pliers') 
    cy.searchBTN()    
    cy.wait(2000)            
    cy.contains('[data-test="product-name"]', 'Pliers').click() 
    }
 loginUser() {
        cy.login();
    }
    addToFav() {
        cy.addtoFavorites();
    }
    removeFromFav() {
        cy.removeFav();
    }
 visitFavouritesPage() {
        cy.visit(data.favouritePageUrl);
    }
    favAssertions() {
        cy.contains('Product added to your favorites list.').should('be.visible')
    cy.visit(data.favouritePageUrl)
    cy.get('[data-test="product-name"]', { timeout: 8000 }).should('be.visible')
    }
    removeFavAssertions() {
        cy.wait(3000);
     cy.contains('There are no favorites yet.').should('be.visible')
    cy.get('[data-test="product-name"]').should('not.exist')
    cy.url().should('include', 'favorites')
    }
   WithoutLoginAssertions() {
    cy.get('#toast-container', { timeout: 5000 }).should('be.visible')
    cy.url().should('include', 'product')
    cy.get('[data-test="product-name"]').should('include.text', 'Pliers')

   }

}
export default FavouritePage;