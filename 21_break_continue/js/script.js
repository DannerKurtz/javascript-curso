// Exemplo do break em execução

for(var i = 10; i > 0; i--){
    console.log(i);
    if(i === 5){
        console.log("Encerrou");
        break;
    }
}

console.log("Continua aqui")

// Exemplo do continue.

for(var i = 10; i > 0; i--){
    if(i === 8 || i === 4){
        console.log("Pulei aqui");
        continue;
    }
    console.log(i);
}

console.log("Encerrou");