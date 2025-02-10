//all variables

let displayedNum = '';
operator = '';
firstNum = '';
secondNum = '';
operator = '';
total = '';

const number = document.querySelectorAll ('.btn.num');
const operation = document.querySelectorAll ('.btn.operator');
const inputField = document.getElementById ('input');

inputField.value = '';


//getting the numbers

function display (){
    number.forEach (number => {
        number.addEventListener('click', e => {
            
            if (operator === ''){
                inputField.value = firstNum += e.target.innerText;
                console.log(`firstNum: ${firstNum}`)
            } else if (operator !== ''){
                inputField.value = secondNum += e.target.innerText;
                console.log(`secondNum: ${secondNum}`)


            }
        })
    });    
}

display ();


/* calculator operations */
function add (firstNum, secondNum){
    return firstNum + secondNum;
}
function subtract (firstNum, secondNum) {
    return ((parseInt (firstNum)) - (parseInt (secondNum)));
}
function multiply (firstNum, secondNum){
    return ((parseInt (firstNum)) * (parseInt (secondNum)));
}
function divide (firstNum, secondNum){
    return ((parseInt (firstNum)) / (parseInt (secondNum)));
}

function operate (){  
    operation.forEach(op => {
        op.addEventListener('click', e => {
            operator = e.target.innerText;
            console.log(`operator: ${operator}`);

//if operator is not equal to equal button and total === 0
if (operator !== '='){
    switch (operator) {
        case '+':
            //clg the total (operation)
            //let total === firstnum 
            // if secondnum is not present, let secondnum === 0
            /*if (secondNum === ""){
                secondNum === '0';
                total === add ((parseInt (firstNum)) + (parseInt (secondNum)));
            }*/
            if (total !== ""){
                firstNum === total;
                total = add ((parseInt (firstNum)), (parseInt (secondNum)));
                inputField.value = total;
            }
                /*total = add ((parseInt (firstNum)), (parseInt (secondNum)));
                inputField.value = total;
            
            
            
            /*console.log(`total: ${total}`)
            inputField.value = (total);*/
            break; 


    }
    
} /*else if (operator === '=' && operator !== ''){
    switch (operator) {
        case '+':
            displayedNum = '';
            total = add (firstNum, secondNum);
            console.log(`total: ${total}`);
            break;
            
    }
}
    */

}); 
});
}
operate ();




/*





number.forEach (number => {
    number.addEventListener('click', e => {
        let innerText = e.target.innerText;
        if (operator === ''){
            inputField.value = firstNum += innerText;
            console.log(`firstNum: ${firstNum}`);
        } else if (operator !== '' && firstNum !== '' && result === '0') {
            inputField.value = secondNum += innerText;
        }  else if (operator !== '' && firstNum !== '' && result === '0') {
            inputField.value = secondNum += innerText;
        } else if (operator !== '' && result !== ''){
            result = firstNum
            secondNum = '';
        }
    })
});


operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.innerText === '+'){
            operator = e.target.innerText;
            result = (parseInt(firstNum) + parseInt (secondNum));



            console.log(`firstNum: ${firstNum}`)
            console.log(`operator: ${operator}`)
            console.log(`secondNum: ${secondNum}`)
            console.log(`result: ${result}`)



        } 
    });
});


/*

operators.forEach(op => {
    op.addEventListener('click', e => {
        if (e.target.innerText !== '='){
            operator = e.target.innerText;

            console.log(`firstNum: ${firstNum}`)
            console.log(`operator: ${operator}`)

        } else {
            console.log(`secondNum: ${secondNum}`);

            switch (operator){
                case '+':
                    console.log(parseInt(firstNum)+ parseInt (secondNum));
                    inputField.value = (parseInt(firstNum)+ parseInt (secondNum));
                    firstNum = (parseInt(firstNum)+ parseInt (secondNum));
                    secondNum = '';
                    break;
                case '-':
                    console.log(parseInt(firstNum)- parseInt (secondNum));
                    inputField.value = (parseInt(firstNum) - parseInt (secondNum));
                    secondNum = '';
                    break;        
                case '*':
                    console.log(parseInt(firstNum)* parseInt (secondNum));
                    inputField.value = (parseInt(firstNum)* parseInt (secondNum));
                    secondNum = '';
                    break;
                case '/':
                    console.log(parseInt(firstNum)/ parseInt (secondNum));
                    inputField.value = (parseInt(firstNum)/ parseInt (secondNum));
                    secondNum = '';
                    break;
            }
        }
    });
});



*/


