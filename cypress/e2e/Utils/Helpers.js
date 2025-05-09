export function navigateTo(path) {
  cy
    .visit(path)
}

export function clickElement(selector){
  cy
    .get(selector)
    .click();
}


export function typeIntoField(selector, text){
  cy
    .get(selector)
    .type(text)
}

export function assertElementCondition(selector, condition, expectedValue){
    cy
      .get(selector)
      .should(condition,expectedValue);
}

export function assertElementExists(selector, expectedValue){
  cy
    .get(selector)
    .should(expectedValue);
}







