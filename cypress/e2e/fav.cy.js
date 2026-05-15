import FavouritePage from "../support/POM/favourite-pom";
const favPage = new FavouritePage();
FavouritePage
describe('adding to fav module',()=>{
    before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
    });
    beforeEach(function () {
      favPage.favNavigation();
      favPage.searchForProduct();
    })
    it('1-add to favourites when logged in',()=>{
    favPage.loginUser();
    favPage.favNavigation();
    favPage.searchForProduct();
     favPage.addToFav();
     favPage.favAssertions();
 
    });
    it('2-remove from favourites',()=>{
    favPage.loginUser();
    favPage.visitFavouritesPage();
    cy.wait(3000);
    favPage.removeFromFav();
    favPage.removeFavAssertions();
    });
    it('3-add to favourites not signed in',()=>{
     favPage.addToFav();
    favPage.WithoutLoginAssertions();
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