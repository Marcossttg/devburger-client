const btnForEach = document.getElementById('mtForeach');
const list = document.querySelector("ul");
let listItens = '';

function btnShowAll() {

    menuOptions.forEach(product => {
        listItens += `
        <li>
        <img src=${product.src}>
        <p>${product.name} </p>
        <p class="valor__produto">${product.price}</p>
        </li>
        `
    });
    list.innerHTML = listItens
}

btnForEach.addEventListener("click", btnShowAll)

//Map
const btnMap = document.querySelector("#mtMap");

btnMap.addEventListener('click', () => {
    console.log(btnMap)
})
