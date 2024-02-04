

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
            console.log('e par ' + n)
            h2.textContent = `Par`;
        } else {
            console.log("e inpar " + n)
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
//3. Escreva um programa que calcule a média de três números reais e exiba o resultado.
let btn = document.createElement("button")
console.log(btn)

/*
4. Escreva um programa que compare duas strings e exiba "As strings são iguais" se as strings forem iguais, ou "As strings são diferentes" se forem diferentes.
5. Escreva um programa que compare a idade de duas pessoas e exiba "A primeira pessoa é mais velha" se a idade da primeira pessoa for maior que a idade da segunda pessoa, ou "A segunda pessoa é mais velha" se for menor. 
*/