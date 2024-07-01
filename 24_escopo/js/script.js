// As variáveis que não estão dentro de uma função são consideradas globais, já que elas podem ser acessada em qualquer parte do programa.

var x = 5;
var z = 20;
console.log(x, z);

function teste(){
    // Porém as variáveis que estão dentro das funções elas podem ser acessada somente dentro das funções, mas as de escolpos globais podem ser acessada dentro das funções.

    var y = 80;
    console.log(x, z, y);
}

function testando(){
    // Lembrando que podemos inicializar a variável com o mesmo nome de outra que está dentro da função, pois ela só é válida dentro da função;
    var y = 30;
    console.log(x, z, y);
}

// As variáveis definidas dentro do if, while ou for, são consideradas globais se estiverem fora da função.

teste();
testando();