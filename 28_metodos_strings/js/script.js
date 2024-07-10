// Podemos transformar textos em caixa baixa ou alta com o touppercase ou tolowercase

var frase1 = "Essa é uma frase simples";
var frase1ComCaixaAlta = frase1.toUpperCase();
// Como podemos ver ela teve seu texto alterado para maiúsculo;
console.log(frase1ComCaixaAlta);
// Agora vamos deixar todos com minúsculo
console.log(frase1ComCaixaAlta.toLocaleLowerCase());

// Com o trim podemos remover os espaços
var frase2 = "       espaços          ";
console.log(frase2);
console.log(frase2.trim());

// Já com o split, podemos transformar um texto em um array a partir de um caractere específico
console.log(frase1.split(" ")); // Será a partir do espaço

// Com o lastIndexOff pegaremos a partir do último
var frase3 = "um tigre dois tigre três tigre";

console.log(frase3.lastIndexOf("tigre"));