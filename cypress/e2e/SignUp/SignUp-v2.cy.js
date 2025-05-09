import { clickElement, assertElementCondition, assertElementExists, typeIntoField} from '../Utils/Helpers';
describe('Sign In - V2: Modular tests using shared helper functions', () => {
    beforeEach( () => {
        cy.visit('/register');
        cy.get('input.form-control.form-control-lg[placeholder="Username"]').as('usernameField');
        cy.get('input.form-control.form-control-lg[placeholder="Email"]').as('emailField');
        cy.get('input.form-control.form-control-lg[placeholder="Password"]').as('passwordField');
        cy.get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]').as('buttonSignUp');
    })
  
    it(`Given the user fills only the username field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
        typeIntoField('@usernameField','Nome');
        clickElement('@buttonSignUp');
        assertElementCondition('ul.error-messages > li','have.text', "email can't be blank");
    })
  
    it(`Given the user fills only the email field,
      When they attempt to register,
      Then they should see the error message "username can't be blank"`, () => {
        typeIntoField('@emailField','email@email.com');
        clickElement('@buttonSignUp');
        assertElementCondition('ul.error-messages > li','have.text', "username can't be blank");
    })
  
    it(`Given the user fills only the password field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
        typeIntoField('@passwordField','123456');
        clickElement('@buttonSignUp');
        assertElementCondition('ul.error-messages > li','have.text', "email can't be blank");
    })
  
    it(`Given the user fills all required fields correctly,
      When they attempt to register,
      Then they should not see any error messages`, () => {
        typeIntoField('@usernameField','Nome');
        typeIntoField('@emailField','email@email.com');
        typeIntoField('@passwordField','123456');
        clickElement('@buttonSignUp');
        assertElementExists('ul.error-messages > li','not.exist');
    })

  })