describe('Sign In - V0: Direct tests without abstraction or aliasing', () => {
    beforeEach( () => {
        cy.visit('/register');
        cy.get('input.form-control.form-control-lg[placeholder="Username"]').as('usernameField');
        cy.get('input.form-control.form-control-lg[placeholder="Email"]').as('emailField');
        cy.get('input.form-control.form-control-lg[placeholder="Password"]').as('passwordField');
        cy.get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]').as('signUpButton');
    })
       
    it(`Given the user fills only the username field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
      cy
        .get('@usernameField')
        .type('Nome')
        .get('@signUpButton')
        .click()
        .get('ul.error-messages > li')
        .should('have.text', "email can't be blank");
    })
  
    it(`Given the user fills only the email field,
      When they attempt to register,
      Then they should see the error message "username can't be blank"`, () => {
      cy
        .get('@emailField')
        .type('email@email.com')
        .get('@signUpButton')
        .click()
        .get('ul.error-messages > li')
        .should('have.text', "username can't be blank");
    })
  
    it(`Given the user fills only the password field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
      cy
        .get('@passwordField')
        .type('123456')
        .get('@signUpButton')
        .click()
        .get('ul.error-messages > li')
        .should('have.text', "email can't be blank");
    })
  
    it(`Given the user fills all required fields correctly,
      When they attempt to register,
      Then they should not see any error messages`, () => {
      cy
        .get('@usernameField')
        .type('Nome')
        .get('@emailField')
        .type('email@email.com')
        .get('@passwordField')
        .type('123456')
        .get('@signUpButton')
        .click()
        .get('ul.error-messages > li')
        .should('not.exist');
    })
  })