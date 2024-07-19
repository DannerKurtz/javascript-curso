// Removendo itens do HTML

// Removendo os item que estão no elemento filho
var lista2 = document.querySelector(".lista-02");

var li = document.querySelector(".lista-02 li");

lista2.removeChild(li);

// Removendo os itens do próprio html

var lista1 = document.querySelector(".lista-01");

lista1.remove();

