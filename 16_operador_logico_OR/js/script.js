// Para utilizrmos o OR (||) precisamos saber da seguinte condição:
// Esse operador segue a regra onde apenas uma condição seja verdadeira para que ele de como verdadeiro.
/***
 * Exemplo:
 * True && True = True
 * True && False = True
 * False && True = True
 * False && False = False
 */

// Para dar um exemplo irei realizar um programa onde o estudande so recebera o um bônus caso a media seja maior que 8 ou número de faltas seja igual a 0:

var media = 7;
var faltas = 0;

if(media > 8 || faltas === 0){
    console.log("Aluno apto a receber o Bônus");
}
else{
    console.log("Aluno não apto a receber o Bônus");
}