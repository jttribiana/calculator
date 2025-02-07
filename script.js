


let firstNum = "";
let secondNum = "";
let operator = "";


const number = document.querySelectorAll ('.btn.num');
const operators = document.querySelectorAll ('.btn.operator');
const inputField = document.getElementById ('input');



number.forEach (number => {
    number.addEventListener('click', e => {
        let innerText = e.target.innerText;
        if (operator === ''){
            inputField.value = firstNum += innerText;
            console.log(`firstNum: ${firstNum}`);
        } else {
            inputField.value = secondNum += innerText;
        }
    })
});


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
                    break;
                case '-':
                    console.log(parseInt(firstNum)- parseInt (secondNum));
                    break;        
                case '*':
                    console.log(parseInt(firstNum)* parseInt (secondNum));
                    break;
                case '/':
                    console.log(parseInt(firstNum)/ parseInt (secondNum));
                    break;
            }
        }
    });
});







