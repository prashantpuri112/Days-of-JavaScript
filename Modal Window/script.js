'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-model');
const btnOpenModal = document.querySelectorAll('.show-modal');
console.log(btnOpenModal); //Whenever we use query selector with a selector, which actually matches multiple elements only the first one will get selected

//To solve the limitation we can use "document.querySelectorAll"

for (let i = 0; i < btnOpenModal.length; i++)
    console.log(btnOpenModal[i].textContent);