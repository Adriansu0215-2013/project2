//variables
let counterbutton = document.getElementById("add1-button");
let counter = document.getElementById("add1");
let number = 0;
let minusbutton = document.getElementById("minus-button");
let clearbutton = document.getElementById("clear-button");
let number1button = document.getElementById("one-button");
let number2button = document.getElementById("two-button");
let number3button = document.getElementById("three-button");
let number4button = document.getElementById("four-button");
let number5button = document.getElementById("five-button");
let number6button = document.getElementById("six-button");
let number7button = document.getElementById("seven-button");
let number8button = document.getElementById("eight-button");
let number9button = document.getElementById("nine-button");
let number0button = document.getElementById("zero-button");



// functions
function add1() {
    number = number + 1;
    counter.textContent = number;
}


function minus() {
    number = number - 1;
    counter.textContent = number;
}
function clear() {
    number = 0;
    counter.textContent = number;
}
function number1() {
    number = 1;
    counter.textContent = number;
}
function number2() {
    number = 2;
    counter.textContent = number;
}
function number3() {
    number = 3;
    counter.textContent = number;
}
function number4() {
    number = 4;
    counter.textContent = number;
}
function number5() {
    number = 5;
    counter.textContent = number;
}
function number6() {
    number = 6;
    counter.textContent = number;
}
function number7() {
    number = 7;
    counter.textContent = number;
}
function number8() {
    number = 8;
    counter.textContent = number;
}
function number9() {
    number = 9;
    counter.textContent = number;
}
function number0() {
    number = 0;
    counter.textContent = number;
}

// Event listener
minusbutton.addEventListener("click", minus);
counterbutton.addEventListener("click", add1);
clearbutton.addEventListener("click", clear);
number1button.addEventListener("click", number1);
number2button.addEventListener("click", number2);
number3button.addEventListener("click", number3);
number4button.addEventListener("click", number4);
number5button.addEventListener("click", number5);
number6button.addEventListener("click", number6);
number7button.addEventListener("click", number7);
number8button.addEventListener("click", number8);
number9button.addEventListener("click", number9);
number0button.addEventListener("click", number0);

