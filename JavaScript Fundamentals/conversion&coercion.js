/*Conversion = when we manually convert one type to another
Coercion = When JavaScript automatically converts types behind the scenes for us*/

//Type Conversion
const inputYear = '2002';
console.log(Number(inputYear)); //Converting strings to number
console.log(inputYear + 18); //Prints 200218
console.log(Number(inputYear) + 18); //Prints 2020

console.log(Number('Prashant')); //Prints NAN (Not A Number), Which means invalid number
console.log(typeof NaN); //Type of NaN is number

//JavaScript can only converts only 3 types i.e number to a string or to a boolean

console.log(String(24), 24);

//Type Coercion
console.log('I am ' + 21 + ' Years old');
// console.log('I am ' + String(21) + ' Years old');
console.log('21' + '10' + 3);
console.log('21' / '2');

let n = '1' + 1;
n = n - 1;  //Minus operator converted the N(11) from string to number but Plus operator won't do the same cause it will convert the other operand to a string
console.log(n);