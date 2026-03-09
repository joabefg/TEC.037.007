class Conta {
    constructor(tipo, titular, saldo) {
        this.tipo = tipo;
        this.titular = titular;
        this.saldo = saldo;
    }
    mostrarExtrato() {
        return `Titular: ${this.titular}, Tipo: ${this.tipo}, Saldo: R$${this.saldo}`;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor;
    }
}

let contaCorrente = new Conta("corrente", "João", 10000);
let contaPoupanca = new Conta("poupança", "Maria", 50000);

console.log(contaCorrente.mostrarExtrato());
contaCorrente.depositar(5000);
console.log(contaCorrente.mostrarExtrato());