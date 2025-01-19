
/*populating clicked number to the input screen 
1. populate the number in the display
2. fixed the function operate. 
*/


//shows button value in input
const input = document.getElementById('input');
const num = document.getElementsByClassName ('num');



function display (){
    for( var i=0; i<num.length; i++){
        num[i].addEventListener ('click', function(e){
            input.value = (e.target.value);
    })
    }
}
display ();



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





