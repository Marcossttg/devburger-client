
let input = document.querySelector("input");
let btnSearch = document.querySelector(".btn-grad");

let showTextReturn = document.getElementById("text__return");
let showSearchReturn = document.getElementById("search__return");

let contacts = [
    { name: 'Marcos', number: '(11)-92337-5944' },
    { name: 'Luiza', number: '(11)-97233-4567' },
    { name: 'Lula', number: '(11)-00171-0171' },
    { name: 'Bozo', number: '(11)-00171-1171' },
]

// com for in 
function searchList() {
    for (const key in contacts) {

        if (input.value.toLowerCase() === contacts[key].name.toLowerCase()) {
            showTextReturn.innerHTML = `Contato encontrado`;
            showSearchReturn.innerHTML = `Nome: ${contacts[key].name}</br>
            Tel: ${contacts[key].number}`;
            break;
        } else {
            showTextReturn.innerHTML = `Contato não encontrado`;
        }
    }
}

// com for normal
// function searchList() {

//     for (let i = 0; i < contacts.length; i++) {

//         if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
//             showTextReturn.innerHTML = `Contato encontrado`;
//             showSearchReturn.innerHTML = `Nome: ${contacts[i].name} </br>
//             Tel: ${contacts[i].number}`;
//             break;
//         } else {
//             showTextReturn.innerHTML = `Contato não encontrado`;
//         }
//     }
// }


// com for of
// function searchList() {

//     for (const searchContact of contacts) {
//         if (input.value.toLowerCase() === searchContact.name.toLowerCase()) {
//             showTextReturn.innerHTML = `Contato encontrado`;
//             showSearchReturn.innerHTML = `Nome: ${searchContact.name} </br>
//             Tel: ${searchContact.number}`;
//             break;
//         } else {
//             showTextReturn.innerHTML = `Contato não encontrado`;
//         }
//     }
// }
