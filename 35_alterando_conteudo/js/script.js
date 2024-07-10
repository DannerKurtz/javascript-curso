// para alterar o conteúdo podemos ter de duas formas 

// innerHtml
var metodo1 = document.querySelector('#paragrafo');
metodo1.innerHTML = "outro parágrafo";

// textContent
var metodo2 = document.querySelector('h1');
metodo2.textContent = "outro título";

var texto = "laranja pera mamão"
var query = document.querySelectorAll('.lista-01 .lis')

var textoSeparado = texto.split(" ");

for(var i = 0; i < textoSeparado.length; i++){
    query[i].textContent = textoSeparado[i];
}