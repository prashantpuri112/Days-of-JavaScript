/* In the ES6 Arrow Function was introduce for the First Time
Arrow Function: It is simply a special form of function expression that is shorter and therefore faster to write*/

// Arrow Function
const calcAge3 = birthYear => 2022 - birthYear; //easier and faster to write cause we don't need the curly braces, the return actually happens implicitly
const age3 = calcAge3(2002);
console.log(age3);


const yearUntilRetirement = (birthYear, firstName) => {      //Even in arrow function for more than one line of code we need curly braces
    const age = 2022 - birthYear;
    const retirement = 60 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years.`
}
console.log(yearUntilRetirement(2002, 'Prashant'));

