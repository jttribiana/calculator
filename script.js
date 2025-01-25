
//PICK UP > return the operation value from for loop to apply to poerator function

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

    let a = 1;
    let b = 2;
    let operation = '';
    console.log(operation);

const operators = document.getElementsByClassName('operator');

for( var i=0; i<operators.length; i++){ //using for loop to listen to multiple class button click
    operators[i].addEventListener ('click', function(e){
    operation = (e.target.value);
})
};

function operator (){
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
operator();
console.log(operator())




//make the number populate to the display

//the input display isnt working when class name has been changed

function display (){

    const input = document.getElementById('input');
    const num = document.getElementsByClassName('btn');
    

    for( var i=0; i<num.length; i++){ //using for loop to listen to multiple class button click
        num[i].addEventListener ('click', function(e){
        let number = (e.target.value);
        input.value += number; //populate the number in the display
    })
    }
}
display ();







