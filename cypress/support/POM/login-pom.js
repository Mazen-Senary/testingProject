class LoginPage {

    loginNavigation() {
        cy.visit(data.loginUrl);

    }
    enterEmail() {
        cy.emailAddress().type(data.loginACCOUNT1);

    }
    enterPassword() {
        cy.password().type(data.loginPASSWORD1);
    }
    enterInvalidEmail() {
        cy.emailAddress().type(data.invalidEmail);
    }
    enterInvalidPassword() {
        cy.password().type(data.invalidPassword);
    }
    clickLoginBtn() {
        cy.loginBTN();
    }
    validCredentials() {
        cy.url().should('include', 'dashboard');
        cy.get('[data-test="page-title"]').should('be.visible');
        cy.get('#menu').should('include.text', 'John Doe');

    }
    invalidCredentials() {
        cy.get('[data-test="login-error"]').should('be.visible');
        cy.url().should('include', 'login');
        cy.get('[data-test="forgot-password-link"]').should('be.visible');
    }
    emptyCredentials() {
        cy.get('[data-test="email-error"]').should('be.visible');
        cy.get('[data-test="password-error"]').should('be.visible');
        cy.contains('Login').should('be.visible');
    }
}
export default LoginPage;


