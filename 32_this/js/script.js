let banco = {
    saldo: 0,
    tipoDaConta: "",
    extrato: {
        depositos: [],
        saques: [],
    },
    sacar: function(valor){
        if(valor <= this.saldo && valor > 0){
            this.saldo -= valor;
            console.log("saque concluído");
            this.extrato.saques.push(valor);
        }
        else{
            console.log("saldo indisponível");
        }
    },
    depositar: function(valor){
        if(valor > 0){
            this.saldo += valor;
            console.log("saldo inserido com sucesso");
            this.extrato.depositos.push(valor);
        }
        else{
            console.log("valor não compatível");
        }
    },
    gerarExtrato: function(){
        console.log("tipo da conta: ", this.tipoDaConta);
        console.log("depositos da conta: ", this.extrato.depositos);
        console.log("saques da conta: ", this.extrato.saques);
    }
}

banco.tipoDaConta = "conta corrente";
banco.depositar(-80);
banco.sacar(1500);

banco.depositar(200);
banco.depositar(33);
banco.depositar(127);

banco.sacar(50);
banco.sacar(10);
banco.sacar(70);

banco.gerarExtrato();