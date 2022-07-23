// We learned that objects is just like a race, can hold different types of data and they can hold even a race and in fact, they could even hold objects inside objects

/* Functions are really just another type of value and if a function is just a value then that means that we can create a key value pair in which the value is a function
and that then means that we can in fact add functions to object */
'use strict';
const prashant = {
    firstName: 'Prashant',
    lastName: 'Puri',
    birthYear: 2002,
    age: 2022 - 2002,
    job: 'Learner',
    Pets: ['Casper', 'Tommy', 'Huskey'],
    hasDriversLicense: true,

    // We simply specify the function as an expression which will work because the expression produces the value
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }


    // calcAge: function () {
    //     // console.log(this);
    //     return 2020 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${prashant.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

};
console.log(prashant.calcAge());

console.log(prashant.calcAge());
console.log(prashant.calcAge());
console.log(prashant.calcAge());
// console.log(prashant['calcAge'](2002));

//Challenge
//"Prashant is a 20-year old learner, and he has a driver's license"
console.log(prashant.getSummary());
