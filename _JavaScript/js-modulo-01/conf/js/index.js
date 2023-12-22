
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
function showResult() {
    let resultImg = document.querySelector(".result__img--a");
    let resultCaption = document.getElementById("result__caption--a");

    if (selectionConversionOrigin.value == "R$"){
        resultImg.src = "./assets/img/svg/brasil.svg";
        resultCaption.textContent = "Real";
        console.log(resultImg)
    }

    if (selectionConversionOrigin.value == "US$"){
        resultImg.src = "./assets/img/svg/eua.svg";
        resultCaption.textContent = "Dólar americano";
        console.log(resultImg)
    }

    if (selectionConversionOrigin.value == "€"){
        resultImg.src = "./assets/img/svg/euro.svg";
        resultCaption.textContent = "Euro";
        console.log(resultImg)
    }
}

selectionConversionOrigin.addEventListener("change", showResult);
convertBtn.addEventListener("click",convertCurrency);

