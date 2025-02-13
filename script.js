


let displayedNum = '';
operator = '';
firstNum = '';
secondNum = '';
total = '';

const number = document.querySelectorAll ('.btn.num');
const operation = document.querySelectorAll ('.btn.operator');
const inputField = document.getElementById ('input');
const decimalBtn = document.getElementById ('btn num dot');

inputField.value = '';


//getting the numbers

function display (){
    number.forEach (number => {
        number.addEventListener('click', e => {
            
            if (operator === ''){
                if (inputField.value.includes ('.')){
                    inputField.value = firstNum += e.target.innerText;
                    decimalBtn.disabled = true;
                    console.log(`firstNum: ${firstNum}`);
                } else {
                    inputField.value = firstNum += e.target.innerText;
                    console.log(`firstNum: ${firstNum}`);
                }

            } else if (operator !== ''){
                inputField.value = secondNum += e.target.innerText;
                console.log(`secondNum: ${secondNum}`)
            } 
        })
    });    
}

display ();


function calculate(firstNum, secondNum, operator) {

    firstNum = parseFloat(firstNum); 
    secondNum = parseFloat(secondNum);

    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            if (secondNum === 0) {
                return "Undefined";
            }
            return firstNum / secondNum;
        case '=': 
            if (secondNum === '' ){
                return firstNum;
            } else if (operator === '='){
                return secondNum;
            } else calculate ();
        default:
            return NaN; 
}
}
calculate ();

function operate() {
    operation.forEach(op => {
      op.addEventListener('click', e => {
        const currentOperator = e.target.innerText;
        console.log(`operator: ${currentOperator}`);
  
        if (secondNum !== '') {
          total = calculate(firstNum, secondNum, operator); 
          inputField.value = total;
          firstNum = total;
          operator = currentOperator; 
          secondNum = '';
        } else {
          operator = currentOperator; 
        }
      });
    });
  }
  
  operate();

//things to fix: decimal point, clear, delete button, equal
/*

function operate (){  
    operation.forEach(op => {
        op.addEventListener('click', e => {
            operator = e.target.innerText;
            console.log(`operator: ${operator}`);

    switch (operator){
        case '+':
            if (secondNum === ''){
                inputField.value = firstNum;
            } else if (secondNum !== '' && operator === '+'){ //make the total as firstnum when total is available so the next entered number becomes second num
                total = add ((parseInt (firstNum)), (parseInt (secondNum)));
                inputField.value = total;
                firstNum = total;
                secondNum = '';
            } else if (firstNum !== '' && secondNum !== ''){
                firstNum = total;
            }
            break; 
        case '-':
            if (secondNum === ''){
                inputField.value = firstNum;
            } else if (secondNum !== ''){ //make the total as firstnum when total is available so the next entered number becomes second num
                total = subtract ((parseInt (firstNum)), (parseInt (secondNum)));
                inputField.value = total;
                secondNum = '';
                firstNum = total;
            } else if (secondNum !== '' && operator !== '-'){
                firstNum = total;
            }
            break;    
} 
            
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


