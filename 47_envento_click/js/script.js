// Adicionando o evendo de click a um botão

var click = document.querySelector(".container button");
var contador = 1;

click.addEventListener("click", function(){
    console.log(`Botão foi clicado ${contador++}x`)
});

// Adicionando o evendo de click a outro elemento, e modificando o css dele

var titulo = document.querySelector(".title");

titulo.addEventListener("click", function(){

    this.style.display = "none";
});

// Também temos o click duplo

var paragrafo = document.querySelector("div p")

paragrafo.addEventListener("dblclick", function(){
    console.log("Isso foi um double click!")
})