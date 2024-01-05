
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
    
    console.log(mostra);
    
}
