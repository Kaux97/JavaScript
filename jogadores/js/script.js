const anonimo = document.querySelector('#anonimo')
const bt01 = document.querySelector('#neymar')
const bt02 = document.querySelector('#kaka')
const bt03 = document.querySelector('#cr7')

//eventos

bt01.addEventListener('click',neymar)
bt02.addEventListener('click',kaka)
bt03.addEventListener('click',cr7)
anonimo.addEventListener('dbclick',anonimo)

//funcoes

function neymar(){
    anonimo.src='images/neymar2.jpg'
}

function kaka(){
    anonimo.src='images/images.jpg'
}

function cr7(){
    anonimo.src='images/download7.jpg'
}

