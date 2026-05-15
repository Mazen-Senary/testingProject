import ResetPasswordPage from "../support/POM/restpass-pom";
const resetPass = new ResetPasswordPage();
describe('reset password', () => {
    before(function () {
        cy.fixture("example").then(function (data) {
            globalThis.data = data;
        });
    })
    beforeEach(function () {
        resetPass.resetPassNavigation();
    })
    it('reset password with valid email', () => {
       resetPass.enterEmail();
        resetPass.forgotPasswordBtn();
        resetPass.waitForProcessing();
       resetPass.validEmailAssertions();
    })
    it('2-reset password with empty email field', () => {
        resetPass.forgotPasswordBtn();
        resetPass.emptyEmailAssertions();
    });
    it('3-reset password with invalid email ', () => {
        resetPass.invalidEmail();
        resetPass.forgotPasswordBtn();
        resetPass.waitForProcessing();
        resetPass.invalidEmailAssertions();
    });
});