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

let container = document.getElementById("controles");
let attack = [
    new action("ATTACK", 10, 1),
    new action("SHOOT", 20, 2)
]

attack.forEach(atk => {
    let btn = document.createElement("button");
    btn.innerText = atk.nome;
    btn.classList.add("btn");
    container.appendChild(btn);
});