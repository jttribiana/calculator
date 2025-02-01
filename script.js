
/* calculator operations */

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



let operation = '/';
let firstNum = '1';
let secondNum = '2';

function operate (){  
    if (operation === '+'){
        return add (firstNum, secondNum);
    } else if (operation === '-'){
        return subtract (firstNum, secondNum);
    } else if (operation === '*'){
        return multiply (firstNum, secondNum);
    } else if (operation === '/'){
        return divide (firstNum, secondNum);
    } 
}
operate ();
console.log(operate());




/* this function listens to operation clicked and operate */

//have to fix the function operate logic wherein it should get three values
/*
const operators = document.getElementsByClassName('operator');

for( var i=0; i<operators.length; i++){ //using for loop to listen to multiple class button click
    operators[i].addEventListener ('click', function(e){
    operation = (e.target.value);
    console.log(operation);
})
}

    //operation logic



/* this function displays the number in the input box */
/*
function display (){
    const input = document.getElementById('input');
    const num = document.getElementsByClassName('btn');
    

    for( var i=0; i<num.length; i++){ //using for loop to listen to multiple class button click
        num[i].addEventListener ('click', function(e){
        number = input.value += (e.target.value); //populate the number in the display
})
}
}
display ();
*/
//sample code, event listener with variable
/*
document.querySelector('#buttons')
  .addEventListener('click', event => {
    let target = event.target;
    if (target.matches('button')) {
      let value = target.innerHTML
      
      document.querySelector('#output').value += value
    }
  });
*/