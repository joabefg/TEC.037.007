class personagem {
    constructor(nome, hp, mp) {
        this.nome = nome;
        this.hp = hp;
        this.mp = mp;
    }
    atacar(alvo, habilidade) {
        
    }
}

class Action {
    constructor(id, nome, dano, custo) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
    }
}

let gabriel = new personagem("GABRIEL", 100, 5);
let minos = new personagem("MINOS PRIME", 130, 10);

document.getElementById("nome-gabriel").textContent = gabriel.nome;
document.getElementById("nome-minos").textContent = minos.nome;

let container = document.getElementById("controles");
let actions = [
    new Action(1, "ATTACK", 10, 1),
    new Action(2, "SHOOT", 20, 2)
];

actions.forEach(atk => {
    let btn = document.createElement("button");
    btn.innerText = atk.nome;
    btn.classList.add(atk.id === 1 ? "btn-attack" : "btn-shot");
    container.appendChild(btn);
});