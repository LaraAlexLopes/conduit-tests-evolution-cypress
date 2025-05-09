describe('SignUp - V0: Testes diretos e sem aliases', () => {  
  it(`Given the user fills only the username field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
    cy
      .visit('/register')
      .get('input.form-control.form-control-lg[placeholder="Username"]')
      .type('Nome')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "email can't be blank");
  })

  it(`Given the user fills only the email field,
      When they attempt to register,
      Then they should see the error message "username can't be blank"`, () => {
    cy
      .visit('/register')
      .get('input.form-control.form-control-lg[placeholder="Email"]')
      .type('email@email.com')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "username can't be blank");
  })

  it(`Given the user fills only the password field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
    cy
      .visit('/register')
      .get('input.form-control.form-control-lg[placeholder="Password"]')
      .type('123456')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]')
      .click()
      .get('ul.error-messages > li')
      .should('have.text', "email can't be blank");
  })

  it(`Given the user fills all required fields correctly,
      When they attempt to register,
      Then they should not see any error messages`, () => {
    cy
      .visit('/register')
      .get('input.form-control.form-control-lg[placeholder="Username"]')
      .type('Nome')
      .get('input.form-control.form-control-lg[placeholder="Email"]')
      .type('email@email.com')
      .get('input.form-control.form-control-lg[placeholder="Password"]')
      .type('123456')
      .get('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]')
      .click()
      .get('ul.error-messages > li')
      .should('not.exist');
  })
})