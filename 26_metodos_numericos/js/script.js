// Por mais que se converta como float ou int, ele não deixa de ser um number.

console.log(parseFloat('14'));
console.log(parseInt('10'));

console.log(typeof parseFloat('14'));
console.log(typeof parseInt('10'));

console.log(Number.MAX_VALUE); // Aqui extraimos o valor máximo do number
console.log(Number.MIN_VALUE); // Aqui extraimos o valor minímo do number