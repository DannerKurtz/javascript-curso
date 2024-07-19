// O setTimeout ele funciona como se fosse delay

console.log("antes do setTimeout");

setTimeout(function() {
    console.log("durando o setTimeout")
}, 4000);

console.log("depois do setTimeout");

// Já o setInterval, iremos colocar um intervalo até que a função recebe uma parada

setInterval(function() {
    console.log("testando o intervalo de 2 segundos")
}, 2000);