'use strict';

//Variables
// console.log(me);
// console.log(job);
// console.log(year);

var me = 'Prashant';
let job = 'Learner';
const year = 2002;

//Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));//since this variable was defined with const, it is now in a temporal dead zone that's why we get the error messages
console.log(addArrow); //Undefined
// console.log(addArrow(2, 3)); //We are trying to call undefined basically cause the fucntion is defined with VAR

//The only function that you can use before declaring is the function declaration
function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArrow = (a, b) => a + b;

//Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10

function deleteShoppingCart() {
    console.log('All Products deleted');
}

//declared with let or const and so variables declared that way do not create properties on the window object.
var x = 1;
let y = 2
const z = 3;

console.log(x === window.x); //we are testing if x is actually a property of the window object.
console.log(y === window.y);
console.log(z === window.z);

//variables declared with var, will create a property on the global window object and that can have some implications in some cases.