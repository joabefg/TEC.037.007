class Personagem {
    constructor(nome, classe, vida, mana, defesa) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.energia = energia;
        this.defesa = defesa;
    }
    atacar (alvo, habilidade) {
    }
}
    class Habilidade {
    constructor(id,nome, dano, custo) {
    this.id = id;
    this.nome = nome;
    this.dano = dano;
    this.custo = custo;
    }
}
let heroi = new Personagem("link", "Guerreiro", 100, 50, 20);
let boss = new Personagem("majoras", "Vilão", 150, 80, 30);
document.getElementById("nome-heroi").textContent = 
 '{heroi.nome} ';
 document.getElementById("classe-heroi").textContent =
 '{heroi.classe} ';

 document.getElementById("btn-attack").addEventListener("click", function() {
    majoras.hp -= 10;
    hero.mp -= 1;
    document.getElementById("hp-majoras").value = majoras.hp;});

document.getElementById("btn-shot").addEventListener("click", function() {
    if (hero.mp >= 1) {
        majoras.hp -= 20;
        hero.mp -= 2;
        document.getElementById("hp-majoras").value = majoras.hp;
        document.getElementById("mp-link").value = hero.mp;
        }
    });

let container = document.getElementById("controles");
let attack = [
    new action("ATTACK", 10, 1),
    new action("DEFEND", 20, 2)
    
    
]

attack.forEach(atk => {
    let btn = document.createElement("button");
    btn.innerText = atk.nome;
    btn.classList.add("btn", "btn-warning");
    container.appendChild(btn);
});