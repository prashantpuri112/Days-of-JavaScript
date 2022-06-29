//Math Operators

const now = 2022
const agePrashant = now - 2002;
const agePuri = now - 1990;
console.log(agePrashant, agePuri)

//Playing with operators
console.log(agePrashant * 2, agePrashant / 2, agePuri ** 3)

const firstName = 'Prashant'
const lastName = 'Puri'
console.log(firstName + ' ' + lastName); //concat

//Assignment operators
let x = 50 + 5; // = and + are operator
x += 10; // x = x + 10 = 65
x *= 5; // x= x * 5 = 325
x++; // x= x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(agePrashant < agePuri); //>, <, >=, <=
console.log(agePuri >= 18);

const isFullAge = agePuri >= 18;

console.log(now - 2002 > now - 1990);