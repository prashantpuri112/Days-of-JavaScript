/* Here we gonna learn  how to programmatically create and fill arrays */

'use strict';
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    // Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
            }`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1
            } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};

const calDisplayBalance = function (movements) {
    const balance = movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${balance} €`;
};
calDisplayBalance(account1.movements);

const calcDisplaySummery = function (movements) {
    const incomes = movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`;

    const out = movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = movements
        .filter(mov => mov > 0)
        .map(deposit => (deposit * 1.2) / 100)
        .filter((int, i, arr) => {
            // console.log(arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};
calcDisplaySummery(account1.movements);

btnClose.addEventListener('click', function (e) {
    e.preventDefault();
    // console.log('Delete');
    if (inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin) {
        const index = accounts.findIndex(acc => acc.username === currentAccount.username);
        console.log(index);
        // accounts.splice(index, 1);
    }
});

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const arr = [1, 2, 3, 4, 5, 6, 7]; //usually we create the array manually by typing with the hand
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //or this

/* we can actually also generate arrays programmatically so without having to define all the items manually. And there are many situations in which this is necessary
and there are also multiple ways of doing it. */

/* we might think that this is going to create an array with only one element number seven. But actually it doesn't,
instead it creates a new array with seven empty elements in there and it simply contains nothing. */

//Empty arrays + Fill methods
const x = new Array(7);
console.log(x);

// There is one method we can call to the empty array i.e: Fill method

x.fill(1);
x.fill(1, 3); //Specifying to start the elements from 3rd array in 2nd parameter
x.fill(1, 3, 5); // Slicing the array
console.log(x); //array full of 1's

arr.fill(23, 2, 6);
console.log(arr);

//Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('€', '')));

    console.log(movementsUI)

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

