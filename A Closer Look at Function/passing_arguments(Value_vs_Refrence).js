const flight = 'LH234';
const prashant = {
    name: 'Prashant Puri',
    passport: 68746
}


const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    if (passenger.passport === 68746) {
        alert('Check in')
    } else {
        alert('Wrong passport!')
    }
}

// checkIn(flight, prashant)
// console.log(flight);
// console.log(prashant);

//is the same as doing...

/*
passing a primitive type to a function is really just the same as creating a copy like this, outside of the function. So the value is simply copied.
On the other hand, when we pass an object to a function, it is really just like copying an object like this.
And so whatever we change in a copy will also happen in the original.
*/
// const flightNum = flight;
// const passenger = prashant

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000)
}

newPassport(prashant);
checkIn(flight, prashant);

/*In programming, there are two terms that are used all the time when dealing with functions, which is passing by value, and passing by reference,
and many experienced programmers that are new to JavaScript have some confusion between these terms and how it works in JavaScript.And so I wanna quickly address that here as well.
So JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference. So there are languages like C++,
where you can pass a reference to any value, instead of the value itself. This works even with primitives, so you could pass a reference to the value of five,
and then the original value, outside of the function, would be changed. And this is called pass by reference. But once again, JavaScript does not have pass by reference.
So if you already know some programming,but are new to JavaScript, be sure to understand this. And I know it's confusing, because as we just learned, for objects,
we do in fact pass in a reference. So the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address.
So basically we pass a reference to the function, but we do not pass by reference, and this is an important distinction.
*/