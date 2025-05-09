describe('Sign In - V0: Direct tests without abstraction or aliasing', () => {
  it(`Given the user fills only the email field
    When they attempt to sign in
    Then they should see the error message "password can't be blank"`, () => {
    cy
      .visit('/login')
      .get('input.form-control.form-control-lg[placeholder="Email"]')
      .type('email@email.com')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "password can't be blank");
  })

  it(`Given the user fills only the password field
    When they attempt to sign in
    Then they should see the error message "email can't be blank"`, () => {
    cy
      .visit('/login')
      .get('input.form-control.form-control-lg[placeholder="Password')
      .type('123456')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "email can't be blank");
  })

  it(`Given the user fills both email and password fields correctly
    When they attempt to sign in
    Then they should not see any error messages`, () => {
    cy
      .visit('/login')
      .get('input.form-control.form-control-lg[placeholder="Email"]')
      .type('email@email.com')
      .get('input.form-control.form-control-lg[placeholder="Password')
      .type('a@123')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit')
      .click()
      .get('ul.error-messages > li')
      .should('not.exist');
  })
})