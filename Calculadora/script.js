const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const mult = document.getElementById("mult");
const div = document.getElementById("div");
let resultadoSpan = document.getElementById("resultado");
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;

const sumar = () => {
    let resultado = Number(num1) + Number(num2);
    return resultadoSpan.textContent = `${resultado}`;

}

const restar = () => {
    let resultado = num1 - num2;
    return resultadoSpan.textContent = `${resultado}`;

}

const multiplicar = () => {
    let resultado = num1 * num2;
    return resultadoSpan.textContent = `${resultado}`;
}

const dividir = () => {
    let resultado = num1 / num2;
    return resultadoSpan.textContent = `${resultado}`;
}

suma.addEventListener("click", sumar);
resta.addEventListener("click", restar);
mult.addEventListener("click", multiplicar);
div.addEventListener("click", dividir);

