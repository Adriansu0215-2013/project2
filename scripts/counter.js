//variables
let counterbutton = document.getElementById("counter-button");
let counter = document.getElementById("counter");
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
function one() {
    number = 1;
    counter.textContent = number;
}
function two() {
    number = 2;
    counter.textContent = number;
}
function three() {
    number = 3;
    counter.textContent = number;
}
function four() {
    number = 4;
    counter.textContent = number;
}
function five() {
    number = 5;
    counter.textContent = number;
}
function six() {
    number = 6;
    counter.textContent = number;
}
function seven() {
    number = 7;
    counter.textContent = number;
}
function eight() {
    number = 8;
    counter.textContent = number;
}
function nine() {
    number = 9;
    counter.textContent = number;
}
function zero() {
    number = 0;
    counter.textContent = number;
}

// Event listener
minusbutton.addEventListener("click", minus);
counterbutton.addEventListener("click", add1);
clearbutton.addEventListener("click", clear);
number1button.addEventListener("click", one);
number2button.addEventListener("click", two);
number3button.addEventListener("click", three);
number4button.addEventListener("click", four);
number5button.addEventListener("click", five);
number6button.addEventListener("click", six);
number7button.addEventListener("click", seven);
number8button.addEventListener("click", eight);
number9button.addEventListener("click", nine);
number0button.addEventListener("click", zero);

