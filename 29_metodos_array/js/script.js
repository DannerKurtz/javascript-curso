var arr = [1, 2, 3, 4, 5];

// Com o length conseguimos ver o tamanho do array
console.log(arr.length);

// Com o pop conseguimos remover um item do array
arr.pop();
console.log(arr);

// Com o push conseguimos adicionar um item ao array
arr.push(5)
console.log(arr);

// Com o unshift conseguimos adicionar um item na primeira posição desse array
arr.unshift("teste");
console.log(arr);

// Com o shift removemos o primeiro item do array
arr.shift();
console.log(arr);

// E para acessar o ultimo item, basta colocar o length - 1
console.log(arr[arr.length - 1]);