
//# Módulo 4
//1. Escreva um programa que receba uma lista de números e retorne uma nova lista com o dobro de cada número.
/* 
const n = [10, 20, 30, 40, 50];
const n2 = n.map(function (num) {
    return num * 2;
})
console.log(n);
console.log(n2); 
*/

// 2. Escreva um programa que receba uma lista de nomes e retorne uma nova lista com o comprimento de cada nome.
const nomes = ["Marcos", "Luiza", "Pedro", "Juliana", "Cesar"];
const nomesComp = nomes.map(function (nome) {
    return `O nome ${nome} tem ${nome.length} letras:`;
})
console.log(nomesComp);

/* 
3. Escreva um programa que receba uma lista de números e retorne uma nova lista contendo apenas os números pares.
4. Escreva um programa que receba uma lista de números e retorne a soma de todos os números.
5. Escreva um programa que receba uma lista de palavras e retorne uma nova lista contendo apenas as palavras com mais de 5 caracteres. 
*/