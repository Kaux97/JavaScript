const anonimo = document.querySelector('#anonimo')
const bt01 = document.querySelector('#inter')
const bt02 = document.querySelector('#spider')
const bt03 = document.querySelector('#it')
const bt04 = document.querySelector('#bat')
const texto = document.querySelector('#texto')

//eventos

bt01.addEventListener('click',inter)
bt02.addEventListener('click',spider)
bt03.addEventListener('click',it)
bt04.addEventListener('click',bat)

//funcoes

function inter(){
    anonimo.src='images/Interstellar_Filme.png'
    texto.textContent = 'Interestelar (no original Interstellar), lançado em 2014, é um filme de ficção científica dirigido por Christopher Nolan, escrito em parceria com o irmão Jonathan Nolan. O longa-metragem conta a complexa história de Cooper, um piloto da NASA que tem a difícil tarefa de salvar a espécie humana da extinção.'
}

function spider(){
    anonimo.src='images/spider boy.jpg'
    texto.textContent ='O filme mostra o momento em que Peter é picado pela aranha; sua adaptação e surpresa com os poderes; o desenvolvimento do sentimento de Peter por Mary Jane. É claro, não podíamos esquecer da cena emocional da morte do Tio Ben e o conflito com o Duende Verde, pai do seu melhor amigo.'
}

function it(){
    anonimo.src='images/769b6018b46a15f656900ed1afaf15a5.webp'
    texto.textContent ='Um grupo de crianças se une para investigar o misterioso desaparecimento de vários jovens em sua cidade. Eles descobrem que o culpado é Pennywise, um palhaço cruel que se alimenta de seus medos e cuja violência teve origem há vários séculos.'
}

function bat(){
    anonimo.src='images/images.jpg'
    texto.textContent = 'Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.'
}