import { clickElement, navigateTo, assertElementCondition, assertElementExists, typeIntoField} from '../Utils/Helpers';
describe('Sign In - V2: Modular tests using shared helper functions', () => {
  beforeEach( () => {
    navigateTo('/login');
    cy.get('input.form-control.form-control-lg[placeholder="Email"]').as('emailField');
    cy.get('input.form-control.form-control-lg[placeholder="Password"]').as('passwordField');
    cy.get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]').as('signUpButton');
    cy.get('h1.text-xs-center').as('title');
  })

  it(`Given the user fills in only the email field
    When they attempt to sign in
    Then they should see the error message "password can't be blank"`, () => {
      typeIntoField('@emailField','email@email.com');
      clickElement('@signUpButton');
      assertElementCondition('ul.error-messages > li','have.text', "password can't be blank");
  })

  it(`Given the user fills in only the password field
    When they attempt to sign in
    Then they should see the error message "email can't be blank"`, () => {
      typeIntoField('@passwordField','123456');
      clickElement('@signUpButton');
      assertElementCondition('ul.error-messages > li','have.text', "email can't be blank");
  })

  it(`Given the user fills in both email and password fields correctly
    When they attempt to sign in
    Then they should not see any error messages`, () => {
      typeIntoField('@emailField','email@email.com');
      clickElement('@signUpButton');
      typeIntoField('@passwordField','123456');
      clickElement('@signUpButton');
      assertElementExists('ul.error-messages > li','not.exist');
  })
})