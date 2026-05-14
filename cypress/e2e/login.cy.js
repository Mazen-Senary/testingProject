describe("login Page", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
    })
    beforeEach(function () {
    cy.visit(data.loginUrl)
  })

  it("1-login with valid credentials", () => {
    cy.emailAddress().type(data.loginACCOUNT1);
    cy.password().type(data.loginPASSWORD1);
    cy.loginBTN();
    cy.url().should('include', 'dashboard')
cy.get('[data-test="page-title"]').should('be.visible')
//cy.get('#menu').should('include.text', 'mazen Senary')
cy.get('#menu').should('include.text', 'John Doe')
  });
  it("2-login with invalid credentials", () => {
    cy.emailAddress().type(data.invalidEmail);
    cy.password().type(data.invalidPassword);
    cy.loginBTN();
    cy.get('[data-test="login-error"]').should('be.visible')
    cy.url().should('include', 'login')
    cy.get('[data-test="forgot-password-link"]').should('be.visible')
    
  });
 
it("3-login with empty email and password", () => {
    cy.loginBTN();
    cy.get('[data-test="email-error"]').should('be.visible')
    cy.get('[data-test="password-error"]').should('be.visible')
    cy.contains('Login').should('be.visible')
});
// it("4-login with invalid email and valid password/vise versa", () => {
//     cy.emailAddress().type(data.invalidEmail);
//     cy.password().type(data.validPassword);
//     cy.loginBTN();
// });
});