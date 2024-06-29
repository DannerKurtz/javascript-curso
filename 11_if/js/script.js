// Nesse exemplo de if, else if, else, utilizaremos medias escolares de 0 a 10 onde 0-4 seria reprovado, 5-7 recuperação, 8-10 aprovado.

// Aqui teremos as três notas
var nota1 = 6;
var nota2 = 10;
var nota3 = 8;

// Aqui faremos a média
var media = (nota1 + nota2 + nota3) / 3;

// Iniciaremos as compareções para ver se ele será reprovado, entrará em recuperação ou se será aprovado

if (media < 5){ // O if ele necessita de uma comparação lógica onde o resultado será verdadeiro ou falso
    console.log(`Aluno reprovado média: ${media}`);
}

else if (media < 8){ // O else if segue os mesmo principios do if, porém ele é somente executado se o if a cima dele não for válido e se a condição dele for válida
    console.log(`Aluno de recuperação média: ${media}`);
}

else{ // Já o else ele atua se nenhuma condição for válida
    console.log(`Aluno aprovado média: ${media}`);
}