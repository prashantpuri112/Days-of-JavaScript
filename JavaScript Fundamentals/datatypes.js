let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 90); //number
console.log(typeof 'Prashant');  //String

// dynamic typing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

//undefined
let year;
console.log(year)
console.log(typeof year)

//reassign, dynamic typing
year = 2002;
console.log(typeof year)

//similar to undefined
console.log(typeof null)        // weird behaviour in JS, not an object