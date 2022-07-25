const prashantArray = [
    'Prashant',
    'Puri',
    2022 - 2002,
    'Learner',
    ['Casper', 'Tommy', 'Huskey'],
];

const types = [];

// console.log(prashant[0])
// console.log(prashant[1])
// console.log(prashant[2])
// console.log(prashant[3])

// i stands here as a traditional counter variable name

for (let i = 0; i < prashantArray.length; i++) {               //starting from zero cause array starts from 0
    //Reading from prashant array
    console.log(prashantArray[i], typeof prashantArray[i]);

    //Filling types array, One way:
    // types[i] = typeof prashantArray[i];

    //Another way:
    types.push(typeof prashantArray[i]);  //It is abit cleaner


}

console.log(types);
const years = [1990, 2002, 2008, 2018, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}
console.log(ages);


/* Two important statement for loops: Continue and Break statement

Continue: It is to exit the current iteration of the loop and continue to the next one
Break: It is used to completely terminate the whole loop

*/


/* If we only want to print element to the array that are strings and the continue statement is perfect for this
because with continue we can exit the current iteration of the loop

*/

// //Continue example
console.log('------ONLY STRINGS-----')
for (let i = 0; i < prashantArray.length; i++) {
    if (typeof prashantArray[i] !== 'string') continue;
    console.log(prashantArray[i], typeof prashantArray[i]);
}


//Break example
//What break does is to complete;y terminate the whole loop, So not just the current iteration

console.log('------BREAK WITH NUMBER-----')
for (let i = 0; i < prashantArray.length; i++) {
    if (typeof prashantArray[i] === 'number') break;
    console.log(prashantArray[i], typeof prashantArray[i]);
}



