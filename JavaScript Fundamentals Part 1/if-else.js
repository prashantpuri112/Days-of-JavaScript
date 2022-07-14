const name = 'Prashant';
const age = 12;
// const isOldEnough = age >= 16;

// if (isOldEnough) {   //initializing condition
//     console.log('Puri can start driving license🚘')
// }


if (age >= 16) {   //initializing condition
    console.log('Puri can start driving license🚘')
} else {
    const yearsLeft = 18 - age;
    console.log(`${name} is too young, wait another ${yearsLeft} years 😀`);
}

/*control structure
 if () {

 } else {

 }*/

const birthYear = 2002;
let century;                //global variable
if (birthYear <= 2000) {
    century = 20;       //local variable + Conditionally assigning century
} else {
    century = 21;       //local variable
}
console.log(century);