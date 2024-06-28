var nome = 'Danner'; // Aqui estamos usando as aspas simples para definir como string
var sobrenome = "Kurtz von Ende Peçanha"; // Aqui estamos usando aspas duplas para a definição da string

console.log(nome);
console.log(typeof nome);
console.log(sobrenome);
console.log(typeof sobrenome);

// Também podemos fazer a junção de duas string ou concatenação

var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);
console.log(typeof nomeCompleto);

// Também pode se incluir um texto direto no html

document.write('<br>Olá eu me chamo: ' + nomeCompleto);

// Algumas maneiras de utilizar a aspas duplas ou aspas simples nos textos

console.log('Olá "Mundo"');
console.log("'JavaScript'")