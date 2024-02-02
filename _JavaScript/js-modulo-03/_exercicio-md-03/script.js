
//Exercícios
/*
Md-02: 1-) Escreva um programa que verifique se um número
 é par ou ímpar e exiba o resultado no console.
*/
/*
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
*/

// Md-02: 2-)
/* Escreva um programa que calcule o resto da divisão entre dois números inteiros e exiba o resultado. */
// let btn = document.querySelector(".container button");

// btn.addEventListener("click", calcula => {
//     let input1 = document.querySelector("#input-1").value;
//     let input2 = document.querySelector("#input-2").value;
//     let h2 = document.querySelector("h2");

//     function calcula(n1, n2) {
//         let resultado = parseFloat(n1 % n2);
//         return resultado;
//     }
//     let resultadoFinal = calcula(input1, input2)

//     h2.innerHTML = resultadoFinal

// })


// Md-02: 3-). Escreva um programa que calcule a média de três números reais e exiba o resultado.
/* 
let btn = document.querySelector(".container button");
let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");

let input3 = document.createElement("input"); //cria um input
input3.type = "number"
input3.className = "input-3";    //add class no html

let novaDiv = document.querySelector(".container div"); //pegando a div dentro do container para add input
novaDiv.insertBefore(input3, novaDiv.children[2]); //add input3 com o metodo isertBefore p/ inserir na posição desejada com o children[2]

document.querySelector("h1").textContent = `A média é ?` // troca o texto do h1
let h2 = document.querySelector("h2");    //pega o h2 para colocar o resultado

btn.addEventListener("click", calcMedia => {

    function calcMedia(n1, n2, n3) {
        let soma = Number(n1) + Number(n2) + Number(n3)
        let media = parseFloat(soma / 3).toFixed(1);

        return media;
    }
    h2.innerText = calcMedia(input1.value, input2.value, input3.value)
}) 
*/

/* 
// Md-02: 4-). Escreva um programa que compare duas strings e exiba "As strings são iguais" se as strings 
// forem iguais, ou "As strings são diferentes" se forem diferentes.
let btn = document.querySelector(".container button");
let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");
input1.type = "text";
input2.type = "text";

document.querySelector("h1").textContent = "O nome é:";
let h2 = document.querySelector("h2");
h2.innerHTML = '';
btn.addEventListener("click", () => {
    if (input1.value === input2.value) {
        h2.innerHTML = "As strings são iguais";
    } else {
        h2.textContent = "As strings são diferentes";
    }

    if (input1.value === " " || input2.value === "") {
        h2.innerHTML = "Campo não deve estar vazio";
    }
}) */



// Md-02: 5-). Escreva um programa que compare a idade de duas pessoas e exiba "A primeira pessoa é mais velha" se a idade da primeira pessoa for maior que a idade da segunda pessoa, ou "A segunda pessoa é mais velha" se for menor.

let btn = document.querySelector(".container button");
let input1 = document.querySelector("#input-1");
let input2 = document.querySelector("#input-2");

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
h1.textContent = `Quem é o mais velho ?`
h2.innerHTML = '';

btn.addEventListener("click", function () {
    if (input1.value === "" || input2.value === "") {
        h1.textContent = `O campo de entrada deve ser preenchido.`;
    } else if (input1.value === input2.value) {
        h2.innerHTML = `As duas têm a mesma idade.`;
    } else if (input1.value > input2.value) {
        h2.innerHTML = `A primeira pessoa é mais velha`;
    } else {
        h2.innerHTML = `A segunda pessoa é mais velha`;
    }


    // if (input1.value === "" && input2.value === "") {
    //     h1.textContent = `O campo de entrada deve ser preenchido.`
    // } else {
    //     h1.textContent = `ta errado.`
    // }

})


/* 

*/


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
