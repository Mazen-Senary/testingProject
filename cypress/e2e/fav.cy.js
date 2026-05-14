describe('adding to fav module',()=>{
    before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
    });
    beforeEach(function () {
    cy.visit(data.websiteUrl)     
    cy.searchBar().type('Pliers') 
    cy.searchBTN()    
    cy.wait(2000)            
    cy.contains('[data-test="product-name"]', 'Pliers').click() 
    })
    it('1-add to favourites when logged in',()=>{
    cy.login()
    cy.visit(data.websiteUrl)
    cy.searchBar().type('Pliers')
    cy.searchBTN()
    cy.wait(2000)
    cy.contains('[data-test="product-name"]', 'Pliers').click()  
    cy.addtoFavorites()
    cy.contains('Product added to your favorites list.').should('be.visible')
    cy.visit(data.favouritePageUrl)
    cy.get('[data-test="product-name"]', { timeout: 8000 }).should('be.visible')
 
    });
    it('remove from favourites',()=>{
    cy.login()
    cy.visit(data.favouritePageUrl)
    cy.wait(3000)
    cy.removeFav()
    cy.wait(3000)
    cy.contains('There are no favorites yet.').should('be.visible')
    cy.get('[data-test="product-name"]').should('not.exist')
    cy.url().should('include', 'favorites')
    });
    it('3-add to favourites not signed in',()=>{
            cy.addtoFavorites() 
        cy.get('#toast-container', { timeout: 5000 }).should('be.visible')
        cy.url().should('include', 'product')
        cy.get('[data-test="product-name"]').should('include.text', 'Pliers')
    });
});






// it('remove from favourites', () => {
//     cy.login();
//     cy.visit(data.favouritePageUrl)
//     cy.wait(3000)
//     cy.removeFav();
//     cy.wait(3000) 
//     cy.contains('There are no favorites yet.').should('be.visible')
//     cy.get('[data-test="product-name"]').should('not.exist')
//     cy.url().should('include', 'favorites')
// });






// ```javascript
//  beforeEach(function () {
//         cy.visit(data.websiteUrl)     
//     cy.searchBar().type('Pliers') 
//     cy.searchBTN()                
//     cy.contains('Pliers').click() 
//     })
//     it('add to favourites when logged in',()=>{
//         cy.login();
//         cy.visit(data.favproducturl) 
//          cy.url().should('include', 'product')
//          cy.wait(3000)
//         cy.addtoFavorites();
//          cy.contains('Product added to your favorites list.').should('be.visible')
//          cy.visit(data.favouritePageUrl)
//          cy.wait(3000)      
//          cy.get('[data-test="product-name"]').should('be.visible')
        
//  what to do?
//     });
//     it('remove from favourites',()=>{
//         cy.login();
//         cy.visit(data.favouritePageUrl)
//         cy.wait(3000)
//         cy.removeFav();
//         cy.wait(3000) 
//     cy.contains('There are no favorites yet.').should('be.visible')
//     cy.get('[data-test="product-name"]').should('not.exist')
//     cy.url().should('include', 'favorites')
//     });
// });
// ```