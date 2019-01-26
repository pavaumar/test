const assert = require('assert');
const { Given, When, Then } = require('cucumber');
const Calculator = require('../../classFiles/calculator.js');
let calc;
    Given('The number {int} and {int}', function (num1, num2){
        calc = new Calculator(num1, num2);
     });
    When('They are added together', function () {
        calc.add();   
     });
    Then('The result should be {int}', function (expected) {
        calc.displayResult();
     });