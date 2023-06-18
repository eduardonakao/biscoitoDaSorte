const biscoitoFechado = document.querySelector('#biscoitoFechado')
const page1 = document.querySelector('#page1')
const page2 = document.querySelector('#page2')
const button = document.querySelector('button')

function biscoitoFechadoClick() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}

biscoitoFechado.addEventListener('click', biscoitoFechadoClick)

function buttonResetClick() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}

button.addEventListener('click', buttonResetClick)