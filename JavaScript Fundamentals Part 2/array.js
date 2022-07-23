'use strict';

/*Array are such a data structure, So an arrayy is like a big container into which we can throw variables and then later refrence them.
Which is super important, Because programming is most of the time, all about data.
So we get data from somewhere we store and process data and then we give some data back.And that data, it has to go somewhere. So it has to be stored in some place.
And for that we use data structures, just like Arrays. So incase we have more, than just a single value

The Two more important data structures atleast in JavaScript are Arrays and Objects.
Now let's learn all about Arrays.
*/

// Instead of doing this

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

// do this
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

//Using different way to create a array
const years = new Array(1991, 1984, 2008, 2020);  //New keyword is mandatory

console.log(friends[0]); // To retrive elements from array we are using a bracket syntax
console.log(friends[1]);

console.log(friends.length); //Count total elemet in the array

console.log(friends[friends.length - 1]);

//The only primirive values are immutable but an array is not a primitive value, So we can actually always change it so we can mutate it.
//It works this way because of the way that JavaScript stores things in memory
friends[1] = 'Puri'; //mutate or changing array
console.log(friends);

//But we can't change the entire array
// friends = ['Bob', 'Alice']  // This is illegal

// Array can actually holds values with different types all at the same time
const firstname = 'Prashant'
const Prashant = [firstname, 'Puri', 2022 - 2002, 'Learner', friends];
console.log(Prashant);


// Exercise
const calcAge = function (birthyear) {
    return 2022 - birthyear;
}
const year = [1990, 2002, 2008, 2012];
//We will be able to use calcAge function and then store the results of calculating the ages for some of these years into a new array

const age1 = calcAge(year[0]);
const age2 = calcAge(year[1]);
const age3 = calcAge(year[years.length - 1]);

console.log(age1, age2, age3);
const ages = [calcAge(year[0]), calcAge(year[1]), calcAge(year[years.length - 1])];  //Using Expression
console.log(ages);