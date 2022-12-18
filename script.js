'use strict'

const cardFront = document.querySelector(".rating-card__front");
const cardBack = document.querySelector(".rating-card__back");
const cardForm = document.querySelector(".ratings-form");

cardForm.addEventListener('submit', function (e){
    e.preventDefault();
    const selectedRating = document.querySelector('input[type=radio]:checked').value;
    console.log(selectedRating);
    if(selectedRating !== null) {
        console.log(selectedRating);
        const selectionOutput = document.getElementById('selected-value');
        console.log(selectionOutput);
        cardFront.classList.add('hidden');
        cardBack.classList.remove('hidden');
        selectionOutput.innerHTML = selectedRating;
    }
});
