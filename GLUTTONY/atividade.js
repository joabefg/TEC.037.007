//1
const hora = 14;
const saudacao = hora < 12 ? "Bom dia!" : hora < 18 ? "Boa tarde!" : "Boa noite!";
console.log(saudacao); 

//2
let resultado = 0;
for (let i = 1; i <=3; i++) {
    resultado += i;
}
console.log(resultado);

//3
const dobrar = n => n * 2;
console.log(dobrar(5) + dobrar(2));

//4
const frutas = ["maçã", "banana"]; 
frutas.push("laranja");
console.log(frutas.length);

//5
const numeros1 = new Set([1, 2, 3, 2]);
console.log(numeros1.size);

//6
// const elemento = document.getElementById("caixa");
// elemento.textContent = "Mundo";
// console.log(elemento.textContent);

//7
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}
const usuario = new Pessoa("Alice");
console.log(typeof usuario);

//8
const carro = {
    marca: "Toyota",
    ano: 2024
};
console.log(carro["marca"]);

//9
const numeros = [10, 15, 20, 25, 30];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0 && numeros[i] > 15) {
        soma += numeros[i];
    }
}
console.log(soma);

//10
const users = [
    { nome: "Rui", ativo: true },
    { nome: "Ana", ativo: false },
    { nome: "Bia", ativo: true }
];
const results = users
    .filter(u => u.ativo)
    .map(u => u.nome);
console.log(results);