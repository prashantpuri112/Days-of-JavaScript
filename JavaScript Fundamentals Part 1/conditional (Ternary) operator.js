const age = 20;
age >= 18 ? console.log('I like to drink hard') :   //Conditions, If and Else
    console.log('No, Drink Soda!');

//Basically The conditional (Ternary) operators have Three parts Conditions, If and Else part

// This one is easy and quick to understand
const drink = age >= 28 ? 'Drink Hard' : 'Drink Soda'; // Conditions, IF and Else (Conditional helps not to use If Else Statement)
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'Drink Hard';
} else {
    drink2 = 'Drink Soda';
}
console.log(drink2);

console.log(`I like to drink ${age >= 28 ? 'Drink Hard' : 'Drink Soda'}`); //Now , The template literal will now use whatever result we get from the operator we have used in the placeholder

// We still need IF/Else, If we have to execute the bigger blocks of code that we need to execute based on a condtion in that case the TERNARY operator will not gonna help. It is helpful if we have to take a quick decision