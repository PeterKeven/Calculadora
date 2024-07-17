function appendToDisplay(valorFuncao) {

    document.getElementById("display").value += valorFuncao

}

function clearDisplay() {

    document.getElementById("display").value = " "

}

function CalculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}