var arr = [1, 5, 3, 4, 7];
var contador = 0;

// Aqui iremos percorrer o array como o while:

while(contador < 5){
    console.log(arr[contador]);
    contador++;
}
contador = 0;

// Podemos realizar contas também
var somaDoArray = 0;
while (contador < 5){
    somaDoArray += arr[contador];
    contador++;
}

console.log(somaDoArray);