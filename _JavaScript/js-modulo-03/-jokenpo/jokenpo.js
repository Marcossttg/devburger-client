
//mostra texto
let h3 = document.querySelector("h3");

//contador de pontos
let youPoints = document.querySelector("#points__player01");
let opponentPoints = document.querySelector("#points__player02");
let youPlayerNumber = 0;
let opponentPointsNumber = 0;

//pegar o click
const startGame = (yourChoice) => {
    startTheGame(yourChoice, secondPlayer())
}

//segundo jogador 
const secondPlayer = () => {

    let choices = ["rock", "paper", "scissors"]; //array com valores 
    let sortChoices = Math.floor(Math.random() * 3); //sortear valor

    return choices[sortChoices]
}

//comparação dos valor sorteado com os jogadores
const startTheGame = (youPlayer, machinePlayer) => {

    //comparação meus pontos x segundo jogador
    if (youPlayer === machinePlayer) { //qnd tiver empate
        h3.innerHTML = `Deu empate!`;

    } else if (//qnd eu ganhar
        (youPlayer === 'paper' && machinePlayer === 'rock') ||
        (youPlayer === 'rock' && machinePlayer === 'scissors') ||
        (youPlayer === 'scissors' && machinePlayer === 'paper')) {
        youPlayerNumber++; //conta pontos
        youPoints.innerHTML = youPlayerNumber; //mostra ponto
        h3.innerHTML = `Você ganhou!`;

    } else { //qnd eu perder
        opponentPointsNumber++;
        opponentPoints.innerHTML = opponentPointsNumber;
        h3.innerHTML = `Você perdeu!`;
    }

}
