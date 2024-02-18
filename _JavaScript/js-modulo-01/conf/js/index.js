
let convertBtn = document.querySelector(".convert__button");

/* select origin selector "convert from" */
let selectionConversionOrigin = document.querySelector("#selection__conversion--origin");

/* select final selector "convert to" */
let selectionConversionFinal = document.querySelector("#selection__conversion--final");

async function convertCurrency() {
    let inputCurrencyValue = document.querySelector("#converted__value--number");
    let resultCaptionValue = document.querySelector("#result__caption--value");
    let resultCaptionValueConverted = document.querySelector("#result__caption--value-converted");

    /* Api de cotação de moeda: awesomeapi.com.br */
    let currencyDay = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json());

    /* currency values */
    let real = currencyDay.BRL.high;
    let dolar = currencyDay.USD.high;
    let euro = currencyDay.EUR.high;
    let bitcoin = currencyDay.BTC.high;
    let libra = currencyDay.EGP.high;

    /* select origin selector "convert from" */
    if (selectionConversionOrigin.value == "R$") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((inputCurrencyValue.value / real));
    }

    if (selectionConversionOrigin.value == "US$") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue.value / dolar));
    }

    if (selectionConversionOrigin.value == "€") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("nl-be", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue.value / euro));
    }

    if (selectionConversionOrigin.value == "₿") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-DE", {
            style: "currency",
            currency: "BTC"
        }).format((inputCurrencyValue.value / bitcoin));
    }

    if (selectionConversionOrigin.value == "£") {
        resultCaptionValue.innerHTML = new Intl.NumberFormat("pt-UK", {
            style: "currency",
            currency: "EGP"
        }).format((inputCurrencyValue.value / libra));
    }

    /* select final selector "convert to" */
    if (selectionConversionFinal.value == "R$") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format((inputCurrencyValue.value / real));
    }

    if (selectionConversionFinal.value == "US$") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format((inputCurrencyValue.value / dolar));
    }

    if (selectionConversionFinal.value == "€") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("nl-be", {
            style: "currency",
            currency: "EUR"
        }).format((inputCurrencyValue.value / euro));
    }

    if (selectionConversionFinal.value == "₿") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-DE", {
            style: "currency",
            currency: "XBT"
        }).format((inputCurrencyValue.value / bitcoin));
    }

    if (selectionConversionFinal.value == "£") {
        resultCaptionValueConverted.innerHTML = new Intl.NumberFormat("pt-UK", {
            style: "currency",
            currency: "GBP"
        }).format((inputCurrencyValue.value / libra));
    }
}

/* change image and type of currency */
function showResultBefore() {
    let resultImgBefore = document.querySelector(".result__img--before");
    let resultCaptionBefore = document.querySelector(".result__caption--before");
    //

    if (selectionConversionOrigin.value == "R$") {
        resultImgBefore.src = "./assets/img/svg/brasil.svg";
        resultCaptionBefore.textContent = "Real";
    }

    if (selectionConversionOrigin.value == "US$") {
        resultImgBefore.src = "./assets/img/svg/eua.svg";
        resultCaptionBefore.textContent = "Dólar americano";
    }

    if (selectionConversionOrigin.value == "€") {
        resultImgBefore.src = "./assets/img/svg/euro.svg";
        resultCaptionBefore.textContent = "Euro";
    }

    if (selectionConversionOrigin.value == "₿") {
        resultImgBefore.src = "./assets/img/svg/bitcoin.svg";
        resultCaptionBefore.textContent = "Bitcoin";
    }

    if (selectionConversionOrigin.value == "£") {
        resultImgBefore.src = "./assets/img/svg/libra.svg";
        resultCaptionBefore.textContent = "Libra";
    }

    convertCurrency();
}

/* change image and type of currency */
function showResultAfter() {
    let resultImgAfter = document.querySelector("#result__img--after");
    let resultCaptionAfter = document.querySelector("#result__caption--after");

    if (selectionConversionFinal.value == "R$") {
        resultImgAfter.src = "./assets/img/svg/brasil.svg";
        resultCaptionAfter.textContent = "Real";
    }

    if (selectionConversionFinal.value == "US$") {
        resultImgAfter.src = "./assets/img/svg/eua.svg";
        resultCaptionAfter.textContent = "Dólar americano";
    }

    if (selectionConversionFinal.value == "€") {
        resultImgAfter.src = "./assets/img/svg/euro.svg";
        resultCaptionAfter.textContent = "Euro";
    }

    if (selectionConversionFinal.value == "₿") {
        resultImgAfter.src = "./assets/img/svg/bitcoin.svg";
        resultCaptionAfter.textContent = "Bitcoin";
    }

    if (selectionConversionFinal.value == "£") {
        resultImgAfter.src = "./assets/img/svg/libra.svg";
        resultCaptionAfter.textContent = "Libra";
    }

    convertCurrency();
}

selectionConversionOrigin.addEventListener("change", showResultBefore);
selectionConversionFinal.addEventListener("change", showResultAfter);
convertBtn.addEventListener("click", convertCurrency);
