var texto = "O rato roeu a roupa do rei de roma"

// Aqui pegamos o tamanho do texto
console.log(texto.length);

// Aqui buscamos pelo index da palavra roeu
console.log(texto.indexOf("roeu"));

// Aqui recortamos uma parte do texto, que é do índice 7 a 11
var umaParte = texto.slice(7, 11);

// Deixamos essa parte em toda de maísculo
umaParte = umaParte.toUpperCase();
console.log(umaParte);

// Aqui substituimos a palavra roeu pela ROEU
console.log(texto.replace('roeu', umaParte));