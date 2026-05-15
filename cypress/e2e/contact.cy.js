import ContactPage from "../support/POM/contact-pom";
const contactpage= new ContactPage();

describe("contact form", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  })
  beforeEach(function () {
    contactpage.contactNavigation();
  })

  it("1-enter all fields", () => {
    contactpage.enterFirstName();
    contactpage.enterLastName();
    contactpage.enterEmail();
   contactpage.selectSubject();
    contactpage.writeMessage();
    contactpage.clickSubmit();
    contactpage.enterAllFields();
  });
  it("2-all fields are empty", () => {
    contactpage.clickSubmit();
    contactpage. emptyFields();

  });
  it("3-enter invalid email address", () => {
    contactpage.enterFirstName();
    contactpage.enterLastName();
    contactpage.enterInvalidEmail();
    contactpage.selectSubject();
    contactpage.writeMessage();
    contactpage.clickSubmit();
    contactpage.invalidEmailAssertions();
  });
  it("4-enter message shorter than 50 characters", () => {
   contactpage.enterFirstName();
   contactpage.enterLastName();
   contactpage.enterEmail();
    contactpage.selectSubject();
   contactpage.shortMessage();
   contactpage.clickSubmit();
    contactpage.shortMessageAssertions();
  });
  it("5-attach file not empty to the contact form", () => {
    contactpage.enterFirstName();
    contactpage.enterLastName();
    contactpage.enterEmail();
    contactpage.selectSubject();
    contactpage.writeMessage();
    contactpage.attachFile();
    contactpage.clickSubmit();
    contactpage.attachFilewithtextAssertions();
  });
});