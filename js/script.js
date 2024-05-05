function showNumber(num) {
    document.getElementById('inputCal').value += num;
}

function deleteLastNumber() {
    let exp = document.getElementById('inputCal').value;
    document.getElementById('inputCal').value = exp.substring(0, exp.length - 1);
}

function equal() {
    var exp = document.getElementById('inputCal').value;
    if (exp) {
        document.getElementById('inputCal').value = eval(exp);
    }
}

function clearScreen() {
    document.getElementById('inputCal').value = "";
}