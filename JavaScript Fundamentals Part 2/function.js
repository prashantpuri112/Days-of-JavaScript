'use strict';

function logger() {
    console.log('My name is Prashant');
}

//calling / running or invoking function
logger();   //we will not specify any arguments cause in the function we haven't defined any parameter, it will be no use to pass the value
logger();
logger();
logger();

function Prashant(lastname, love) {
    // console.log(lastname, love);
    const People = `${lastname} loves ${love}.`;
    return People;
}

//Function allow us to write more maintainable code because with function we can create reusable chunks of code instead of having to manually write the same code over and over again (It is the most important things about function)
// When you learn the concept of the function you will know when you should actually use the function, It is actually a very important principle for writting clean code (The principle is called Don't Repeat Yourself {DRY})

const lastname = Prashant('Puri', 'Gym');    //Specifying  Lastname and Love to the value of above function
console.log(lastname)
// console.log(Prashant('Puri', 'Gym'));   //not captauring vlaue into variable, Simply log the result of running function to the console directly


const lastnameLove = Prashant('Thapa', 'Gamer'); //we can use function as many times as we want but to execute the function, we have to call the function first
console.log(lastnameLove) //Console.log is also an function but a built in function