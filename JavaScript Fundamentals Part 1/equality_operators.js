const age = '18';
if (age === 18) console.log('You just became an adult (strict)'); // Always recommended to use strict equality operator

if (age == 18) console.log('You just became an adult (Loose)'); // Avoid loose equality operator as much as you can

// const favourite = prompt("What's your favourite number?");
const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if (favourite == 24) { //23 == 23
    console.log('Cool! 24 is an amazing number!')
}
else if (favourite === 8) {
    console.log('8 is also a cool number')
} else if (favourite === 10) {
    console.log('10 is also a cool number')
}
else {
    console.log('Number is not 23 or 8 or 10')
}

if (favourite !== 24) console.log('Why not 24?');