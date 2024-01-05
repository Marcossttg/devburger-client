
function drawNumber(){
    let n1 = Math.ceil(document.querySelector(".input__primary").value);
    let n2 = Math.floor(document.querySelector(".input__secondy").value);

    let btnDraw = document.querySelector("button");
    
    btnDraw.addEventListener.onclick

    if (n1 > n2) {
        alert("O primeiro valor não pode ser maior que o segundo valor.")
    }

    if (n1 == n2) {
        alert("Os valores não podem ser iguais.")
    } 

    mostra = Math.floor(Math.random() * (n2 - n1 + 1) + n1);

    alert(`O Número Sorteado:
        ${mostra}`)

    // result();
}

// function result() {
//     let lMain = document.querySelector(".l-main");
//     let addConteiner = document.querySelector(".container__wrap");

//     let newTitle = document.createElement("h2");
//     let newParagraf = document.createElement("p");
    
//     let newContentTitle = document.createTextNode("O Número Sorteado:");
//     let newContentParagraf = document.createTextNode(`${mostra}`);

//     newTitle.appendChild(newContentTitle);
//     newParagraf.appendChild(newContentParagraf);


//     lMain.insertBefore(newTitle, addConteiner);
//     lMain.insertBefore(newContentParagraf, addConteiner);

// }
