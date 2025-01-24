


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


function operator (){
    let operation = '-';
    let a = 1;
    let b = 2;

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

function display (){

    const input = document.getElementById('input');
    const num = document.getElementsByClassName ('num');
    

    for( var i=0; i<num.length; i++){ //using for loop to listen to multiple class button click
        num[i].addEventListener ('click', function(e){
        let number = (e.target.value);
        input.value += number; //populate the number in the display
    })
    }
}
display ();







