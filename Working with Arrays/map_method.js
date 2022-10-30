/* 
In JavaScript, there are three big and important array methods that we use all the time to perform data transformations. these are methods that we use
to create new arrays based on transforming data from other arrays. And in recent years, these tools have become really popular and for good reasons
and therefore we'll see them everywhere we look in Modern JavaScript. tools I'm talking about are; map, filter and reduce.
*/

/* The map method is yet another way that we can use to loop over a race. But unlike for each, the map method will give us a brand new array
and this new array will contain in each position the results of applying a callback function to the original array elements. */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//     return mov * eurToUsd;

// });

const movementsUSD = movements.map(mov => mov * eurToUsd); //callback function

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map((mov, i) =>
    `Movement ${i + 1}: You  ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);

console.log(movementsDescriptions);