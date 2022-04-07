function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pinString
    }
    else {
        // console.log('removing 3 digite number', pin);
        return getPin();
    }
}
function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-number');
    if (isNaN(number)) {
        // console.log(number);
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumber = document.getElementById('typed-number').value;
    const confermMessage = document.getElementById('notify-success');
    const errorMessage = document.getElementById('notify-fail');
    if (pin == typedNumber) {
        errorMessage.style.display = 'none';
        confermMessage.style.display = 'block';
    }
    else {
        confermMessage.style.display = 'none';
        errorMessage.style.display = 'block';
    }
}