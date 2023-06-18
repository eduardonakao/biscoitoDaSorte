const biscoitoFechado = document.querySelector('#biscoitoFechado')
const page1 = document.querySelector('#page1')
const page2 = document.querySelector('#page2')
const button = document.querySelector('button')
const span = document.querySelector('span')
const randomMessages = [
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
]

  

function biscoitoFechadoClick() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
    randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];
    span.innerText = randomMessage

}

biscoitoFechado.addEventListener('click', biscoitoFechadoClick)

function buttonResetClick() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
    
}



button.addEventListener('click', buttonResetClick)