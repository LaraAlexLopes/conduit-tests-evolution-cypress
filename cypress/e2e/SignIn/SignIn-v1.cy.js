describe('Sign In - V1: Structured tests using aliases and beforeEach setup', () => {
  beforeEach( () => {
    cy.visit('/login');
    cy.get('input.form-control.form-control-lg[placeholder="Email"]').as('emailField');
    cy.get('input.form-control.form-control-lg[placeholder="Password"]').as('passwordField');
    cy.get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]').as('signUpButton');
    cy.get('h1.text-xs-center').as('title');
  })

  it(`Given the user fills in only the email field
    When they attempt to sign in
    Then they should see the error message "password can't be blank"`, () => {
    cy
      .get('@emailField')
      .type('email@email.com')
      .get('@signUpButton')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "password can't be blank");
  })

  it(`Given the user fills in only the password field
    When they attempt to sign in
    Then they should see the error message "email can't be blank"`, () => {
    cy
      .get('@passwordField')
      .type('123456')
      .get('@signUpButton')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "email can't be blank");
  })

  it(`Given the user fills in both email and password fields correctly
    When they attempt to sign in
    Then they should not see any error messages`, () => {
    cy
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