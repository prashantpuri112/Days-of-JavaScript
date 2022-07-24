const prashant = {
    firstName: 'Prashant',
    lastName: 'Puri',
    age: 2022 - 2002,
    job: 'Learner',
    Pets: ['Casper', 'Tommy', 'Huskey']
};
console.log(prashant);

//Using dot notation to get a property form an object, which is very straight forward

console.log(prashant.lastName)


//Doing exact same things with brackets notation
console.log(prashant['lastName']); //Here we need to specify a string with the property name

/*The big difference between these two here is that in the bracket notation, we can actually put any expression that we'd like
so we don't have to explicitly write the string here but instead we can compute it from some operation (Operation is basically an expression)
*/

const nameKey = 'Name';
console.log(prashant['first' + nameKey]);
console.log(prashant['last' + nameKey]);

/* What will happen here is that as JavaScript sees this line of code, it will start by executing this plus operation and so it will create a string first name
and then it will go to the Prashant object and retrieve that property*/


//We have to use the real final property name and not a computed property name

/* So in what situations should we use the dot notation and when do we have to use deep brackets notation?

When we need to first compute the property name, like we did here with the first and last name, then of course we have to use the bracket notation
In any other case, just use the dot notation, which looks a lot cleaner and it's also easier to use, okay.
 */

const interestedIn = prompt('What do you wnat to know about Prashant? Choose between firstName, lastName, age, job, and friends');
// console.log(prashant.interestedIn); //we will get undefined cause when we try to access a property on an object that does not exist

// console.log(prashant[interestedIn]);

//Undefined is a false value, we can use that to our advantage now and create some logic that we'll print a custom string

if (prashant[interestedIn]) {
    console.log(prashant[interestedIn]);
} else {
    console.log('Wrong request!')
}

//Using bot bracket and dot to add new properties to the object

prashant.location = 'Nepal';
prashant['twitter'] = '@theprashantpuri';
console.log(prashant)



//Challenge
//Prashant has 3 Pets, and his Faviroute Pet is Tommy
console.log(`${prashant.firstName} has ${prashant.Pets.length} pets, and his best pet is ${prashant.Pets[1]}`);





