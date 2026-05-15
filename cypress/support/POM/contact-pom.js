class ContactPage {
  contactNavigation() {
    cy.visit(data.contactUrl)
  }
  enterFirstName() {
    cy.firstName().type(data.firstName);
  }
  enterLastName() {
    cy.lastName().type(data.lastName);
  }
  enterEmail() {
    cy.email().type(data.email);
  }
  enterInvalidEmail() {
    cy.email().type("johnmarston");
  }
  selectSubject() {
    cy.selectSubject().select(data.selectSubject);
  }
  writeMessage() {
    cy.message().type(data.message);

  }
  shortMessage() {
    cy.message().type("hello");
  }
  attachFile() {
    cy.get('[data-test="attachment"]').attachFile('cypress.txt');
   }

  clickSubmit() {
    cy.submitBTN();
  }
  enterAllFields() {
    cy.url().should('include', '/contact');
    cy.contains('h3', 'Contact').should('be.visible');
    cy.get('[role="alert"]').should('be.visible').and('contain', 'Thanks for your message! We will contact you shortly.');
  }
  emptyFields() {
    cy.get('#first_name_alert').should('be.visible')
    cy.get('#last_name_alert').should('be.visible')
    cy.get('#email_alert').should('be.visible')
    cy.get('#subject_alert').should('be.visible')
    cy.get('#message_alert').should('be.visible')

  }
  invalidEmailAssertions() {
    cy.get('#email_alert').should('be.visible').and('contain', 'Email format is invalid');
    cy.title().should('eq', 'Contact Us - Practice Software Testing - Toolshop - v5.0');
    cy.get('#first_name_alert').should('not.exist')
  }
  shortMessageAssertions() {
    cy.get('#message_alert').should('be.visible').and('contain', 'Message must be minimal 50 characters');
    cy.get('[data-test="contact-submit"]').should('be.visible')
    cy.get('#last_name_alert').should('not.exist')
  }
  attachFilewithtextAssertions() {
    cy.get('[data-test="attachment-error"]').should('be.visible').and('contain', 'File should be empty.');
}
}
export default ContactPage;






