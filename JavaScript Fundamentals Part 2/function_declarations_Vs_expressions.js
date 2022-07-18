'use strict';

//Function Declarations

// const age1 = calcAge1(1990); //calling them before they are defined (Still Works)

function calcAge1(birthYear) {      //Parameter is kind of palceholder in the function
    /* const age = 2022 - birthYear;
       return age;
       or*/
    return 2022 - birthYear
}

const age1 = calcAge1(1990);     //argument is an actual value that we use to fill in the placeholder that is the paramater

console.log(age1);

/*Function Expressions
/Expression produces a value and so we use that value and store it into calcAge2 (Internally This happens because of a process called hoisting)*/

// const age2 = calcAge2(1990); //Cannot access 'calcAge2' before initialization

const calcAge2 = function (birthYear) {     //Function without a name is also called an anonymous function
    return 2022 - birthYear
}

const age2 = calcAge2(1990);

/*The function expression works the exact same way as the function declaration
so we call it in the same way we capture the return value in the same way and the result is also the same because the function body is the same*/
console.log(age1, age2);

/*Function is an value in JavaScript, So just as a number or a string or a boolean value
function is not a type (It's not like  astring or a number type) but it's also a vlaue. So if it's a value we can stor it in a variale*/

/* What's the big difference between Function declarations and Function Expression?
Answer: The main praticle difference is that we can actually call function declarations before they are defined in the code*/
