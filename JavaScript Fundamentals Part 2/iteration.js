'use strict';

/*
This is not a best practice

console.log('Lifting weights repetition 1');
console.log('Lifting weights repetition 2');
console.log('Lifting weights repetition 3');
console.log('Lifting weights repetition 4');
console.log('Lifting weights repetition 5');
console.log('Lifting weights repetition 6');
console.log('Lifting weights repetition 7');
console.log('Lifting weights repetition 8');
console.log('Lifting weights repetition 9');
console.log('Lifting weights repetition 10');

It violet the don't repeat yourself principle (DRY)

Instead of doing all this we can now create a loop and then put one of these lines of code in there
and the loop will then run that code over and over again untill we tell it to stop
*/

/*
Using for statement
using LET cause the counter will be updated later by the for loop
For loop keeps running while condition is TRUE

If the condition is true then the next loop iteration will run.
But as soon as this condition is false, then the loop stops
*/

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`)
}




