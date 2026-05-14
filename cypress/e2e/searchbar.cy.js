describe("search module", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  })
  beforeEach(function () {

    cy.visit(data.websiteUrl)
  })

  it("1-search for existing product", () => {
    cy.searchBar().type(data.validProduct);
    cy.searchBTN();
    cy.get('[data-test="search-term"]').should('be.visible')
    cy.wait(3000)
    cy.contains('Claw Hammer with Shock Reduction Grip').should('be.visible')
    cy.get('[data-test="no-results"]').should('not.exist')


  });
  it("2-search for non-existing product", () => {
    cy.searchBar().type(data.invalidProduct);
    cy.searchBTN();
    cy.contains('There are no products found.').should('be.visible');
    cy.get('[data-test="search-submit"]').should('be.visible')
    cy.get('[data-test="search-reset"]').should('be.visible')


  });
  it("3-reset search", () => {
    cy.searchBar().type(data.validProduct);
    cy.searchBTN();
    cy.resetBTN();
    cy.get('[data-test="no-results"]').should('not.exist')
    cy.get('[data-test="search-term"]').should('not.exist')
    cy.get('[data-test="product-name"]').should('be.visible')


  });

});