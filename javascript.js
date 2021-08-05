// let's think about what we're trying to code. we have displayArray storing our values
// there needs to be a conditional at some point watching over the values going into 
// the display Array. Possibly through a nested conditional watch to see when numbers
// become an operator, then numbers again, then an operator again. This second time 
// they become an operator, all the numbers before the operator are concatenated into 
// a single number, all those after are concatenated, and we perform operate(). If there
// is another operator this continues, if not this is the final value

function calculate(){
    let calculatedValue = displayArray.reduce((accumulator, currentValue) => {

    }, 0);
}


const calculatorButtonsArray = document.getElementsByClassName("calculatorButton");
for (let buttonInArray = 0; buttonInArray < calculatorButtonsArray.length; buttonInArray++){
    calculatorButtonsArray[buttonInArray].addEventListener("click", () => {            
        populateDisplay(calculatorButtonsArray[buttonInArray].textContent);
        console.log(displayArray);
    });
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

function populateDisplay(calculatorButtonClicked){
    const displayValue = document.getElementById("displayValue");
    displayValue.value += calculatorButtonClicked;
    return displayArray = displayValue.value.split("");
};

addEventListenersToButtons();
