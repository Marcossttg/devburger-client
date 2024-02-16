//# Exercícios Módulo 2
/*
//1. Escreva um programa que verifique se um número é par ou ímpar e exiba o resultado no console.

function createElement() {//Criando uma função que vai criar um botão, input, texto.
    let btn = document.createElement("button");//cria o button
    let textBtn = document.createTextNode("Clique");//cria o texto
    btn.appendChild(textBtn); //Adicionando o botão no html com o appendChild()

    let h2 = document.querySelector("h2");// Pegando o h2 no HTML
    let input = document.createElement("input");//Criando um input
    //Adicionando style no input
    input.style.marginTop = "20px";
    input.style.fontSize = "28px";
    input.type = "Number"

    btn.addEventListener('click', () => {//Adicionando event de click no btn

        let n = input.value % 2; //Variavel recebendo o valor digitado no input
        //depois de calcular se o valor digitado e resto 0

        if (n == 0) {//if Comparando se o valor do n e igual a 0
            console.log('e par ' + n);
            h2.textContent = `Par`;
        } else {
            console.log("e inpar " + n);
            h2.textContent = `Ímpar`;
        }
    });
    document.body.appendChild(input);//Aqui adicionando o input no body do HTML
    document.body.appendChild(btn);//Aqui estamos adicionando o botão no body do HTML
}
createElement()//Chamado a função que vai criar um input e um botão;
*/

//2. Escreva um programa que calcule o resto da divisão entre dois números inteiros
//e exiba o resultado.
/*
function createElement() {
    let btn = document.createElement("button");
    let textBtn = document.createTextNode("Clique");
    btn.appendChild(textBtn);

    let input = document.createElement("input");
    input.style.marginTop = "20px";
    input.style.fontSize = "28px";
    input.type = "Number"

    let input1 = document.createElement("input");
    input1.style.marginTop = "20px";
    input1.style.fontSize = "28px";
    input1.type = "Number"

    let h2 = document.querySelector("h2");

    btn.addEventListener('click', calcula => {
        let n1 = input.value;
        let n2 = input1.value;

        function calcula(n1, n2) {
            let resultado = parseFloat(n1 % n2);
            return resultado;
        }
        let resultadoFinal = calcula(n1, n2)

        h2.innerHTML = resultadoFinal

    })
    document.body.appendChild(input);
    document.body.appendChild(input1);
    document.body.appendChild(btn);
}
createElement()
*/

/*
//3. Escreva um programa que calcule a média de três números reais e exiba o resultado.

let btn = document.querySelector("button");
let input = document.querySelectorAll("input");

document.body.querySelector("h2").textContent = "Digite três números:"

btn.onclick = function () {
    let media = 0;
    for (let i = 0; i < input.length; i++) {
        let somaMedia = Number(document.getElementById("input" + i).value);
        media += somaMedia;
    }
    document.body.querySelector("h2").textContent = `A Média é: ${(media / 3).toFixed(1)}`
}
*/
// 4. Escreva um programa que compare duas strings e exiba "As strings são iguais" se as strings forem
// iguais, ou "As strings são diferentes" se forem diferentes.

/*
let inputText01 = document.getElementById("input0");
let inputText02 = document.getElementById("input1");
let p = document.querySelector("p");

document.getElementById("input2").style.display = "none";

document.querySelector("button").onclick = () => {

    if (inputText01.value == inputText02.value) {
        p.textContent = "As strings são iguais"
    } else {
        p.textContent = "As strings são diferentes"
    }
}
*/

/*

// 5. Escreva um programa que compare a idade de duas pessoas e exiba "A primeira pessoa é mais velha" se a idade da primeira pessoa for maior que a idade da segunda pessoa, ou "A segunda pessoa é mais velha" se for menor.
const input = document.getElementById("input0");
const input1 = document.getElementById("input1");
document.getElementById("input2").style.display = "none";

document.querySelector("button").onclick = () => {
    if (input.value == input1.value) {
        document.querySelector("p").textContent = "A idade são iguais";
    } else if (input.value > input1.value) {
        document.querySelector("p").textContent = "A primeira pessoa é mais velha";
    } else {
        document.querySelector("p").textContent = "A segunda pessoa é mais velha";
    }
}
*/

/*
//6. Faça um script que leia três números e mostre-os em ordem decrescente.
function exibir() {
    var n1 = parseFloat(6);
    var n2 = parseFloat(9);
    var n3 = parseFloat(3);

    var aux = n1;

    if (n2 > n1) {
        aux = n2;
        n2 = n1;
        n1 = aux;
    }

    if (n3 > n1) {
        aux = n3;
        n3 = n1;
        n1 = aux;
    }

    if (n3 > n2) {
        aux = n3;
        n3 = n2;
        n2 = aux;
    }
    return (n1 + "-" + n2 + "-" + n3);
}
console.log(exibir())
*/

//7. Faça um script que pergunte em que turno você estuda. Peça para digitar
//M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!",
//"Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

function createElement() {
    let h2 = document.querySelector("h2");
    h2.innerText = `Em que turno você estuda? Digite
    M para matutino ou V para Vespertino ou N para Noturno.`;

    let btn = document.createElement("button");
    let textBtn = document.createTextNode("clique");
    btn.appendChild(textBtn);

    let input = document.createElement("input");
    input.style.marginTop = "15px";
    input.style.fontSize = "30px";
    input.type = Text;

    document.body.appendChild(input);
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        let matutino = "m";
        let vespertino = "v";
        let noturno = "n";

        if (input.value.toLowerCase() == matutino) {
            h2.innerText = "Bom Dia!";
        } else if (input.value.toLowerCase() == vespertino) {
            h2.innerText = "Boa Tarde!";
        } else if (input.value.toLowerCase() == noturno) {
            h2.innerText = "Boa Noite!";
        } else {
            h2.innerText = "Valor Inválido!";
        }

        /*        
        switch (input.value.toLowerCase()) {
        case matutino:
            h2.innerText = "Bom Dia!";
            break;

        case vespertino:
            h2.innerText = "Boa Tarde!";
            break;

        case noturno:
            h2.innerText = "Boa Noite!";
            break;
        default:
            h2.innerText = "Valor Inválido!";
        } 
        */
    })
}
createElement()
