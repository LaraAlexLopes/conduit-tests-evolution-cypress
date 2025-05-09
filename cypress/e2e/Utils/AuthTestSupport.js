import { clickElement, navigateTo, assertElementCondition, assertElementExists, typeIntoField} from './Helpers';

export function navigateToLoginPage(){
    navigateTo('/login');
}

export function navigateToRegisterPage(){
    navigateTo('/register');
}

export function enterEmail(email){
    typeIntoField('input.form-control.form-control-lg[placeholder="Email"]', email);
}

export function enterPassword(password){
    typeIntoField('input.form-control.form-control-lg[placeholder="Password"]', password);
}

export function enterUsername(username){
    typeIntoField('input.form-control.form-control-lg[placeholder="Username"]', username);
}

export function confirmer(){
    clickElement('button.btn.btn-lg.btn-primary.pull-xs-right[type="submit"]');
}

export function expectErrorMessageToBe(message){
    assertElementCondition('ul.error-messages > li','have.text',message);
}

export function expectNoErrorMessage(){
    assertElementExists('ul.error-messages > li','not.exist');
}