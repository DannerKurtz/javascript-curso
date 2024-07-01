var listaDeFrutas = ['Mamão', 'Uva', 'Laranja', 'Pera'];
var listaUl = document.createElement('ul');
var body = document.getElementsByTagName('body');

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

for (var i = 0; i < listaDeFrutas.length; i++) {
    var listaFor = document.createElement('li');
    var textoDoLi = document.createTextNode(listaDeFrutas[i]);

    listaFor.appendChild(textoDoLi);

    listaNoBody[0].appendChild(listaFor);
}