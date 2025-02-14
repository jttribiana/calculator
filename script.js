


let displayedNum = '';
operator = '';
firstNum = '';
secondNum = '';
total = '';

const number = document.querySelectorAll ('.btn.num');
const operation = document.querySelectorAll ('.btn.operator');
const inputField = document.getElementById ('input');
const decimalBtn = document.querySelector ('.btn.num.dot');
const clearBtn = document.querySelector ('.btn.clear');
const deleteBtn = document.querySelector ('.btn.delete');


inputField.value = '';


//getting the numbers

function display (){
    number.forEach (number => {
        number.addEventListener('click', e => {
            
            if (operator === ''){
                if (e.target.innerText.includes ('.')){
                    decimalBtn.disabled = true;
                    inputField.value = firstNum += e.target.innerText;
                    inputField.value = firstNum += e.target.innerText;
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


clearBtn.addEventListener ('click', clearFunction);

function clearFunction (){
    inputField.value = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}

deleteBtn.addEventListener ('click', deleteFunction);

function deleteFunction (){
    if (operator === ''){
        inputField.value = inputField.value.slice(0, -1);
        firstNum = firstNum.slice (0, -1);
        console.log(firstNum);
    } else if (operator !== '' && secondNum !== ''){
        inputField.value = inputField.value.slice(0, -1);
        secondNum = secondNum.slice (0, -1);
        console.log(secondNum);
    } else 
        operator = operator.slice (0, -1);
        console.log(operator)
}

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

/* things to fix 
1. Decimal point
2. Negative sign
3. UI
*/