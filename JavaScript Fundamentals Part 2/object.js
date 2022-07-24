const prashantPuri = [
    'Prashant',
    'Puri',
    2022 - 2002,
    'Learner',
    ['Casper', 'Tommy', 'Huskey']
];

/*In arrays there is no way of giving the above elements a name, but in arrays
there is no way of giving these elements a name and so we can't reference them by name but only by there order number
to solve that problem we have another Data Structure in JavaScript which is Objects
*/

// Objects: We actually define key value pairs and so then we can give each of those values above, a name


const prashant = {
    firstName: 'Prashant',      // Key is basicallly a variable name
    lastName: 'Puri',
    age: 2022 - 2002,
    job: 'Learner',
    Pets: ['Casper', 'Tommy', 'Huskey']
};

//Each of these keys is also called a property so we say that this object here which is called PRASHANT has Five Properties
