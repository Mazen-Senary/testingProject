describe('reset password', () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        });
    })
    beforeEach(function () {
        cy.visit(data.forgetPass)
    })
    it('reset password with valid email', () => {
        cy.emailAddress().type(data.validEmail);
        cy.forgotPasswordBtn();
        cy.wait(2000)
        cy.url().should('include', 'forgot-password')
        cy.get('.alert-success').should('be.visible')
        cy.contains('page.forgot-password.confirm').should('be.visible')
    })
    it('2-reset password with empty email field', () => {

        cy.forgotPasswordBtn();

        cy.get('[data-test="email-error"]').should('be.visible')
        cy.url().should('include', 'forgot-password')
        cy.get('.alert-success').should('not.exist')
    });
    it('3-reset password with invalid email ', () => {
        cy.emailAddress().type(data.invalidEmail);
        cy.forgotPasswordBtn();
        cy.wait(2000)
        cy.get('.alert-danger').should('be.visible')
        cy.contains('The selected email is invalid.').should('be.visible')
        cy.url().should('include', 'forgot-password')

    });
});