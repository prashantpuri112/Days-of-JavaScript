'use strict';

//Primitive types
let lastName = 'Puri';
let oldLastName = lastName;
lastName = 'Darwin'
console.log(lastName, oldLastName); //Darwin Puri
//It works this way because each primitive value will simply be saved into its own piece of memory in the stack

//Reference types
const selena = {
    firstName: 'Selena',
    lastName: 'Gomez',
    age: 24,
};

const marriedSelena = selena; //is not a new object in the heap. It's simply just another variable in the stack, which holds the reference to the original object.
marriedSelena.lastName = 'Darwin';
console.log('Before marriage: ', selena);
console.log('After marriage: ', marriedSelena);

// marriedSelena = {};

//copying objects
const selena1 = {
    firstName: 'Selena',
    lastName: 'Gomez',
    age: 24,
    family: ['Prashant', 'Blink'],
};

const selenaCopy = Object.assign({}, selena1);
selenaCopy.lastName = 'Darwin';

selenaCopy.family.push('Mabel');
selenaCopy.family.push('Mora');

console.log('Before marriage: ', selena1);
console.log('After marriage: ', selenaCopy);

