
//Exercícios Md-02
let btn = document.querySelector(".container button");
let h2 = document.querySelector("h2");

btn.addEventListener('click', () => {
    let input = document.querySelector("input").value;
    document.querySelector("input").focus();
    let n = input % 2;

    if (n == 0) {
        console.log('e par ' + n)
        h2.textContent = `Par`;
    } else {
        console.log("e inpar " + n)
        h2.textContent = `Ímpar`;
    }
});

/* 
let n1 = document.querySelector("#input-n1");
let n2 = document.querySelector("#input-n2");

//botoes
let btnSomar = document.querySelector("#somar");
let btnSubtrair = document.querySelector("#subtrair");

//text resultado
let textResult = document.querySelector(".texto-resultado");
let paragraphResult = document.querySelector("#resultado-numero");

function verificaCampo() {
    if (n1.value === "" || n2.value === "") {
        textResult.innerHTML = `Campo está vazio, digite um número`;
        return;
    }
}

function somar() {
    verificaCampo()
    let resultSoma = (parseInt(n1.value) + parseInt(n2.value));
    textResult.innerHTML = `O resultado é:`

    return paragraphResult.textContent = `${resultSoma}`
}

function subtrair() {
    verificaCampo()
    let resultSub = (parseInt(n1.value) - parseInt(n2.value));
    console.log(resultSub)
    return paragraphResult.textContent = `${resultSub}`
}
 */


/* 
//Calculadora 

function addCaracter(caracter) {
    const valorDisplay = document.querySelector("input").value;
    document.querySelector('input').value = valorDisplay + caracter;

}

function cleanAll() {
    const valorDisplay = document.querySelector("input").value = '';
    return valorDisplay;
}

function deleteLast() {
    let valorDisplay = document.querySelector("input").value;
    document.querySelector("input").value = valorDisplay.slice(0, -1);
}

function calculate() {
    const valorDisplay = document.querySelector("input").value;
    document.querySelector("input").value = eval(valorDisplay)
} */