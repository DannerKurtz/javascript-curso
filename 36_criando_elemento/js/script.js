var criarElemento = document.createElement('h2');

var posElemento = document.querySelector('#paragrafo')

var texto = document.createTextNode("Título do parágrafo")

criarElemento.appendChild(texto);

posElemento.appendChild(criarElemento);