'use strcit';

function calcAge(birthYear) {
    const age = 2022 - birthYear;
    /* console.log(firstName); /* This first name variable is not actually in this scope of the calcAge function. However, it is a global variable that we defined out in Line 41.
                                 And so therefore, through the scope chain, it's gonna be made available also inside of this scope.*/

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear} AD`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 2002) {
            var millenial = true;
            // Creating NEW variable with same name as outer scope's variable
            const firstName = 'Puri';

            /* watch what happens when we redefine a variable from a parent scope inside of an inner scope.
                So not creating a new variable, but simply reassigning the value of a variable.*/

            // Reassigning outer scope's variable
            output = 'NEW OUTPUT!'

            const str = `Oh, and you're a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }


        }
        // console.log(str);
        console.log(millenial);
        // console.log(add(2, 3));
        console.log(output);
    }
    printAge();
    return age;
}

const firstName = 'Prashant';
calcAge(2002);

/* we have two firstName variables right now. But that is not a problem at all. Because in fact, they are completely different variables,
they simply happen to have the same name. But that's not a problem at all, because they are defined in different scopes. And so you can have repeated variable names.
That's absolutely no problem. */