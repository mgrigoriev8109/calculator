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

function populateDisplay(userCalculatorInput){
    // function that populates the display when clicking buttons
    // store the display value in a variable for the next step
    
}