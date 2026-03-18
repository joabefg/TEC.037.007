class personagem {
    constructor(nome, hp, mp) {
        this.nome = nome;
        this.hp = hp;
        this.mp = mp;
    }
    atacar(alvo, habilidade) {
        
    }
}

class shot {
    constructor(nome, dano, custo) {
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
    }
}

let hero = new personagem("Gabriel", 100, 5);
let minos = new personagem("Minos Prime", 130, 10);

document.getElementById("btn-attack").addEventListener("click", function() {
    minos.hp -= 10;
    hero.mp -= 1;
    document.getElementById("hp-minos").value = minos.hp;});

document.getElementById("btn-shot").addEventListener("click", function() {
    if (hero.mp >= 1) {
        minos.hp -= 20;
        hero.mp -= 2;
        document.getElementById("hp-minos").value = minos.hp;
        document.getElementById("mp-gabriel").value = hero.mp;
        }
    });