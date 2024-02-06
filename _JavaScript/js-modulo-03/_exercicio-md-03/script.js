
//# Módulo 3
//# Exercícios Módulo 2. EX: 1, 2

// 1. Escreva um programa que exiba a soma dos números de 1 a 10 no console.
/* let soma = 0;
for (let i = 1; i <= 10; i++) {
    soma += i;
    console.log(soma);
} */

/*
// 2. Escreva um programa que exiba os números pares de 1 a 20 no console.
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
*/



/*
//3. Escreva um programa que exiba os números de 1 a 100 no console, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para números que são múltiplos de ambos (3 e 5), exiba a palavra "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    let n = "";
    if (i % 3 == 0) {
        n += "Fizz";
    }

    if (i % 5 == 0) {
        n += "Buzz";
    }
    console.log(n || i)
}
*/

/* 
//4. Escreva um programa que verifique se um número é primo e exiba o resultado no console.
function nPrimo(n) {
    if (n < 2) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(nPrimo(5));
*/


//5. Escreva um programa que encontre o maior número em uma lista de números e exiba o resultado no console.
let list = [1, 2, 3, 4, 5];

let maiorNumero = list[0];

for (let i = 0; i < list.length; i++) {
    if (list[i] > maiorNumero) {
        maiorNumero = list[i];
    }
}
console.log(`O maior é: ${maiorNumero}`)

/*  
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
