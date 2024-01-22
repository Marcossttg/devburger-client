const btnForEach = document.getElementById('mtForeach');
const list = document.querySelector("ul");
let listItens = '';

function btnShowAll(newProductsArray) {
    listItens = '';

    newProductsArray.forEach((product) => {
        listItens += `
        <li>
        <img src=${product.src}>
        <p>${product.name} </p>
        <p class="valor__produto">${product.price.toFixed(2)}</p>
        </li>
        `
    });
    list.innerHTML = listItens;
}

btnForEach.addEventListener("click", () => btnShowAll(menuOptions));

//Map
const btnMap = document.querySelector("#mtMap");

btnMap.addEventListener('click', () => {
    const newPrices = menuOptions.map((product) => {
        return {
            name: product.name,
            price: product.price * 0.9,
            vegan: product.vegan,
            src: product.src
        }
        //tbm podendo usar o spread operator (...product)
        /*         const newPrices = menuOptions.map((product) => ({
                    ...product,
                    price: product.price * 0.9,
            
                })); */

    });
    btnShowAll(newPrices);
});

//Reduce

const btnReduceAll = document.getElementById("mtReduce");

function sumValueAll() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
    <li>
   
    <p>O Valor total dos produtos é:</p>
    <p class="valor__produto">R$ ${totalValue.toFixed(2)}</p>
    </li>
    `;
}

btnReduceAll.addEventListener("click", sumValueAll);