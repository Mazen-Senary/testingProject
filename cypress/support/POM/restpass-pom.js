class ResetPasswordPage {
    resetPassNavigation(){
         cy.visit(data.forgetPass)
    }
    enterEmail(){
        cy.emailAddress().type(data.validEmail);
    }
    invalidEmail(){
         cy.emailAddress().type(data.invalidEmail);
    }
    forgotPasswordBtn(){
        cy.forgotPasswordBtn();
    }
   waitForProcessing() {
        cy.wait(2000); 
    }
    validEmailAssertions(){
         cy.url().should('include', 'forgot-password')
        cy.get('.alert-success').should('be.visible')
        cy.contains('page.forgot-password.confirm').should('be.visible')
    }
    emptyEmailAssertions(){
          cy.get('[data-test="email-error"]').should('be.visible')
        cy.url().should('include', 'forgot-password')
        cy.get('.alert-success').should('not.exist')
    }
    invalidEmailAssertions(){  
        cy.get('.alert-danger').should('be.visible')
        cy.contains('The selected email is invalid.').should('be.visible')
        cy.url().should('include', 'forgot-password')

     }


}
export default ResetPasswordPage;
    




