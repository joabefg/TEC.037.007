class Personagem {
    constructor(nome, classe, vida, energia, defesa) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.energia = energia;
        this.defesa = defesa;
        this.defendendo = false;
    }
    atacar(alvo, habilidade) {
        if (this.energia >= habilidade.custo) {
            let dano = habilidade.dano;
            if (alvo.defendendo) {
                dano = Math.max(0, dano - alvo.defesa);
                console.log(`${alvo.nome} estava defendendo! Dano reduzido de ${habilidade.dano} para ${dano}.`);
                alvo.defendendo = false;
            }
            alvo.vida -= dano;
            console.log(`${this.nome} atacou ${alvo.nome} com ${habilidade.nome}, causando ${dano} de dano.`);
            if (habilidade.custo > 0) {
                this.energia -= habilidade.custo;
            }
        } else {
            console.log(`${this.nome} não tem energia suficiente para ${habilidade.nome}.`);
        }
    }
    defender() {
        this.defendendo = true;
        console.log(`${this.nome} está defendendo!`);
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
let heroi = new Personagem("link", "Guerreiro", 200, 10, 20);
let boss = new Personagem("majoras", "Vilão", 130, 30, 30);

// Função para atualizar a UI
function atualizarUI() {
    document.getElementById("hp-link").value = heroi.vida;
    document.getElementById("stamina-link").value = heroi.energia;
    document.getElementById("hp-Majoras").value = boss.vida;
    document.getElementById("stamina-Majoras").value = boss.energia;
}

// Função para turno do boss
function turnoBoss() {
    let chance = Math.random();
    if (chance < 0.33) {
        // Ataque padrão: 20 dano, 0 custo
        let habilidade = criarHabilidade(2, "Ataque Boss", 20, 0);
        boss.atacar(heroi, habilidade);
        console.log("Majoras atacou com ataque padrão!");
    } else if (chance < 0.66) {
        boss.defender();
        console.log("Majoras defendeu!");
    } else {
        // Habilidade especial: 40 dano, 0 custo
        let habilidade = criarHabilidade(4, "Habilidade Especial", 40, 0);
        boss.atacar(heroi, habilidade);
        console.log("Majoras usou habilidade especial!");
    }
    atualizarUI();
}

// Função para criar habilidades
function criarHabilidade(id, nome, dano, custo) {
    return new Habilidade(id, nome, dano, custo);
}

// Inicializar UI
atualizarUI();

document.getElementById("attack-btn").addEventListener("click", function() {
    let habilidade = criarHabilidade(1, "Ataque", 10, 0);
    heroi.atacar(boss, habilidade);
    atualizarUI();
    turnoBoss();
});

document.getElementById("defend-btn").addEventListener("click", function() {
    heroi.defender();
    atualizarUI();
    turnoBoss();
});

document.getElementById("ocarina-btn").addEventListener("click", function() {
    let habilidade = criarHabilidade(3, "Ocarina", 25, 2);
    heroi.atacar(boss, habilidade);
    atualizarUI();
    turnoBoss();
});

