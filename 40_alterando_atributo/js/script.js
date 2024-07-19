// Primeiro selecionamos qual elemento queremos alterar o atributo 

var title = document.querySelector(".title");

title.setAttribute("id","title-id");

console.log(title)

// Podemos remover também um atributo
title.removeAttribute("class")