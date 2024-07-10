// Pode se usar o querySelector para acessar os itens do DOM, com o diferencial que ele pode ser bastante parecido com o CSS

// querySelector - irá apenas buscar 1 item 
var querySelector1 = document.querySelector('#paragrafo');
console.log(querySelector1);

// querySelectorAll - irá pegar todos os itens
var querySelectorAll1 = document.querySelectorAll('.lista-01 .lis');
console.log(querySelectorAll1.item(1));

for(var i = 0; i < querySelectorAll1.length; i++){
    console.log(querySelectorAll1.item(i));
}