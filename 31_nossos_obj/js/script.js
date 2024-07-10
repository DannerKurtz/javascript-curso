let carro = {
    pneus: 4,
    marca: "BMW",
    modelo: "X1",
    ligar: function(ligado){
        if(ligado){
            console.log(`ligando o carro.... ${this.marca}`)
        }else{
            console.log("Carro desligado!")
        }
    }
}
console.log(carro.marca, carro.modelo);
carro.ligar(true);