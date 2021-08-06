// let's think about what we're trying to code. we have displayArray storing our values
// there needs to be a conditional at some point watching over the values going into 
// the display Array. Possibly through a nested conditional watch to see when numbers
// become an operator, then numbers again, then an operator again. This second time 
// they become an operator, all the numbers before the operator are concatenated into 
// a single number, all those after are concatenated, and we perform operate(). If there
// is another operator this continues, if not this is the final value
const calculatorButtonsArray = document.getElementsByClassName("calculatorButton");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

for (let buttonInArray = 0; buttonInArray < calculatorButtonsArray.length; buttonInArray++){
    calculatorButtonsArray[buttonInArray].addEventListener("click", () => {            
        populateDisplay(calculatorButtonsArray[buttonInArray].textContent);
    });
};

equalButton.addEventListener("click", () => {
    displayValue.value = calculate(displayArray);
});

clearButton.addEventListener("click", () => {
    displayValue.value = 0;
});

function populateDisplay(calculatorButtonClicked){
    let displayValue = document.getElementById("displayValue");
    displayValue.value += calculatorButtonClicked;
    return displayArray = displayValue.value.split("");
};

function calculate(array){
    let currentOperator = "";
    let numberBeforeOperator;
    let possibleOperators = ["+", "-", "/", "*"];
    let calculatedValue = array.reduce((accumulator, currentValue, currentIndex, array) => {        

        if (currentIndex == (array.length-1) && accumulator =="0"){
            currentValue = parseInt(currentValue);
            if (currentValue == 0 && currentOperator == "/"){
                alert("Please don't divide by zero let's try again.");
                return displayValue.value = 0;
            };
            return operate(currentOperator, numberBeforeOperator, currentValue).toFixed(2);
        }

        else if (currentIndex == (array.length-1)){
            accumulator = accumulator + currentValue;
            accumulator = parseInt(accumulator);
            if (accumulator == 0 && currentOperator == "/"){
                alert ("Please don't divide by zero, let's try again.");
                return displayValue.value = 0;
            };
            return operate(currentOperator, numberBeforeOperator, accumulator).toFixed(2);
         }

        else if ( isNaN(accumulator) === false && isNaN(currentValue) === false){
            return accumulator + currentValue;
        }

        else if(isNaN(accumulator) === false && possibleOperators.includes(currentValue) && isNaN(numberBeforeOperator) === false){
            accumulator = parseInt(accumulator);
            numberBeforeOperator = operate(currentOperator, numberBeforeOperator, accumulator);
            currentOperator = currentValue;
            return "0";
        }

        else if (isNaN(accumulator) === false && possibleOperators.includes(currentValue)){
            currentOperator = currentValue;
            numberBeforeOperator = parseInt(accumulator);
            return "0";
        }; 
    }, 0);
    return calculatedValue;
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