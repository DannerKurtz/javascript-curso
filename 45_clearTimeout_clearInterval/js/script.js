// Para que consiga-se utilizar o clear precisamos passar um parâmetro para ele.
// No caso do setTimeout precisa-se atribuir ele à uma variável

var x = 0;

var myTimer = setTimeout(function(){
    console.log(`Valor de x = ${x}`);
},1500);

x = 5;

if(x > 0){
    console.log(`Valor de x = ${x}`);
    clearTimeout(myTimer);
}

// Para fazermos o mesmo com o setInterval precisamos atribuir ele a uma variável e logo após chamar o clearInterval e passar a variável que definimos.

var contador = 0;

var myInterval = setInterval(function(){
    contador++;
    console.log(`Contador está no número ${contador}`);
}, 500);

setTimeout(function() {
    clearInterval(myInterval);
    console.log(`Contador parou no número ${contador}`);
}, 2500);