
let n1 = document.querySelector("#input-n1");
let n2 = document.querySelector("#input-n2");

//botoes
let btnSomar = document.querySelector("#somar");
let btnSubtrair = document.querySelector("#subtrair");
let btnResultado = document.querySelector("#resultado");

//text resultado
let textResult = document.querySelector(".texto-resultado");
let paragraphResult = document.querySelector("#resultado-numero");


function somar() {
    //Verifica campo vazio
    // if (n1.value === "") {
    //     textResult.innerHTML = `Primeiro campo está vazio, digite um número.`
    // }

    // if (n2.value === "") {
    //     textResult.innerHTML = `Segundo campo está vazio digite um número`
    // }

    let resultSoma = (parseInt(n1.value) + parseInt(n2.value));
    console.log(resultSoma)
    return resultSoma

}

function subtrair() {
    let resultSub = (parseInt(n1.value) - parseInt(n2.value));
    console.log(resultSub)
    return resultSub
}

function resultado() {
    textResult.innerHTML = `O resultado é:`
    paragraphResult.textContent = `${somar()}`
}
