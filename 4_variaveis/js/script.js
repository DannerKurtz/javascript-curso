var exemploDeVariavel; // Por convenção utiliza-se o camelCase, para facilitar a leitura

console.log(exemploDeVariavel); // No momento por não ter sido declarada ela está como undefined (sem nenhuma definição de dado)

exemploDeVariavel = 12; // Aqui atribuimos o valor 12 nesta variável

console.log(exemploDeVariavel);

exemploDeVariavel = "Isso é um texto"; // Aqui além de alterar o valor dela, alteramos para um valor de um tipo diferente do que atribuimos anteriormente

console.log(exemploDeVariavel);

// Os nomes de variáveis não podem contém nenhum caracter especial, exeto $ _
var $exemploDeVariavel = "Está variável começa com '$'";
var _exemploDeVariavel = "Está variável começa com '_'";

console.log($exemploDeVariavel);
console.log(_exemploDeVariavel);

// E também não podem começar com número ex: 1exemploDeVariavel, mas pode se usar depois ou no meio (porém no meio não fica muito legivél a não ser que faça sentido)
var exemplo1DeVariavel = "Com o '1' no meio da variável";
var exemploDeVariavel1 = "Com o '1' no final da variável";

console.log(exemplo1DeVariavel);
console.log(exemploDeVariavel1);

// Não pode declarar variável com alguma palavra reservada do sistem como: var var; var if; var console;