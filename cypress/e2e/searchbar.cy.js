import SearchPage from "../support/POM/searchpage-pom";
const search = new SearchPage();
describe("search module", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  })
  beforeEach(function () {
    search.searchNavigation();
  })

  it("1-search for existing product", () => {
   search.enterValidProduct();
    search.searchBTN();
    search.validProductAssertions();
  });
  it("2-search for non-existing product", () => {
   search.enterInvalidProduct();
   search.searchBTN();
    search.invalidProductAssertions();
  });
  it("3-reset search", () => {
    search.enterValidProduct();
    search.searchBTN();
    search.waitForResults();
    search.resetBTN();
    search.resetBTNAssertions();
    

  });

});