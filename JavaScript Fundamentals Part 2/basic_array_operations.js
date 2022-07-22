'use strict';

//There are actually countless array methods in JavaScript
const friends = ['Prashant', 'Puri', 'Casper'];

//Push methods adds elements to the end of an array
// friends.push('Jay');
const newlength = friends.push('Jay');  //creating a variable to store new lenghth valur
console.log(friends);
console.log(newlength);

// unshift methods adds elements to the beginning of the array

friends.unshift('John');
console.log(friends);

//Methods to remove elements form arrays
//Pop menthods remove the last elements of an array
friends.pop(); //We don't need to pass in any argument and tha's because there is no information needed really to just take out last element
console.log(friends);

//Pop menthods doesn't return the length of the new array but instead it returns the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

//Pop menthods remove the first elements of an array
// shift methods removes elements of the first array

friends.shift();
console.log(friends);

console.log(friends.indexOf('Puri')); //Knowing the index of an specific element

//Es6 Methonds
//Includes, instead of returning the index of the element will simply return true if the element is in the array and false if it's not

friends.push(23);
console.log(friends.includes('Puri'));
console.log(friends.includes('Casper'));
console.log(friends.includes(23));

//This method actually uses strict equality for this check

