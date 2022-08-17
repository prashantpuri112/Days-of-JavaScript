/* For loop

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

*/

//Doing the same things with while loop

let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;   //At the end of the iteration, we will then increase the counter
}

//The while loop is more versatile than the for loop, It can be used in a larger variety of situations cause it doesn't really need a counter


/* Implementing while loop without depending on a counter (But instead it will deped on a random variable)
Use case of wile loop: We do actually not know howmany times the loop should run, so we don't need  acounter variable */

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
// We want to keep running the loop until it roll to 6
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);  // Will create infinite loop till this code of line LOL
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
