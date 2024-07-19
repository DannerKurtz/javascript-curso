// Primeiro tem que criar um novo elemento

var el = document.createElement('h1');

var texto = document.createTextNode("Outro título");

el.appendChild(texto);

console.log(el);

// Temo que selecionar o elemento que queremos substituir

var elASerSubstituido = document.querySelector(".title");

console.log(elASerSubstituido);

// por fim, temos que selecionar o elemento pai e usar o replace para substituir

var pai = elASerSubstituido.parentElement;

pai.replaceChild(el, elASerSubstituido);