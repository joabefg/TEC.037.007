class Conta {


    constructor(tipo, titular, saldo) {
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(valor) {
        this.valor = this.valor + valor
    }
    mostrarExtrato() {
        return `A conta ${this.tipo} do ${this.titular} tem ${this.saldo}R$`
    }
}

let contaCorrente = new Conta("corrente", "João", 1000);
let contaPoupanca = new Conta("poupança", "Maria", 5000);
let contaCorrente2 = new Conta("corrente", "Victor", -500);


console.log(contaCorrente.mostrarExtrato())
contaCorrente. (1500);
console.log(contaCorrente.mostrarExtrato())