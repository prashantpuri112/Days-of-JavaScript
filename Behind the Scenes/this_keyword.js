"use strict";

/* This keyword is an extremely important concept to understand in JavaScript.
The this keyword or this variable is basically a special variable that is created for every execution context and therefore any function. */


// console.log(this);

const calcAge = function (birthyear) {
    console.log(2022 - birthyear);
    // console.log(this);
};
calcAge(2002);

//Why is the this keyword undefined in the above function but windows in below function?

const calcAgeArrow = birthyear => {
    console.log(2022 - birthyear);
    // console.log(this);
};
calcAgeArrow(1990);

/*it is because the arrow function does not get its own this keyword. So instead the arrow function simply uses the lexical
this keyword, which means that it uses the this keyword of its parent function or of its parents scope.

what is the lexical, this keyword? So what is the disc keywords in the parent's scope of this function?
Well, it is window because window is the this keywords here in the global scope.

*/


const prashant = {
    year: 2002,
    calcAge: function () {
        console.log(this);
        console.log(2022 - this.year);
    },
};
prashant.calcAge();

const matilda = {
    year: 2017,
};

matilda.calcAge = prashant.calcAge
// prashant.calcAge = matilda.calcAge
matilda.calcAge();

const f = prashant.calcAge;
f();