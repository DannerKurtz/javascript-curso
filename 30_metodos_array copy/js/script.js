var arr = [1, 2, 3, 4, 5];

// Com o método splice, podemos adicionar um item no meio do array;
// primeiro número é o índice desse array, o segundo é se queremos remover, o terceiro é o valor que vai ser incluido.        
arr.splice(2, 0, 555);
console.log(arr)

// Da mesma forma que podemos adicionar, podemos remover, basta colocar o índice e no segundo número colocar o valor de 1.
arr.splice(2,1);
console.log(arr)

// Podemos achar o índice de um valor com o indexOf
console.log(arr.indexOf(3));

// Podemos converter o array em string também o com join.
console.log(arr.join("-"));

// Podemos também inverter a ordem do array
console.log(arr.reverse());