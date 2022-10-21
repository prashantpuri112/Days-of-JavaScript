/*
Immediately Invoked Function Expressions

Sometimes in JavaScript, we need a function that is only executed once. And then never again. So basically a function that disappears right after it's called once.

*/

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);
(() => console.log('This will never run again'))();

/* Why was this pattern actually invented?
Well, we already know that functions create scopes, right? And what's important here is that one scope does not have access
to variables from an inner scope, right? For example, right here in this global scope. We do not have access to any variables that are defined in the scope */


{
    const isPrivate = 23;
    var notPrivate = 46;
}

console.log(notPrivate);






