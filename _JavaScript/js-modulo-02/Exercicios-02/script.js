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

/*
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


        // switch (input.value.toLowerCase()) {
        // case matutino:
        //     h2.innerText = "Bom Dia!";
        //     break;

        // case vespertino:
        //     h2.innerText = "Boa Tarde!";
        //     break;

        // case noturno:
        //     h2.innerText = "Boa Noite!";
        //     break;
        // default:
        //     h2.innerText = "Valor Inválido!";
        // }

    })
}
createElement()
*/

/*
// 8. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver um script que calculará os reajustes.

// Faça um script que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual:

//     salários até R$ 280,00 (incluindo) : aumento de 20%
//     salários entre R$ 280,00 e R$ 700,00 : aumento de 15%
//     salários entre R$ 700,00 e R$ 1500,00 : aumento de 10%
//     salários de R$ 1500,00 em diante : aumento de 5% Após o aumento ser realizado, informe na tela:
//     o salário antes do reajuste;
//     o percentual de aumento aplicado;
//     o valor do aumento;
//     o novo salário, após o aumento.

function createElement() {

    const h2 = document.querySelector("h2");
    h2.textContent = "Digite o seu salário";

    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.fontSize = '30px';
    input.type = Number;
    document.body.appendChild(input);

    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    const s1 = parseFloat(280.00).toFixed(2);
    const s2 = parseFloat(700.00).toFixed(2);
    const s3 = parseFloat(1500.00).toFixed(2);

    const au5 = 0.05; //igual a 5%
    const au10 = 0.10; //igual a 10%
    const au15 = 0.15;
    const au20 = 0.20;

    btn.addEventListener("click", () => {
        let salarioAtual = input.value
        let valorPor100;
        let percentual;
        let salarioNovo;

        if (Number(input.value) <= s1) {
            percentual = 20;

            valorPor100 = (salarioAtual * au20).toFixed(2);

            salarioNovo = (Number(s1) + Number(valorPor100)).toFixed(2);
        } else if (Number(input.value) <= s2) {
            percentual = 15;

            valorPor100 = (salarioAtual * au15).toFixed(2);

            salarioNovo = (Number(salarioAtual) + Number(valorPor100)).toFixed(2);

        } else if (Number(input.value) <= s3) {
            percentual = 10;

            salarioAtual = input.value;

            valorPor100 = (salarioAtual * au10).toFixed(2);

            salarioNovo = (Number(salarioAtual) + Number(valorPor100)).toFixed(2);

        } else {
            percentual = 5;

            salarioAtual = input.value;

            valorPor100 = (salarioAtual * au5).toFixed(2);

            salarioNovo = (Number(salarioAtual) + Number(valorPor100)).toFixed(2);

        }

        h2.innerText = `O salário antes do reajuste: R$ ${salarioAtual}
        O percentual de aumento aplicado: ${percentual}%
        O valor do aumento e de R$ ${valorPor100}
        O novo salário, após o aumento: R$ ${salarioNovo}`
        h2.style.fontSize = "22px"
    })
}
createElement();
*/

/*
// 9. Faça um script para o cálculo de uma folha de pagamento, sabendo que os descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os descontos. O script deverá pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.

//     Desconto do IR:
//     Salário Bruto até 900 (inclusive) - isento
//     Salário Bruto até 1500 (inclusive) - desconto de 5%
//     Salário Bruto até 2500 (inclusive) - desconto de 10%
//     Salário Bruto acima de 2500 - desconto de 20% Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora é 5 e a quantidade de hora é 220.

// Salário Bruto: (5 * 220)        : R$ 1100,00
// (-) IR (5%)                                : R$   55,00
// (-) INSS ( 10%)                       : R$  110,00
// FGTS (11%)                            : R$  121,00
// Total de descontos                : R$  165,00
// Salário Liquido                       : R$  935,00


function createElement() {
    const h2 = document.querySelector("h2");
    h2.innerHTML = "Qual o valor da sua hora e a quantidade de horas trabalhadas no mês?"

    //input valor hora
    const inputHora = document.createElement("input");
    inputHora.id = "inputHr";
    inputHora.style.marginTop = "20px";
    inputHora.style.paddingLeft = "5px";
    inputHora.placeholder = "Valor da hora?";
    inputHora.type = "Number";
    document.body.appendChild(inputHora);

    //input valor mês
    const inputMes = document.createElement("input");
    inputMes.id = "inputMes";
    inputMes.style.marginTop = "20px";
    inputMes.style.paddingLeft = "5px";
    inputMes.placeholder = "Quantas horas no mês?";
    inputMes.type = "Number";
    document.body.appendChild(inputMes);

    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        calculaFolha();
    })

    const s1 = parseFloat(900.00);
    const s2 = parseFloat(1500.00);
    const s3 = parseFloat(2500.00);

    let salarioHora;
    let salarioMes;

    function calculaFolha() {

        let salarioHora = inputHora.value;
        let salarioMes = inputMes.value;
        let porcentagem;
        let ir;
        let calcInss;
        let calcFgts;
        let inss = 10;
        let fgts = 11;
        let totalDescontos;
        let salarioLiquido;

        let salarioBruto = (salarioHora * salarioMes);

        if (salarioBruto <= s1) {
            porcentagem = 0;
            ir = ((porcentagem * salarioBruto) / 100);
            calcInss = (inss * salarioBruto) / 100;
            calcFgts = (fgts * salarioBruto) / 100;
            totalDescontos = (ir + calcInss);
            salarioLiquido = (salarioBruto - totalDescontos);

        } else if (salarioBruto > s1 && salarioBruto <= s2) {
            porcentagem = 5;
            ir = ((porcentagem * salarioBruto) / 100);
            calcInss = (inss * salarioBruto) / 100;
            calcFgts = (fgts * salarioBruto) / 100;
            totalDescontos = (ir + calcInss);
            salarioLiquido = (salarioBruto - totalDescontos);

        } else if (salarioBruto > s2 && salarioBruto <= s3) {
            porcentagem = 10;
            ir = ((porcentagem * salarioBruto) / 100);
            calcInss = (inss * salarioBruto) / 100;
            calcFgts = (fgts * salarioBruto) / 100;
            totalDescontos = (ir + calcInss);
            salarioLiquido = (salarioBruto - totalDescontos);

        } else if (salarioBruto > s3) {
            porcentagem = 20;
            ir = ((porcentagem * salarioBruto) / 100);
            calcInss = (inss * salarioBruto) / 100;
            calcFgts = (fgts * salarioBruto) / 100;
            totalDescontos = (ir + calcInss);
            salarioLiquido = (salarioBruto - totalDescontos);

        }

        h2.style.fontSize = "24px";
        h2.innerHTML = `Salário Bruto: R$ ${salarioBruto.toFixed(2)}<br>
        (-)IR (${porcentagem}%): R$ ${ir.toFixed(2)}<br>
        (-)INSS (${inss}%): R$ ${calcInss.toFixed(2)}<br>
        FGTS (${fgts}%): R$ ${calcFgts.toFixed(2)}<br>
        Total de descontos: R$ ${totalDescontos.toFixed(2)}<br>
        Salário Liquido: ${salarioLiquido.toFixed(2)}`;
    }
}
createElement();
*/

/*
// 10. Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

function createElement() {
    let h2 = document.querySelector("h2");
    h2.textContent = `Digite um dia da semana.`;

    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.type = Number;
    input.placeholder = "Digite um N/ de 1 a 7!";
    document.body.appendChild(input);

    const btn = document.createElement("button");
    const textBtn = document.createTextNode("Click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        const diaSemana = Number(input.value);

        if (input.value == 1) {
            h2.textContent = "Hoje é Domingo";
        } else if (input.value == 2) {
            h2.textContent = "Hoje é Segunda-feira.";
        } else if (input.value == 3) {
            h2.textContent = "Hoje é Terça-feira.";
        } else if (input.value == 4) {
            h2.textContent = "Hoje é Quarta-feira";
        } else if (input.value == 5) {
            h2.textContent = "Hoje é Quinta-feira";
        } else if (input.value == 6) {
            h2.textContent = "Hoje e Sexta-feira";
        } else if (input.value == 7) {
            h2.textContent = "Hoje é Sábado";
        } else {
            h2.textContent = "valor inválido."
        }

        // switch (diaSemana) {
        //     case 1:
        //         h2.textContent = "Hoje é Domingo";
        //         break;
        //     case 2:
        //         h2.textContent = "Hoje é Segunda-feira";
        //         break;
        //     case 3:
        //         h2.textContent = "Hoje é Terça-feira.";
        //         break;
        //     case 4:
        //         h2.textContent = "Hoje é Quarta-feira.";
        //         break;
        //     case 5:
        //         h2.textContent = "Hoje é Quinta-feira.";
        //         break;
        //     case 6:
        //         h2.textContent = "Hoje é Sexta-feira.";
        //         break;
        //     case 7:
        //         h2.textContent = "Hoje é Sábado";
        //         break;
        //     default:
        //         h2.textContent = "valor inválido."
        // }
    })
}
createElement();
*/

/*
// 11. Faça um script que lê as duas notas parciais obtidas por um aluno numa disciplina ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à tabela abaixo:

//       Média de Aproveitamento  Conceito
//       Entre 9.0 e 10.0                      A
//       Entre 7.5 e 9.0                        B
//       Entre 6.0 e 7.5                        C
//       Entre 4.0 e 6.0                        D
//       Entre 4.0 e zero                      E
//     O algoritmo deve mostrar numa janela de alert as notas, a média, o conceito correspondente e a mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito for D ou E.

function createElement() {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Digite 2 notas para calcular sua média!`;

    const input1 = document.createElement("input");
    input1.style.marginTop = "20px";
    input1.style.paddingLeft = "5px";
    input1.type = "Number";
    input1.placeholder = "Primeira Nota?"
    input1.id = "input1";
    document.body.appendChild(input1);

    const input2 = document.createElement("input");
    input2.style.marginTop = "20px";
    input2.style.paddingLeft = "5px";
    input2.type = "Number";
    input2.placeholder = "Segunda Nota?"
    input2.id = "input2";
    document.body.appendChild(input2);

    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        const n1 = input1.value;
        const n2 = input2.value;

        function calculaMedia() {
            let media = (Number(n1) + Number(n2)) / 2;
            return media;
        }

        function mostraMedia() {
            let media = calculaMedia();

            const mdAprovado1 = 9.0;
            const mdAprovado2 = 7.5;
            const mdAprovado3 = 6.0;

            const mdReprovado1 = 4.0;
            const mdReprovado2 = 0;

            const conceitoA = 'A';
            const conceitoB = 'B';
            const conceitoC = 'C';
            const conceitoD = 'D';
            const conceitoE = 'E';

            let conceito;

            function atualizarResultado(media, conceito, status) {
                h2.style.fontSize = "32px";
                h2.innerHTML = `Você foi: “${status}” <br>
                Sua Média é: ${media} <br> Sua Nota é: ${conceito}`;
            }

            if (media >= mdAprovado1 && media <= 10.0) {

                atualizarResultado(media, conceitoA, "APROVADO");

            } else if (media >= mdAprovado2 && media <= mdAprovado1) {

                atualizarResultado(media, conceitoB, "APROVADO");

            } else if (media >= mdAprovado3 && media <= mdAprovado2) {

                atualizarResultado(media, conceitoC, "APROVADO");

            } else if (media >= mdReprovado1 && media <= mdAprovado3) {

                atualizarResultado(media, conceitoD, "REPROVADO");

            } else if (media >= mdReprovado2 && media <= mdReprovado1) {

                atualizarResultado(media, conceitoE, "REPROVADO");
            }
        }
        mostraMedia()
    })
}
createElement();
*/

/*
correção da ia
function createElement() {
    let h2 = document.querySelector("h2");
    h2.innerHTML = `Digite 2 notas para calcular sua média!`;
    const input1 = criarInput("Primeira Nota?");
    const input2 = criarInput("Segunda Nota?");
    const btn = criarBotao();
    btn.addEventListener("click", () => {
        const n1 = input1.value;
        const n2 = input2.value;
        if (n1 === "" || n2 === "" || isNaN(n1) || isNaN(n2)) {
            alert("Por favor, insira duas notas válidas.");
            return;
        }
        const media = calculaMedia(n1, n2);
        mostraMedia(media);
    });
}
function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.style.paddingLeft = "5px";
    input.type = "Number";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}
function criarBotao() {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    return btn;
}
function calculaMedia(n1, n2) {
    return (Number(n1) + Number(n2)) / 2;
}
function mostraMedia(media) {
    const mdAprovado1 = 9.0;
    const mdAprovado2 = 7.5;
    const mdAprovado3 = 6.0;
    const mdReprovado1 = 4.0;
    const mdReprovado2 = 0;
    const conceitoA = 'A';
    const conceitoB = 'B';
    const conceitoC = 'C';
    const conceitoD = 'D';
    const conceitoE = 'E';
    let conceito;
    let status;
    if (media >= mdAprovado1 && media <= 10.0) {
        conceito = conceitoA;
        status = "APROVADO";
    } else if (media >= mdAprovado2 && media <= mdAprovado1) {
        conceito = conceitoB;
        status = "APROVADO";
    } else if (media >= mdAprovado3 && media <= mdAprovado2) {
        conceito = conceitoC;
        status = "APROVADO";
    } else if (media >= mdReprovado1 && media <= mdAprovado3) {
        conceito = conceitoD;
        status = "REPROVADO";
    } else if (media >= mdReprovado2 && media <= mdReprovado1) {
        conceito = conceitoE;
        status = "REPROVADO";
    }
    atualizarResultado(media, conceito, status);
}
function atualizarResultado(media, conceito, status) {
    let h2 = document.querySelector("h2");
    h2.style.fontSize = "32px";
    h2.innerHTML = `Você foi: “${status}” <br>
                    Sua Média é: ${media} <br> Sua Nota é: ${conceito}`;
}
createElement();
*/

/*
// 12. Faça um script que peça os 3 lados de um triângulo. O script deverá informar se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o mesmo é: equilátero, isósceles ou escaleno.

//     Dicas:
//     Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
//     Triângulo Equilátero: três lados iguais;
//     Triângulo Isósceles: quaisquer dois lados iguais;
//     Triângulo Escaleno: três lados diferentes;

function createElement() {
    let h2 = document.querySelector("h2");
    h2.textContent = `Digite 3 números para saber se é um triangulo.`

    const input = criarInput("Digite três número:");

    const btn = criarButton();

    btn.addEventListener("click", () => {
        let inputN = input.value;
        let valores = inputN.split(',');

        valores = valores.map(Number);

        let [a, b, c] = valores;

        if (valores.length !== 3) {
            h2.innerHTML = 'Por favor, insira exatamente três valores.';
            return;
        }

        if (a === b && b === c) {
            h2.innerHTML = 'Triângulo Equilátero';
        } else if (a === b || b === c || a === c) {
            h2.innerHTML = 'Triângulo Isósceles';
        } else {
            h2.innerHTML = 'Triângulo Escaleno';
        }
    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.style.paddingLeft = "5px";
    input.type = "text";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarButton() {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("Click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    return btn;
}

createElement();
*/

/*
// 13. Faça um script que calcule as raízes de uma equação do segundo grau, na forma ax² + bx + c. O script deverá pedir os valores de a, b e c e fazer os testes necessários.

function createElement() {
    let h2 = document.querySelector("h2");
    h2.textContent = "Digite três Números";

    const input = criarInput("Digite três números");

    const btn = criarBotao();

    btn.addEventListener("click", () => {
        let inputNumber = input.value;
        let valores = inputNumber.split(',');

        valores = valores.map(Number);

        let [a, b, c] = valores

        let formula = b * b - 4 * a * c;

        if (formula < 0) {
            h2.textContent = 'A equação não tem raízes reais';
        } else {
            let raiz1 = (-b + Math.sqrt(formula)) / (2 * a);
            let raiz2 = (-b - Math.sqrt(formula)) / (2 * a);

            h2.textContent = `As raízes da equação são ${raiz1.toFixed(2)} e ${raiz2.toFixed(2)}`;
        }

    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBotao() {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    return btn;
}
createElement();
*/

/*
// 14. Faça um script que peça um número correspondente a um determinado ano e em seguida informe se este ano é ou não bissexto.

function createElement() {
    let h2 = document.querySelector("h2");
    h2.textContent = "Digite um ano para saber se o ano é ou não bissexto.";

    const input = criarInput("Digite um ano:");

    const btn = criarBtn();

    btn.addEventListener("click", () => {
        let inputAno = input.value;

        if (inputAno % 4 == 0 && inputAno % 100 != 0 || inputAno % 400 == 0) {
            h2.textContent = `Este ano ${inputAno} é bissexto.
            `;
        } else {
            h2.textContent = `Este ano ${inputAno} não bissexto.
            `;
        }
    });
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBtn() {
    const btn = document.createElement("button")
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    return btn;
}
createElement();
*/

/*
// 15. Faça um script que peça uma data no formato dd/mm/aaaa e determine se a mesma é uma data válida.
function createElement() {
    let h2 = document.querySelector("h2");
    h2.textContent = "Digite uma data no formato dd/mm/aaaa.";
    const input = criarInput("Digite uma data:");
    const btn = criarBtn();

    btn.addEventListener("click", () => {
        const inputAno = input.value;
        let anoPartes = inputAno.split("/");

        let dia = parseInt(anoPartes[0], 10);
        let mes = parseInt(anoPartes[1], 10) - 1;
        let ano = parseInt(anoPartes[2], 10);

        let dataCompleta = new Date(ano, mes, dia);

        if (dataCompleta.getFullYear() == ano && dataCompleta.getMonth() == mes && dataCompleta.getDate() == dia) {
            h2.textContent = " É uma data válida.";
        } else {
            h2.textContent = " Não é uma data válida.";
        }
    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBtn() {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("click");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    return btn;
}
createElement();
*/

/*
// 16. Faça um script que peça um número inteiro e determine se ele é par ou ímpar.
// Dica: utilize o operador módulo (resto da divisão): %
function criarElemento() {
    const h2 = document.querySelector("h2");
    h2.textContent = "Digite um Número para saber se ele é par ou ímpar!";

    const input = criarInput("Digite um número?");

    const btn = criarBtn();

    btn.addEventListener("click", () => {
        const n = Number(input.value);
        if (n % 2 == 0) {
            h2.textContent = "Número " + n + " é par";
        } else {
            h2.textContent = "Número " + n + " é ímpar";
        }
    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBtn() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

criarElemento();
*/

/*
// 17. Faça um script que leia um número inteiro menor que 1000 e imprima a quantidade de centenas, dezenas e unidades do mesmo.
// Observando os termos no plural a colocação do "e", da vírgula entre outros. Exemplo:

// 326 = 3 centenas, 2 dezenas e 6 unidades
// 12 = 1 dezena e 2 unidades Testar com: 326, 300, 100, 320, 310,305, 301, 101, 311, 111, 25, 20, 10, 21, 11, 1, 7 e 16

function criarElemento() {
    const h2 = document.querySelector("h2");
    h2.textContent = "Digite um número entre 0 e 1000:";

    const input = criarInput("Digite seu número:");
    const btn = criarButton();

    let numerosteste = [
        326, 300, 100, 320, 310, 305, 301, 101,
        311, 111, 25, 20, 10, 21, 11, 1, 7, 16
    ]

    btn.addEventListener("click", () => {
        const input1 = input.value;
        let n = numerosteste.sort()

        for (let i = 0; i < n.length; i++) {
            if (input1 == n[i]) {
                let centenas = Math.floor(input1 / 100);
                let dezenas = Math.floor((input1 % 100) / 10);
                let unidades = input1 % 10;

                h2.textContent = input1 + " = " +
                    (centenas ? centenas + (centenas > 1 ? " centenas" : " centena") + ", " : "") +
                    (dezenas ? dezenas + (dezenas > 1 ? " dezenas" : " dezena") + " e " : "") +
                    (unidades ? unidades + (unidades > 1 ? " unidades" : " unidade") : "");
            }
        }
    })
}

function criarInput(placeholder) {
    const input = document.createElement('input');
    input.style.marginTop = '20px';
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarButton() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

criarElemento();
*/


/* // 18. Faça um script para um caixa eletrônico. O script deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. O script não deve se preocupar com a quantidade de notas existentes na máquina.

//  Exemplo: Para sacar a quantia de 256 reais, o script fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1;
//  Exemplo: Para sacar a quantia de 399 reais, o script fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/


/*
// 19.Faça um script que peça um número e informe se o número é inteiro ou decimal. Dica: utilize uma função de arredondamento.

function criarElemento() {
    const h2 = document.querySelector("h2");
    h2.textContent = "Digite um número"
    const input = criarInput("Ex: 123");
    const btn = criarBtn();

    btn.addEventListener("click", () => {
        let n = input.value;
        if (Math.round(n) == n) {
            h2.innerHTML = "O número " + n + " é inteiro.";
        } else {
            h2.innerHTML = "O número " + n + " é decimal.";
        }
    })
}

function criarBtn() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}
criarElemento();
*/

/*
// 20. Faça um script que leia 2 números e em seguida pergunte ao usuário qual operação ele deseja realizar. O resultado da operação deve ser acompanhado de uma frase que diga se o número é:

//     par ou ímpar;
//     positivo ou negativo;
//     inteiro ou decimal.
function criarElemento() {
    const h2 = document.querySelector("h2");
    h2.textContent = "Digite 2 números";

    const input = criarInput("Ex: 1, 2");

    const inputOperacao = criarInput("Ex: +, -, *, /")

    const btn = criarBtn();

    btn.addEventListener("click", () => {

        function pegandoValor() {
            const numeros = input.value.split(',');

            const n1 = numeros[0];
            const n2 = numeros[1];

            return { n1, n2 };
        }

        function criaOperacao() {
            const op = inputOperacao.value;
            return op
        }

        const numeros = pegandoValor();
        const op = criaOperacao()
        let resultado;
        if (op == "+") {
            resultado = Number(numeros.n1) + Number(numeros.n2);
        } else if (op == "-") {
            resultado = Number(numeros.n1) - Number(numeros.n2);
        } else if (op == "*") {
            resultado = Number(numeros.n1) * Number(numeros.n2);
        } else if (op == "/") {
            resultado = Number(numeros.n1) - Number(numeros.n2);
        }

        h2.innerHTML = `Você escolheu a operação de ${op} e o resultado é ${resultado}.<br>`;
        h2.innerHTML += `O número é ${resultado % 2 === 0 ? 'par' : 'ímpar'}.<br>`;
        h2.innerHTML += `O número é ${resultado > 0 ? 'positivo' : 'negativo'}.<br>`;
        h2.innerHTML += `O número é ${Number.isInteger(resultado) ? 'inteiro' : 'decimal'}.`;

    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBtn() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

criarElemento();
*/

/*
// 21. Faça um script que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:
//     "Telefonou para a vítima?"
//     "Esteve no local do crime?"
//     "Mora perto da vítima?"
//     "Devia para a vítima?"
//     "Já trabalhou com a vítima?" O script deve no final emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".

function criarElemento() {
    const h2 = document.querySelector("h2");
    h2.innerHTML = `Responda as perguntas com 's' para sim ou 'n' para não.<br>
    Vamos começar?`

    const input = criarInput("Ex: 's' ou 'n'");

    const btn = criarBtn();

    const perguntas = [
        "Telefonou para a vítima", "Esteve no local do crime",
        "Mora perto da vítima", "Devia para a vítima",
        "Já trabalhou com a vítima"
    ]

    let perguntasAtual = -1;
    let contagem = 0;

    btn.addEventListener("click", () => {
        const resposta = input.value.toLowerCase();
        if (resposta === 's') {
            contagem++;
        }
        perguntasAtual++;

        if (perguntasAtual < perguntas.length) {
            h2.innerHTML = perguntas[perguntasAtual];
            input.value = '';
        } else {
            let classificacao;
            if (contagem < 3) {
                classificacao = "Inocente";
            } else if (contagem === 3) {
                classificacao = "Suspeita";
            } else if (contagem >= 4 && contagem <= 5) {
                classificacao = "Cúmplice";
            } else if (contagem === 6) {
                classificacao = "Assassino";
            }
            h2.innerHTML = `Você é classificado como: ${classificacao}`;
        }

        function pegandoValor() {
            const resposta = input.value.split(',');
            console.log(resposta);

            const r1 = resposta[0];
            const r2 = resposta[1];

            console.log(r1);
            return { r1, r2: r2 || "" };
        }
        pegandoValor();
    })
}

function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

function criarBtn() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

criarElemento();
*/


// 22. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     Álcool: até 20 litros, desconto de 3% por litro
//     acima de 20 litros, desconto de 5% por litro

//     Gasolina:
//     até 20 litros, desconto de 4% por litro
//     acima de 20 litros, desconto de 6% por litro Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90.

// Função principal que cria os elementos na página e adiciona a funcionalidade do botão
function criarElemento() {
    // Seleciona o elemento h2 na página
    const h2 = document.querySelector("h2");
    // Define o conteúdo do h2
    h2.innerHTML = `Quantos litros e qual tipo de combustível você vai abastecer? <br>
    A-álcool, R$ 1,90 por litro. <br>
    G-gasolina, R$ 2,50 por litro.`;

    // Cria um campo de entrada para o usuário inserir a quantidade de litros e o tipo de combustível
    const input = criarInput("EX: 10L, G");
    // Cria um botão que o usuário pode clicar para calcular o preço
    const btn = criarBtn();

    // Adiciona um ouvinte de evento ao botão para que, quando o usuário clicar nele, a função seja executada
    btn.addEventListener("click", () => {

        // Função para pegar o valor do campo de entrada e dividir em litros e tipo de combustível
        function pegandoValor() {
            const inputValor = input.value.split(',');

            const litros = parseFloat(inputValor[0]);  //litros
            const tipo = inputValor[1];  //tipo

            return { litros, tipo };
        }

        // Define os produtos disponíveis e seus preços
        const produtos = [
            { tipo: "a", preco: 1.90 },  //tipo / preco
            { tipo: "g", preco: 2.50 }
        ];

        // Define os descontos disponíveis
        const descontos = [
            3, 4, 5, 6
        ];

        // Encontra o produto que corresponde ao tipo de combustível escolhido pelo usuário
        let findProduto = produtos.find((produto) => produto.tipo === pegandoValor().tipo);

        // Inicializa as variáveis que serão usadas para calcular o preço final, o tipo de combustível e o valor do desconto
        let precoFinal;
        let tipoConbustivel;
        let valorDesconto;
        // Verifica se o produto foi encontrado
        if (findProduto) {
            // Primeiro, pegamos a quantidade de litros que o cliente quer abastecer
            const litrosAbastecidos = pegandoValor().litros;

            // Em seguida, verificamos se a quantidade de litros é menor ou igual a 20
            if (litrosAbastecidos <= 20) {
                // Se for menor ou igual a 20, aplicamos o desconto correspondente
                if (findProduto.tipo === 'a') {
                    // Se o combustível for álcool, aplicamos um desconto de 3%
                    precoFinal = litrosAbastecidos * findProduto.preco * (1 - descontos[0] / 100);
                    tipoConbustivel = "Álcool";
                    valorDesconto = litrosAbastecidos * findProduto.preco - precoFinal;
                } else {
                    // Se o combustível for gasolina, aplicamos um desconto de 4%
                    precoFinal = litrosAbastecidos * findProduto.preco * (1 - descontos[1] / 100);
                    tipoConbustivel = "Gasolina";
                    valorDesconto = litrosAbastecidos * findProduto.preco - precoFinal;
                }
            } else {
                // Se a quantidade de litros for maior que 20, aplicamos um desconto maior
                if (findProduto.tipo === 'a') {
                    // Se o combustível for álcool, aplicamos um desconto de 5%
                    precoFinal = litrosAbastecidos * findProduto.preco * (1 - descontos[2] / 100);
                    tipoConbustivel = "Álcool";
                    valorDesconto = litrosAbastecidos * findProduto.preco - precoFinal;
                } else {
                    // Se o combustível for gasolina, aplicamos um desconto de 6%
                    precoFinal = litrosAbastecidos * findProduto.preco * (1 - descontos[3] / 100);
                    tipoConbustivel = "Gasolina";
                    valorDesconto = litrosAbastecidos * findProduto.preco - precoFinal;
                }
            }
            // Atualiza o conteúdo do h2 para mostrar o preço final, o tipo de combustível e o valor do desconto
            h2.innerHTML = `O valor a ser pago é R$ ${precoFinal.toFixed(2)}. <br>
            O tipo de combustível é ${tipoConbustivel}. <br>
            O valor do desconto foi de R$ ${valorDesconto.toFixed(2)}.`;
        }

    })

}

// Função para criar um campo de entrada
function criarInput(placeholder) {
    const input = document.createElement("input");
    input.style.marginTop = "20px";
    input.placeholder = placeholder;
    document.body.appendChild(input);
    return input;
}

// Função para criar um botão
function criarBtn() {
    const btn = document.createElement("button");
    const textBtn = document.createTextNode("click");
    btn.appendChild(textBtn);
    document.body.appendChild(btn);
    return btn;
}

// Chama a função principal para iniciar o programa
criarElemento();

/*
23. Uma fruteira está vendendo frutas com a seguinte tabela de preços:
                          Até 5 Kg                 Acima de 5 Kg
    Morango         R$ 2,50 por Kg          R$ 2,20 por Kg
    Maçã              R$ 1,80 por Kg          R$ 1,50 por Kg
    Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.


24. O Hipermercado Tabajara está com uma promoção de carnes que é imperdível. Confira:
                          Até 5 Kg               Acima de 5 Kg
    File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
    Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
    Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg
    Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente. Se compra for feita no cartão Tabajara o cliente receberá ainda um desconto de 5% sobre o total a compra. Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

*/