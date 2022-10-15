'Use Strict';

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Prashant');
greeterHey('Puri');

greet('Hello')('Prashant');

//Same thing with Arrow Function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Prashant')