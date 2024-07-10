// Podemos acessar o DOM por diferentes formas, pela tag, pelo id e pela classe.

// Acessando pela tag

var tag = document.getElementsByTagName('h1')[0];
console.log(tag);

// Acessando pelo id

var id = document.getElementById('paragrafo');
console.log(id);

// Acessanod pela classe
var classe1 = document.getElementsByClassName('lis');
console.log(classe1);
var classe2 = document.getElementsByClassName('lis')[1];
console.log(classe2);

// Podemos ver o tamanho também dos elementos, classes 

console.log(document.getElementsByTagName('h1').length);
console.log(document.getElementsByClassName('lis').length);
