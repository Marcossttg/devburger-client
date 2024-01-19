
//mostra texto
let h3 = document.querySelector("h3");

//contador de pontos
let youPoints = document.querySelector("#points__player01");
let opponentPoints = document.querySelector("#points__player02");
let youPlayerNumber = 0;
let opponentPointsNumber = 0;

/* Utilização de ENUM no javascript
Enum é um tipo de dados especial que permite definir um conjunto de valore nomeado, no javascript. Ele e um Objeto utilizado para definir um conjunto de valores nomeados, epeciais. Utilização de ENUM, permite Legibilidade do Código,
Manutenção simplificada, Evitar erros de digitação e ect.*/
//ENUM  
const ITENS_THE_GAME = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissor"
}

//pegar o click
const startGame = (yourChoice) => {
    startTheGame(yourChoice, secondPlayer())
}

//segundo jogador 
const secondPlayer = () => {

    let choices = [ITENS_THE_GAME.ROCK, ITENS_THE_GAME.PAPER, ITENS_THE_GAME.SCISSORS]; //array com valores 
    let sortChoices = Math.floor(Math.random() * 3); //sortear valor

    return choices[sortChoices]
}

//comparação dos valor sorteado com os jogadores
const startTheGame = (youPlayer, machinePlayer) => {

    //comparação meus pontos x segundo jogador
    if (youPlayer === machinePlayer) { //qnd tiver empate
        h3.innerHTML = `Deu empate!`;

    } else if (//qnd eu ganhar
        (youPlayer === ITENS_THE_GAME.PAPER && machinePlayer === ITENS_THE_GAME.ROCK) ||
        (youPlayer === ITENS_THE_GAME.ROCK && machinePlayer === ITENS_THE_GAME.SCISSORS) ||
        (youPlayer === ITENS_THE_GAME.SCISSORS && machinePlayer === ITENS_THE_GAME.PAPER)) {
        youPlayerNumber++; //conta pontos
        youPoints.innerHTML = youPlayerNumber; //mostra ponto
        h3.innerHTML = `Você ganhou!`;

    } else { //qnd eu perder
        opponentPointsNumber++;
        opponentPoints.innerHTML = opponentPointsNumber;
        h3.innerHTML = `Você perdeu!`;
    }

}
