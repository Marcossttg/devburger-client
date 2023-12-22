
let convertBtn = document.querySelector(".convert__button");

/* select origin selector "convert from" */
let selectionConversionOrigin = document.querySelector("#selection__conversion--origin");

/* select final selector "convert to" */
let selectionConversionFinal = document.querySelector("#selection__conversion--final");

function convertCurrency() {
    let inputCurrencyValue = document.querySelector("#converted__value--number");
    let resultCaptionValue = document.querySelector("#result__caption--value");
    let resultCaptionValueConverted = document.querySelector("#result__caption--value-converted");

    /* currency values */
    let realToday = 1.00;
    let dolarToday = 4.88;
    let euroToday = 5.37;
    let bitcoinToday = 214.25918;
    let libraToday = 6.19;

    /* select origin selector "convert from" */
    if (selectionConversionOrigin.value == "R$") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((inputCurrencyValue.value / realToday));
    }

    if (selectionConversionOrigin.value == "US$") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue.value / dolarToday));
    }

    if (selectionConversionOrigin.value == "€") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("nl-be", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue.value / euroToday));
    }

    if (selectionConversionOrigin.value == "₿") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-DE", {
            style: "currency",
            currency: "XBT"
        }).format((inputCurrencyValue.value / bitcoinToday));
    }

    if (selectionConversionOrigin.value == "£") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-UK", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue.value / libraToday));
    }

/* select final selector "convert to" */
    if (selectionConversionFinal.value == "R$") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((inputCurrencyValue.value / realToday));
    }

    if (selectionConversionFinal.value == "US$") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue.value / dolarToday));
    }

    if (selectionConversionFinal.value == "€") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("nl-be", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue.value / euroToday));
    }

    if (selectionConversionFinal.value == "₿") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-DE", {
            style: "currency",
            currency: "XBT"
        }).format((inputCurrencyValue.value / bitcoinToday));
    }

    if (selectionConversionFinal.value == "£") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-UK", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue.value / libraToday));
    }    
}

/* change image and type of currency */
function showResultBefore() {
    let resultImgBefore = document.querySelector(".result__img--before");
    let resultCaptionBefore = document.querySelector(".result__caption--before");
    //

    if (selectionConversionOrigin.value == "R$"){
        resultImgBefore.src = "./assets/img/svg/brasil.svg";
        resultCaptionBefore.textContent = "Real";
    }

    if (selectionConversionOrigin.value == "US$"){
        resultImgBefore.src = "./assets/img/svg/eua.svg";
        resultCaptionBefore.textContent = "Dólar americano";
    }

    if (selectionConversionOrigin.value == "€"){
        resultImgBefore.src = "./assets/img/svg/euro.svg";
        resultCaptionBefore.textContent = "Euro";
    }

    if (selectionConversionOrigin.value == "₿"){
        resultImgBefore.src = "./assets/img/svg/bitcoin.svg";
        resultCaptionBefore.textContent = "Bitcoin";
    }

    if (selectionConversionOrigin.value == "£"){
        resultImgBefore.src = "./assets/img/svg/libra.svg";
        resultCaptionBefore.textContent = "Libra";
    }

    convertCurrency();
}

/* change image and type of currency */
function showResultAfter() {
     let resultImgAfter = document.querySelector("#result__img--after");
     let resultCaptionAfter = document.querySelector("#result__caption--after"); 
 
     if (selectionConversionFinal.value == "R$"){
         resultImgAfter.src = "./assets/img/svg/brasil.svg";
         resultCaptionAfter.textContent = "Real";
     }
 
     if (selectionConversionFinal.value == "US$"){
         resultImgAfter.src = "./assets/img/svg/eua.svg";
         resultCaptionAfter.textContent = "Dólar americano";
         console.log(resultImgAfter)
         console.log(resultCaptionAfter)
     }
 
     if (selectionConversionFinal.value == "€"){
         resultImgAfter.src = "./assets/img/svg/euro.svg";
         resultCaptionAfter.textContent = "Euro";
     }
 
     if (selectionConversionFinal.value == "₿"){
         resultImgAfter.src = "./assets/img/svg/bitcoin.svg";
         resultCaptionAfter.textContent = "Bitcoin";
     }
 
     if (selectionConversionFinal.value == "£"){
         resultImgAfter.src = "./assets/img/svg/libra.svg";
         resultCaptionAfter.textContent = "Libra";
     }
 
     convertCurrency(); 
}

selectionConversionOrigin.addEventListener("change", showResultBefore);
selectionConversionFinal.addEventListener("change", showResultAfter);
convertBtn.addEventListener("click",convertCurrency);
