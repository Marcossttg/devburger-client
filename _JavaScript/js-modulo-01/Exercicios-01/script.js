// alert("Olá Mundo!");
/*
//## Módulo 1
1. Escreva um programa que exiba "Olá, mundo!" no console.

let btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", () => {
    console.log("Olá Mundo!")
})
*/

/*
//2. Escreva um programa que calcule a média de três números e exiba o resultado no console.
// - Para calcular a média você só precisa somar os 3 números e dividir por 3.
let n1; //Cria uma variável vazia.
let n2; //
let n3; //

function calcula(n1, n2, n3) { //Criando a função que está recebendo 3 parâmetros.
    let somar = (Number(n1) + Number(n2) + Number(n3)); //V com identificador tipo Number nos parâmetros.
    let dividir = somar / 3; //V que recebe somar e dividir por 3
    return (dividir.toFixed(1)); //Aqui, utilizando o return para retornar à função para que chamou.
}
console.log(calcula(7, 5, 5));
*/

/*
//3. Escreva um programa que verifique se um número é maior que 10 e exiba o resultado no console.
let n1 = 3;
let n2 = 5;

if (n1 >= n2) {
    console.log(`Primeiro número: ${n1} \n é Maior que o Segundo número: ${n2}`);
} else {
    console.log(`Segundo número: ${n2} \n é Maior que o Primeiro número: ${n1}`);

}
*/

/*
// 4. Escreva um programa que verifique se um número é positivo e exiba o resultado no console.
let n1 = 3;

if (n1 > 0) {
    console.log(n1 + " é positivo");
} else if (n1 < 0) {
    console.log(n1 + " é negativo")
}
*/

/*
//5. Escreva um programa que calcule a soma de dois números e exiba o resultado utilizando uma template
//string.Por exemplo, se os números forem 5 e 3, o programa deve exibir "A soma de 5 e 3 é igual a 8".
let n1 = 5;
let n2 = 6;
let resultado = n1 + n2;
console.log(`A soma de ${n1} e ${n2} é igual a ${resultado}`);
*/


//# Módulo Web
//1. Crie uma página HTML com um botão e um parágrafo.Escreva um programa que, ao clicar no botão, altere o
//texto do parágrafo para "Olá, mundo!" utilizando o método getElementById.
let input = document.querySelector("input");
input.remove();

let btn = document.querySelector("button");
let h1 = document.getElementById("paragraph");

btn.addEventListener("click", () => {
    h1.innerHTML = "Olá Mundo!";
})


/*
//2. Crie uma página HTML com vários elementos de âncora(<>). Escreva um programa que, ao clicar em um link,
//exiba um alerta com o texto do link utilizando o método getElementByTagName.
let links = document.getElementsByTagName("a");
for (let i = 0; i < links.length; i++) { //Utilizando o for para enumerar a quantidade de links (i)
    links[i].addEventListener("click", function (event) { //Com o links enumerados (links[i]) add o evento
        event.preventDefault();//Já na função com prenvetDefault no evento inpedimos, que o link seja aberto
        alert(links[i].textContent);//No alert colocamos links e sua qnt e com textContent mostra o texto
    });
}
*/

/*
//3. Crie uma página HTML com um botão e um parágrafo. Escreva um programa que, ao clicar no botão, altere o
//texto do parágrafo para "Olá, mundo!" utilizando o método **querySelector**.
document.getElementById("container").remove();

let h1 = document.getElementById("paragraph");
let btn = document.querySelector("button");
let h2 = document.createElement("h2");

btn.addEventListener("click", () => {

    h1.innerHTML = "Troca de texto"

    h2.textContent = "Olá Mundo !";
    h2.style.marginTop = "50px"; //add style no css
    h2.style.color = "red" //add style no css
    h2.style.fontSize = "32px"; //add style no css
    document.querySelector("div").appendChild(h2); //Utilizando querySelector(div) para pegar a div e
    //utilizando o appendChild() para adicionar o h2 na div
})
*/




//4. Crie uma página HTML com várias divs com a classe "item". Escreva um programa que altere o texto de
// todas as divs para "Item alterado" utilizando o método **querySelectorAll**.
/* 
let main = document.querySelector("main");
let button = document.createElement("button");
let itens = document.querySelectorAll(".item");
button.textContent = "Clique"
button.style.marginTop = "100px"
main.prepend(button);
button.addEventListener("click", () => {
    for (let i = 0; i < itens.length; i++) {
        itens[i].style.margin = "10px";
        itens[i].style.width = "auto";
        itens[i].textContent = "Item Alterado"
        itens[i].style.color = "red";
        itens[i].style.fontSize = "32px";
    }
})
*/

