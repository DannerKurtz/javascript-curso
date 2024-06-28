var objeto = {
    nome: 'Danner',
    idade: 22,
    ativo: true,
};

console.log(objeto);
console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.ativo);

objeto.nome = 'João';
objeto.idade = 15;
objeto.ativo = false;

console.log(objeto);
console.log(typeof objeto);
console.log(objeto.nome);
console.log(typeof objeto.nome);
console.log(objeto.idade);
console.log(typeof objeto.idade);
console.log(objeto.ativo);
console.log(typeof objeto.ativo);