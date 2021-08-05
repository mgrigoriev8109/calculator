// let's think about what we're trying to code. we have displayArray storing our values
// there needs to be a conditional at some point watching over the values going into 
// the display Array. Possibly through a nested conditional watch to see when numbers
// become an operator, then numbers again, then an operator again. This second time 
// they become an operator, all the numbers before the operator are concatenated into 
// a single number, all those after are concatenated, and we perform operate(). If there
// is another operator this continues, if not this is the final value
const calculatorButtonsArray = document.getElementsByClassName("calculatorButton");
const equalButton = document.getElementById("equal");

for (let buttonInArray = 0; buttonInArray < calculatorButtonsArray.length; buttonInArray++){
    calculatorButtonsArray[buttonInArray].addEventListener("click", () => {            
        populateDisplay(calculatorButtonsArray[buttonInArray].textContent);
    });
};

equalButton.addEventListener("click", () => {
    //calculate(displayArray);
    console.log(calculate(displayArray));
});

function populateDisplay(calculatorButtonClicked){
    const displayValue = document.getElementById("displayValue");
    displayValue.value += calculatorButtonClicked;
    return displayArray = displayValue.value.split("");
};

// This function needs to be finished with the logic to test for accumulator == string(0->9), currentValue == string(0->9), 
// numberBeforeOperator == an integer, and currentValue == operator(+ - * /)
// possibly through regular expressions since everything is in strings?
function calculate(array){
    let currentOperator = "";
    let numberBeforeOperator;
    let possibleOperators = /\+/;
    
    let calculatedValue = array.reduce((accumulator, currentValue, currentIndex, array) => {        

        if (currentIndex == (array.length-1) && accumulator =="0"){
            return operate(currentOperator, numberBeforeOperator, currentValue);
        } // If the last number is a single digit we assign the currentValue instead of the accumulator
        
        else if (currentIndex == (array.length-1)){
            accumulator = accumulator + currentValue;
             return operate(currentOperator, numberBeforeOperator, accumulator);
         } // first we check if we're at the end of our displayArray, if we are we calculate and return
        
        else if ( isNaN(accumulator) === false && isNaN(currentValue) === false){
            return accumulator + currentValue;
        } // If displayArray[i] and displayArray[i+1] are strings of numbers they get concatenated

        else if (isNaN(accumulator) === false && possibleOperators.test(currentValue)){
            currentOperator = currentValue;
            numberBeforeOperator = parseInt(accumulator);
            return "0";
        } // If an operator comes up, accumulated string gets turned into integer,
        // the operator gets stored as currentOperator, and accumulator becomes 0 string

        else if(isNaN(accumulator) === false && possibleOperators.test(currentValue) && isNaN(numberBeforeOperator) === false){
            numberBeforeOperator = operate(currentOperator, numberBeforeOperator, accumulator);
            currentOperator = currentValue;
            return "0";
        }; // continuing on, if we hit ANOTHER operator we take numberBeforeOperator, currentOperator, and
        // execute operate(), the result of which becomes the new numberBeforeOperator, and the upcoming
        // currentValue operator becomes the new currentOperator

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