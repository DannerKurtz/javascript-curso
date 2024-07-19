// Com o mouseover podemos adicionar uma ação quando o mouse vai em cima do elemento

var titulo = document.querySelector('.title');

titulo.addEventListener("mouseover", function(){

    this.style.background = "yellow";

});

// E com o mouseout é quando o mouse sai do elemento

titulo.addEventListener("mouseout", function() {

    this.style.background = "blue";

});