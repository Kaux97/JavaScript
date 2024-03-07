const lampada = document.querySelector('#lampada')
const bt01 = document.querySelector('#ligar')
const bt02 = document.querySelector('#desligar')
const bt03 = document.querySelector('#quebrar')


bt01.addEventListener('click',ligar)
bt02.addEventListener('click',desligar)
bt03.addEventListener('click',quebrar)


function ligar(){
    lampada.src='images/acesa.gif'
}

function desligar(){
    lampada.src='images/apagada.gif'
}

function quebrar(){
    lampada.src='images/quebrada.jpg'
}