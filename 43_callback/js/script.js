//podemos chamar um callback em uma função atraves da chamada de callback ou cb

function mostrarResultado(resultado){
    console.log(`O resultado é: ${resultado}`);
}

function soma(a, b, callback){
    var somar = a + b;
    callback(somar)
}

function multiplicacao(a, b, cb){
    var multiplicar = a * b;
    cb(multiplicar);
}

soma(3, 5, mostrarResultado);
multiplicacao(8, 2, mostrarResultado);