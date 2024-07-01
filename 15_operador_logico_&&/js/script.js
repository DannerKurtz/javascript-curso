// Para utilizrmos o and (&&) precisamos saber da seguinte condição:
// Esté operdaor ele segue a regra onde todas as comparações precisam ter um retorno true para que ele retorne true
/***
 * Exemplo:
 * True && True = True
 * True && False = False
 * False && True = False
 * False && False = False
 */

// Para dar um exemplo irei realizar um programa onde o estudande so recebera o um bônus caso a media seja maior que 8 e número de faltas seja menor que 4:
var media = 9;
var faltas = 3;

if(media > 8 && faltas < 4){
    console.log("Recebeu o Bônus");
}
else{
    console.log("Estudante não atende os requisitos para o bônus");
}