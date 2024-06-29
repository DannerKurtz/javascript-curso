// Índices 00   01       02
var arr = [10, "Danner", true]; // Lembrando qeu o array pode conter diversos tipos de itens dentro dele.

console.log(arr);
console.log(typeof arr); // Ele terá o tipo de objeto.

// Índices  0  1  2  3  4
var arr2 = [1, 2, 3, 4, 5]; // Array contentdo somente Number.

console.log(arr2[2]); // Mostrando qual o conteúdo do índice 2.
console.log(typeof arr2[2]); // Mostrando o tipo do conteúdo do indice 2.

// Podemos alterar o item também não dependendo que ele seja do mesmo tipo.

arr2[1] = "Um texto qualquer"; // Colocando uma string no meio de um array que contém somente numbers.
console.log(arr2); // Mostrando que foi alterado.
console.log(arr2[1], typeof arr2[1]); // Mostrando o item e o tipo desse item.