import LoginPage from "../support/POM/login-pom";
const loginPage = new LoginPage();
describe("login Page", () => {
    before(function () {
        cy.fixture("example").then(function (data) {
          globalThis.data = data;
        });
    })
    beforeEach(function () {
    loginPage.loginNavigation();
  })

  it("1-login with valid credentials", () => {
    loginPage.enterEmail();
    loginPage.enterPassword();
    loginPage.clickLoginBtn();
    loginPage.validCredentials();
  });
  it("2-login with invalid credentials", () => {
   loginPage.enterInvalidEmail();
    loginPage.enterInvalidPassword();
    loginPage.clickLoginBtn();
    loginPage.invalidCredentials();

  });
 
it("3-login with empty email and password", () => {
    loginPage.clickLoginBtn();
    loginPage.emptyCredentials();
  });
// it("4-login with invalid email and valid password/vise versa", () => {
//     cy.emailAddress().type(data.invalidEmail);
//     cy.password().type(data.validPassword);
//     cy.loginBTN();
// });
});