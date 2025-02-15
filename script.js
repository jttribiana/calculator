


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
const negativeBtn = document.querySelector ('.btn.negative');
const percentBtn = document.querySelector ('.btn.percent');



inputField.value = '0';


//getting the numbers

function display (){
    number.forEach (number => {
        number.addEventListener('click', e => {
            
            if (operator === ''){
                if (e.target.innerText.includes ('.')){
                    inputField.value = firstNum += e.target.innerText;
                    decimalBtn.disabled = true;
                    console.log(`firstNum: ${firstNum}`);
                } else {
                    inputField.value = firstNum += e.target.innerText;
                    console.log(`firstNum: ${firstNum}`);
                }

            } else if (operator !== ''){
                if (e.target.innerText.includes ('.')){
                    inputField.value = secondNum += e.target.innerText;
                    decimalBtn.disabled = true;
                    console.log(`secondNum: ${secondNum}`);
                } else {
                    inputField.value = secondNum += e.target.innerText;
                    console.log(`secondNum: ${secondNum}`)
                }
            } 
        })
    });    
}

display ();


//negative button
negativeBtn.addEventListener ('click', negativeFunction);
function negativeFunction (){
    if (operator === ''){
        inputField.value = firstNum = `-${firstNum}`;
        console.log(firstNum);
    } else if (operator !== ''){
        inputField.value = secondNum = `-${secondNum}`;
        console.log(secondNum);
    }
}


//clear button
clearBtn.addEventListener ('click', clearFunction);
function clearFunction (){
    inputField.value = '';
    firstNum = '';
    secondNum = '';
    operator = '';
}


//delete button
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


//getting percent value
percentBtn.addEventListener ('click', percentFunction);
function percentFunction (){
    if (operator === ''){
        inputField.value = `${firstNum}%`;
        firstNum = firstNum/100;
        console.log(firstNum);
    } else if (operator !== ''){
        inputField.value = `${secondNum}%`;
        secondNum = secondNum/100;
        console.log(secondNum);
    }
}


//logic for calculation
function calculate(firstNum, secondNum, operator) {

    firstNum = parseFloat(firstNum); 
    secondNum = parseFloat(secondNum);

    switch (operator){
        case '+':
            return firstNum + secondNum;
        case '-':
            if (firstNum === ''){
                inputField.value = '-';
                operator = '';
            } else if (secondNum === ''){
                inputField.value += e.target.innerText;
                operator = '';
            } else return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            if (secondNum === 0) {
                return "Undefined";
            } return firstNum / secondNum;
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

function operate(){
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
        } else operator = currentOperator; 
      });
    });
  }
  operate();

/* things to fix 
3. UI
4. round answer with long decimals
5. percent button 
*/