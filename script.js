let kilos = document.querySelector('#kilos');

function convert() {
    /* 
    // pounds to kilos
    */
    let pounds = Number(document.querySelector('#pounds').value);
    let result = pounds * 0.45359237;
    kilos.textContent = `${result.toFixed(3)} kilograms`;
    
    /* 
    // check positive input
    */
    function checkPositiveInput() {
        if (pounds < 0) {
            kilos.textContent = 'Please enter a number greater than 0.';
        }
    }
    
    checkPositiveInput();
        if (pounds == null || pounds == '') {
            kilos.style.width = 0;
        } 
    
    /* 
    // check input
    */
    function checkInput() {
        if (pounds == null || pounds == '') {
            kilos.textContent = 'Please enter a number';

        }
    }
    checkInput();

    let selection = document.querySelector('.selection');

    /* 
    // kilos to pounds
    */
    if (selection.value == 'kilos') {
        result = pounds * 2.20462262185;
        kilos.textContent = `${result.toFixed(4)} pounds`;
        checkPositiveInput();
    }
}

let pounds = document.querySelector('#pounds');
pounds.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
        convert();
    } if (e.keyCode === 13 && pounds.value == '') {
        kilos.textContent = 'Please enter a number.'
    }
    
    else if (pounds.value == null || pounds.value == '') {
        kilos.textContent = '';
    }
});

let calculate = document.querySelector('#calculate');
calculate.addEventListener('click', convert);

let reset = document.querySelector('#reset');

reset.addEventListener('click', resetInput);

function resetInput() {
    pounds.value = '';
    kilos.textContent = '';
}
