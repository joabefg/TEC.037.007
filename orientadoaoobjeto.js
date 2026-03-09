class conta {
    constructor(tipo,titular,saldo){
        this.tipo= tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    mostrarextrato(){
        return `A conta ${this.tipo} do ${this.titular} tem ${this.saldo} reais`
        
    }
    depositar(valor){
        this.saldo = this.saldo + valor;
    }
}

let contaCorrente = new conta ("Corrente","João",10000);
let ContaPoupanca = new conta ("Poupança","Maria",50000)
console.log(contaCorrente.mostrarextrato());
contaCorrente.depositar(1500);
console.log(contaCorrente.mostrarextrato())