let finalResult = document.querySelector('#finalResult');

function convert() {
    /* 
    // pounds to kilos
    */
    let userInput = Number(document.querySelector('#userInput').value);
    let result = userInput * 0.45359237;
    finalResult.textContent = `${result.toFixed(3)} kg`;
    
    /* 
    // check positive input
    */
    function checkPositiveInput() {
        if (userInput < 0) {
            finalResult.textContent = 'Please enter a number greater than 0.';
        }
    }
    
    checkPositiveInput();
    
    /* 
    // check input
    */
    function checkInput() {
        if (userInput == null || userInput == '') {
            finalResult.textContent = 'Please enter a number';

        }
    }
    checkInput();

    let selection = document.querySelector('.selection');

    /* 
    // kilos to pounds
    */
    if (selection.value == 'kilosToPounds') {
        result = userInput * 2.20462262185;
        finalResult.textContent = `${result.toFixed(3)} lbs`;
        checkPositiveInput();
    }
    
    /*
    // kilos To Stones
    */ 
    if (selection.value == 'kilosToStones') {
        result = userInput * 0.1574730444;
        finalResult.textContent = `${result.toFixed(3)} st`;
        checkPositiveInput();
    }
    
    if (selection.value == 'stonesToKilos') {
        result = userInput / 0.1574730444;
        finalResult.textContent = `${result.toFixed(3)} kg`;
        checkPositiveInput();
    }
    
    if (selection.value == 'kilosToOunce') {
        result = userInput / 0.02834952;
        finalResult.textContent = `${result.toFixed(3)} oz`;
        checkPositiveInput();
    }
    
    if (selection.value == 'ouncesToKilos') {
        result = userInput * 0.02834952;
        finalResult.textContent = `${result.toFixed(3)} kg`;
        checkPositiveInput();
    }
}

/*
// Keyboard interaction
*/
let userInput = document.querySelector('#userInput');
userInput.addEventListener('keyup', function(e){
    if (e.keyCode === 13) {
        convert();
    } if (e.keyCode === 13 && userInput.value == '') {
        finalResult.textContent = 'Please enter a number.'
    }
    
    else if (userInput.value == null || userInput.value == '') {
        finalResult.textContent = '';
    }
});

/* 
// Buttons
*/
let calculate = document.querySelector('#calculate');
calculate.addEventListener('click', convert);

let reset = document.querySelector('#reset');

reset.addEventListener('click', resetInput);

function resetInput() {
    userInput.value = '';
    finalResult.textContent = '';
}
 