'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal); //Whenever we use query selector with a selector, which actually matches multiple elements only the first one will get selected

//To solve the limitation we can use "document.querySelectorAll"

//Function to close modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

//Function to close modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

//Not calling function just declaring or defining it, and tell JavaScript, "Hey, whenever a click happens on one of these buttons than only call that function, which is specified above"
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal);

/*
console.log('Button clicked');
modal.classList.remove('hidden');       //Removing hidden classes
overlay.classList.remove('hidden');

 modal.style.display = 'block';
*/

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
