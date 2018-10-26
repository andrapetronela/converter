let kilos = document.querySelector('#kilos');

function convert() {
    /* 
    // pounds to kilos
    */
    let userInput = Number(document.querySelector('#userInput').value);
    let result = userInput * 0.45359237;
    kilos.textContent = `${result.toFixed(3)} kilograms`;
    
    /* 
    // check positive input
    */
    function checkPositiveInput() {
        if (userInput < 0) {
            kilos.textContent = 'Please enter a number greater than 0.';
        }
    }
    
    checkPositiveInput();
    
    /* 
    // check input
    */
    function checkInput() {
        if (userInput == null || userInput == '') {
            kilos.textContent = 'Please enter a number';

        }
    }
    checkInput();

    let selection = document.querySelector('.selection');

    /* 
    // kilos to pounds
    */
    if (selection.value == 'kilos') {
        result = userInput * 2.20462262185;
        kilos.textContent = `${result.toFixed(4)} pounds`;
        checkPositiveInput();
    }
}

let userInput = document.querySelector('#userInput');
userInput.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        convert();
    } if (e.keyCode === 13 && userInput.value == '') {
        kilos.textContent = 'Please enter a number.'
    }
    
    else if (userInput.value == null || userInput.value == '') {
        kilos.textContent = '';
    }
});

let calculate = document.querySelector('#calculate');
calculate.addEventListener('click', convert);

let reset = document.querySelector('#reset');

reset.addEventListener('click', resetInput);

function resetInput() {
    userInput.value = '';
    kilos.textContent = '';
}
 