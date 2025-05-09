import { navigateTo, assertElementCondition} from './Helpers';

export function navigateToLoginPage(){
    navigateTo('/login');
}

export function navigateToRegisterPage(){
    navigateTo('/register');
}

export function expectMessageToBe(selector,message){
    assertElementCondition(selector,'have.text',message);
}
