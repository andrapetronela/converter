let kilos = document.querySelector('#kilos');

function convert() {
    let pounds = parseInt(document.querySelector('#pounds').value);
    let result = pounds * 0.45359237;
    kilos.textContent = `${result.toFixed(2)} kilograms`;

    if (pounds < 1) {
        kilos.textContent = 'Please enter a number greater than 0';
    }
}

let pounds = document.querySelector('#pounds');
pounds.addEventListener('keyup',function(e){
    if (e.keyCode === 13) {
    convert()
  }  else if (pounds.value == null || pounds.value == '') {
    kilos.textContent = '';
}
});

let calculate = document.querySelector('#calculate');
calculate.addEventListener('click', convert);
