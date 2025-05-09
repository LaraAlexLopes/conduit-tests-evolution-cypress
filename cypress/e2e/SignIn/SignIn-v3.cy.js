import { enterEmail, navigateToLoginPage, confirmer, expectErrorMessageToBe, expectNoErrorMessage, enterPassword } from '../Utils/AuthTestSupport';
describe('Sign In - V3: Fully abstracted tests using domain-specific actions', () => {
  beforeEach( () => {
    navigateToLoginPage();
  }) 

  it(`Given the user fills in only the email field
    When they attempt to sign in
    Then they should see the error message "password can't be blank"`, () => {
    enterEmail('email@email.com');
    confirmer();
    expectErrorMessageToBe("password can't be blank");
  })

  it(`Given the user fills in only the password field
    When they attempt to sign in
    Then they should see the error message "email can't be blank"`, () => {
    enterPassword('123456');
    confirmer();
    expectErrorMessageToBe("email can't be blank");
  })

  it(`Given the user fills in both email and password fields correctly
    When they attempt to sign in
    Then they should not see any error messages`, () => {
    enterEmail('email@email.com');
    enterPassword('123456');
    confirmer();
    expectNoErrorMessage();
  })

})