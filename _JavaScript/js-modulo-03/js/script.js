
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

function searchList() {

    for (let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            showTextReturn.innerHTML = `Contato encontrado`;
            showSearchReturn.innerHTML = `Nome: ${contacts[i].name} </br>
            Tel: ${contacts[i].number}`;
            break;
        } else {
            showTextReturn.innerHTML = `Contato não encontrado`;
        }
    }
}
