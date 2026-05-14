describe('testing',()=>{
    
it('test 6',()=>{
cy.visit("https://automationexercise.com/login");
cy.get('[ data-qa="login-email"]').type("nie2dbn");
cy.get('[ data-qa="login-password"]').type("password");


})





});