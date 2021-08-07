const calculatorButtonArray = document.getElementsByClassName("calculatorButton");
const calculatorButtonOperatorArray = document.getElementsByClassName("calculatorButtonOperatorArray");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const backspaceButton = document.getElementById("backspace");
const displayValue = document.getElementById("displayValue");
let displayArray = [];

for (let buttonInArray = 0; buttonInArray < calculatorButtonArray.length; buttonInArray++){
    calculatorButtonArray[buttonInArray].addEventListener("click", () => {            
        populateDisplay(calculatorButtonArray[buttonInArray].textContent);
    });
};

for (let buttonInOperatorArray = 0; buttonInOperatorArray < calculatorButtonOperatorArray.length; buttonInOperatorArray++){
    calculatorButtonOperatorArray[buttonInOperatorArray].addEventListener("click", () => {            
        populateDisplay(calculatorButtonOperatorArray[buttonInOperatorArray].textContent);
        decimalButton.disabled = false;
    });
};

equalButton.addEventListener("click", () => {
    displayValue.value = calculate(displayArray);
});

clearButton.addEventListener("click", () => {
    displayValue.value = 0;
});

decimalButton.addEventListener("click", () => {
    decimalButton.disabled = true;
})

backspaceButton.addEventListener("click", () => {
    displayValue.value = displayValue.value.slice(0, -1);
    return displayArray = displayValue.value.slice(0, -1);
});

function populateDisplay(calculatorButtonClicked){
    displayValue.value += calculatorButtonClicked;
    return displayArray = displayValue.value.split("");
};

function calculate(array){
    let currentOperator = "";
    let numberBeforeOperator;
    let possibleOperators = ["+", "-", "/", "*"];
    let calculatedValue = array.reduce((accumulator, currentValue, currentIndex, array) => {        

        if (currentIndex == (array.length-1) && accumulator =="0"){
            currentValue = Math.round(currentValue*100)/100;
            if (currentValue == 0 && currentOperator == "/"){
                alert("Could not calculate after attempt to divide by zero");
                return displayValue.value = 0;
            };
            return operate(currentOperator, numberBeforeOperator, currentValue).toFixed(2);
        } //Executes if the last number is only one digit

        else if (currentIndex == (array.length-1)){
            accumulator = accumulator + currentValue;
            accumulator = Math.round(accumulator*100)/100;
            if (accumulator == 0 && currentOperator == "/"){
                alert ("Could not calculate after attempt to divide by zero");
                return displayValue.value = 0;
            };
            return operate(currentOperator, numberBeforeOperator, accumulator).toFixed(2);
         } //Executes if the last number is multiple digits

        else if ( isNaN(accumulator) === false && ( currentValue == "." || isNaN(currentValue) === false)){
            return accumulator + currentValue;
        } // Executes if current array index and past array index are numbers, or decimals

        else if(isNaN(accumulator) === false && possibleOperators.includes(currentValue) && isNaN(numberBeforeOperator) === false){
            accumulator = Math.round(accumulator*100)/100;                
            if (accumulator == 0 && currentOperator == "/"){
                alert("Could not calculate after attempt to divide by zero");
                return displayValue.value = 0;
            };
            numberBeforeOperator = operate(currentOperator, numberBeforeOperator, accumulator);
            currentOperator = currentValue;
            return "0";
        } // Executes if there is an operation to be performed and we've stored a number from prior operations

        else if(isNaN(accumulator) === false && possibleOperators.includes(currentValue)){
            currentOperator = currentValue;
            numberBeforeOperator = Math.round(accumulator*100)/100;
            return "0";
        }; // Executes upon hitting the first operator in the display
    }, 0);
    return parseFloat(calculatedValue);
};

function addition(firstNumber, secondNumber){
    return firstNumber + secondNumber;
};

function subtraction(firstNumber, secondNumber){
    return firstNumber - secondNumber;
};

function multiplication(firstNumber, secondNumber){
    return firstNumber * secondNumber;
};

function division(firstNumber, secondNumber){
    
    return firstNumber / secondNumber;
};

function operate(operator, firstNumber, secondNumber){
    switch (operator){
        case '+':
            return addition(firstNumber, secondNumber);
            break;
        case '-':
            return subtraction(firstNumber, secondNumber);
            break;
        case '*':
            return multiplication(firstNumber, secondNumber);
            break;    
        case '/':
            return division(firstNumber, secondNumber);
            break;
    };
};