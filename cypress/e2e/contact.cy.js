describe("contact form", () => {
  before(function () {
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  })
  beforeEach(function () {
    cy.visit(data.contactUrl)
  })

  it("1-enter all fields", () => {
    cy.firstName().type(data.firstName);
    cy.lastName().type(data.lastName);
    cy.email().type(data.email);
    cy.selectSubject().select(data.selectSubject);
    cy.message().type(data.message);
    cy.submitBTN();
    cy.url().should('include', '/contact');
    cy.contains('h3', 'Contact').should('be.visible');
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Thanks for your message! We will contact you shortly.');



  });
  it("2-all fields are empty", () => {
    cy.submitBTN();
    cy.get('#first_name_alert').should('be.visible')
    cy.get('#last_name_alert').should('be.visible')
    cy.get('#email_alert').should('be.visible')
    cy.get('#subject_alert').should('be.visible')
    cy.get('#message_alert').should('be.visible')

  });
  it("3-enter invalid email address", () => {
    cy.firstName().type(data.firstName);
    cy.lastName().type(data.lastName);
    cy.email().type("johnmarston");
    cy.selectSubject().select(data.selectSubject);
    cy.message().type(data.message);
    cy.submitBTN();
    cy.get('#email_alert').should('be.visible').and('contain', 'Email format is invalid');
    cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0');
    cy.get('#first_name_alert').should('not.exist')
  });
  it("4-enter message shorter than 50 characters", () => {
    cy.firstName().type(data.firstName);
    cy.lastName().type(data.lastName);
    cy.email().type(data.email);
    cy.selectSubject().select(data.selectSubject);
    cy.message().type("hello");
    cy.submitBTN();
    cy.get('#message_alert').should('be.visible').and('contain', 'Message must be minimal 50 characters');
    cy.get('[data-test="contact-submit"]').should('be.visible')
    cy.get('#last_name_alert').should('not.exist')

  });


});