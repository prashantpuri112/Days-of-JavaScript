/* 
This time we're gonna do two interesting things
First: We will loop over an array backwards,
Secind: We will create a loop inisde another loop

*/

const prashantArray = [
    'Prashant',
    'Puri',
    2022 - 2002,
    'Learner',
    ['Casper', 'Tommy', 'Huskey'],
];
//Let's now loop over this aray backwards (Descending Order)


for (let i = prashantArray.length - 1; i >= 0; i--) {
    console.log(i, prashantArray[i]);
}

//Creating a loop inside of a loop. 

// We start exercise number one
for (let exercise = 1; exercise <= 4; exercise++) {
    console.log(`----------Starting Exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {         //inside the iteration of exercise one a new loop is created and executed
        console.log(`Lifting weight repetition ${rep}`);
    }
}