'use strict';

/*querySelector is basically a method that's available on the document object
For Class we use (.) Dot, For ID we use (#)*/

//In this line we started by reading the content of the element
console.log(document.querySelector('.message').textContent);


//In this line we changed the text content
console.log(document.querySelector('.message').textContent = 'Correct Number!'); //Same as above but can change the text content

// console.log(document.querySelector('.message').textContent); //After changing the text content even we read it it will be the latest change

document.querySelector('.number').textContent = 8;
document.querySelector('.score').textContent = 98;

//With an input field to get the actual value, we use the value property
console.log(document.querySelector('.guess').value); //read
document.querySelector('.guess').value = 24; //overwrite 
console.log(document.querySelector('.guess').value); //re-read
