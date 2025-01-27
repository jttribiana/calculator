
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



/* this is the variables for operations */

function display (){
    const input = document.getElementById('input');
    const num = document.getElementsByClassName('btn');
    

    for( var i=0; i<num.length; i++){ //using for loop to listen to multiple class button click
        num[i].addEventListener ('click', function(e){
        let number = (e.target.value);
        let numberValue = input.value += number; //populate the number in the display
        
        
        let a = numberValue; // storing in the value to a variable, but populating weirdly in console
        console.log(a)


        let b = 2;


//variables & buttons

const operators = document.getElementsByClassName('operator');
const equalBtn = document.getElementById ('equalBtn');

for( var i=0; i<operators.length; i++){ //using for loop to listen to multiple class button click
    operators[i].addEventListener ('click', function(e){
    operation = (e.target.value);
    console.log(operation);

    //operation logic
    function operate (){

    
        if (operation === '+'){
            return add (a, b);
        } else if (operation === '-'){
            return subtract (a, b);
        } else if (operation === '*'){
            return multiply (a, b);
        } else if (operation === '/'){
            return divide (a, b);
        } 
    
    }
    operate ();
    console.log(operate());
    

})
}
})
}
}
display ();




//make the number populate to the display









