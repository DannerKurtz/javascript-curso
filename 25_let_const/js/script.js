// Aqui definiremos uma let e const com o escopo global.

let x = 10;
const y = 60;


// Aqui nos podemos acessar elas da mesma forma que o var
if(true){
    console.log(x);
    console.log('isso é uma const', y)
}

// Prém seu diferencial se da que podemos definir outras dentro de um bloco de código, sem alterar a do escopo global.
if(true){
    let x = 50;
    const y = 800;
    console.log(x);
    console.log('isso é uma const', y);
}

// Aqui mostra que não houve alteração
console.log(x);
console.log('isso é uma const', y);