class personagem {
    constructor(nome, hp, mp) {
        this.nome = nome;
        this.hp = hp;
        this.mp = mp;
        this.maxMp = mp; // Adiciona o máximo de MP
    }
    atacar(alvo, Action) {
        if (this.mp >= Action.custo) {
            alvo.hp -= Action.dano;
            if (Action.custo > 0) {
                this.mp -= Action.custo;
            }
            return `${this.nome} usou ${Action.nome} em ${alvo.nome}, causando ${Action.dano} de dano!`;
        } else {
            return `${this.nome} não tem MP suficiente para usar ${Action.nome}!`;
        }
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
const atualizarStatus = () => {
    document.getElementById("hp-gabriel").value = gabriel.hp;
    document.getElementById("mp-gabriel").value = gabriel.mp;
    document.getElementById("hp-minos").value = minos.hp;
    document.getElementById("mp-minos").value = minos.mp;
}

let container = document.getElementById("controles");
let Actions = [
    new Action(1, "ATTACK", 10, 1),
    new Action(2, "SHOOT", 20, 2)
];

Actions.forEach(atk => {
    let btn = document.createElement("button");
    btn.innerText = atk.nome;
    btn.classList.add(atk.id === 1 ? "btn-attack" : "btn-shot");
    container.appendChild(btn);
    btn.onclick = () => {
        let result = gabriel.atacar(minos, atk);
        minos.atacar(gabriel, atk);
        // Fim do turno: Gabriel ganha 1 de stamina (MP), sem ultrapassar o máximo
        if (gabriel.mp < gabriel.maxMp) {
            gabriel.mp += 1;
        }
        atualizarStatus(); // Atualiza sem mensagem
    }
});