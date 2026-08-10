'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btn = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

for (let index = 0; index < btnsOpenModal.length; index++) {
    console.log(btnsOpenModal[index].textContent);
    
}


