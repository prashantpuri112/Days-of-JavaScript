'use strict';

// The Multi birthYear Variable is like a local variable in the function

const calAge = function (birthYear) {
    return 2022 - birthYear;
}


const yearUntilRetirement = function (birthYear, firstName) {      // converting it to more normal function expression
    const age = calAge(birthYear);
    const retirement = 60 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`); // It has to be above the return statement otherwise it will not be executed
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
    // return `${firstName} retires in ${retirement} years.`;
}


console.log(yearUntilRetirement(2002, 'Prashant'));
console.log(yearUntilRetirement(1800, 'Puri'));