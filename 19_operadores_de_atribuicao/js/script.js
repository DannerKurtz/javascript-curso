// temos os seguintes operadores de atribuição: +=, -=, *=, /=, que podemos executar calculos.


var i = 1;

console.log(i += 1);
console.log(i -= 1);
console.log(i *= 2);
console.log(i /= 2);

// Pode-se utilizar ele dentro de uma estrutura de repetição também
// Vamos imprimir uma tabuada somente utilizando eles;

var x = 0;
var y = 0;

while(x <= 10){
    console.log(`${x} x ${y} = ${y*x}`)
    y++;
    if(y > 10){
        x++;
        y = 0;
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
    }
}