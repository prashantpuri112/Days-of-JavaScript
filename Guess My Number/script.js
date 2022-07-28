'use strict';
/* 
//querySelector is basically a method that's available on the document object For Class we use (.) Dot, For ID we use (#)

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

*/

/* To make our code reacts to something that happens in the DOM and for that we need to use an event listener
Event is something that happens on the page. For example:
A mouse click
A mouse moving
A key press

With an event listner, we can wait for a certain event to happen and than react to it
*/



//AddEventListener is the best one and also the most used one
document.querySelector('.check').addEventListener('click', function () {        //We have to pass a second argument with a function value
    const guess = Number(document.querySelector('.guess').value);        //This function simply contains the code that we want to execute whenever the event happens
    console.log(guess, typeof guess);

    if (!guess) {   //For falsy value 0
        console.log(document.querySelector('.message').textContent = 'No Number!');
    }
});
/* we do not call this function here anywhere, we only define the function here and then pass it into the event handler
but it is the JavaScript engine who will call this function as soon as the event happens.
The function will not be called immediately once the script is executed
This function will only be called as soon as the event happens*/



