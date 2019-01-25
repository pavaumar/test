const assert = require('assert');
const { Given, When, Then } = require('cucumber');


         Given('I am login screen', function () {
           console.log('given');
         });


         When('I enter correct {int} and {string}', function (uname,pass) {
         console.log('when'+uname+pass);
         });

         Then('I see homepage', function () {
             console.log('then');

         });