window.addEventListener('DOMContentLoaded', function () {

    const buttonRoolDice = document.querySelector('.dice-roll');

    function rollDice() {

        const diceSide1 = document.getElementById('dice-side-1');
        const diceSide2 = document.getElementById('dice-side-2');
        const diceSide3 = document.getElementById('dice-side-3');
        const diceSide4 = document.getElementById('dice-side-4');
        const diceSide5 = document.getElementById('dice-side-5');
        const status = document.getElementById('status');

        const side1 = Math.floor(Math.random() * 6) + 1;
        const side2 = Math.floor(Math.random() * 6) + 1;
        const side3 = Math.floor(Math.random() * 6) + 1;
        const side4 = Math.floor(Math.random() * 6) + 1;
        const side5 = Math.floor(Math.random() * 6) + 1;
        const diceTotal = side1 + side2 + side3 + side4 + side5;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;
        diceSide3.innerHTML = side3;
        diceSide4.innerHTML = side4;
        diceSide5.innerHTML = side5;

        status.innerHTML = 'Колличество очков ' + diceTotal + '.';
    }

    buttonRoolDice.addEventListener('click', rollDice, false);

}, false);





window.addEventListener('DOMContentLoaded', function () {

    const buttonRoolDice = document.querySelector('.dice-roll');

    function rollDice() {

        const diceSide6 = document.getElementById('dice-side-6');
        const diceSide7 = document.getElementById('dice-side-7');
        const diceSide8 = document.getElementById('dice-side-8');
        const diceSide9 = document.getElementById('dice-side-9');
        const diceSide0 = document.getElementById('dice-side-0');
        const status = document.getElementById('statuss');

        const side6 = Math.floor(Math.random() * 6) + 1;
        const side7 = Math.floor(Math.random() * 6) + 1;
        const side8 = Math.floor(Math.random() * 6) + 1;
        const side9 = Math.floor(Math.random() * 6) + 1;
        const side0 = Math.floor(Math.random() * 6) + 1;
        const diceTotal2 = side6 + side7 + side8 + side9 + side0;

        diceSide6.innerHTML = side6;
        diceSide7.innerHTML = side7;
        diceSide8.innerHTML = side8;
        diceSide9.innerHTML = side9;
        diceSide0.innerHTML = side0;

        status.innerHTML = 'Колличество очков ' + diceTotal2 + '.';
    }

    buttonRoolDice.addEventListener('click', rollDice, false);

}, false);