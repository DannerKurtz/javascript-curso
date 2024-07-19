// Adicionando um elemento com appendChild

var container = document.querySelector(".container");

var el = document.createElement("div");

el.classList = "novo-elemento";

container.appendChild(el);


// Inserindo antes com inserBefore

var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector(".container .novo-elemento");

container.insertBefore(el2, el3);