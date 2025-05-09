import { enterEmail, enterPassword, enterUsername, navigateToRegisterPage, confirmer, expectErrorMessageToBe, expectNoErrorMessage } from '../Utils/AuthTestSupport';
describe('Sign Up - V3: Fully abstracted tests using domain-specific actions', () => {
    beforeEach( () => {
        navigateToRegisterPage()
    })
  
    it(`Given the user fills only the username field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
        enterUsername('Nome');
        confirmer();
        expectErrorMessageToBe("email can't be blank");
    })
  
    it(`Given the user fills only the email field,
      When they attempt to register,
      Then they should see the error message "username can't be blank"`, () => {
        enterEmail('email@email.com');
        confirmer();
        expectErrorMessageToBe("username can't be blank");
    })
  
    it(`Given the user fills only the password field,
      When they attempt to register,
      Then they should see the error message "email can't be blank"`, () => {
        enterPassword('123456');
        confirmer();
        expectErrorMessageToBe("email can't be blank");
    })
  
    it(`Given the user fills all required fields correctly,
      When they attempt to register,
      Then they should not see any error messages`, () => {
        enterUsername('Nome');
        enterEmail('email@email.com');
        enterPassword('123456');
        confirmer();
        expectNoErrorMessage();
    })
})