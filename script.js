
/*populating clicked number to the input screen 
1. get the input element
2. get the number input
3. add value to the number
3. function that listens what number is click
4. set it as display input in the calculator
*/

const one = document.getElementById('one');
const input = document.getElementById('input');
const num = document.getElementById ('numberOperator')
num.addEventListener ('click', function(e){
    input.value = (e.target.value);
    
})





function add (a, b){
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}


console.log(add (1, 2))
console.log(subtract (1, 2))
console.log(multiply (1, 2))
console.log(divide (1, 2))


function operate (operation, x, y){
    operation = {};
    x = "";
    y = "";
}





