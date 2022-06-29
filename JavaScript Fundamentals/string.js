const firstname = 'Prashant';
const job = 'Web Developer';
const birthYear = 2002;
year = 2022;

const Prashant = "I'm" + " " + firstname + ', a' + ' ' + (year - birthYear) + ' ' + 'years old' + ' ' + job + '!';  //type coercion
console.log(Prashant);

//ES6 Template Literals

//One of the most use ES6 features
const prashantNew = `I'm ${firstname}, a ${year - birthYear} years old ${job}!`;
console.log(prashantNew);


console.log(`My name is Prashant Puri`) //using backtick to write all string without inserting any placeholder

console.log(`String with \n\multiple \n\lines`);

console.log(`String
multiple
lines`);