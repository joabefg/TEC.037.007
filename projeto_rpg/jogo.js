class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }
    atacar(alvo, habilidade) {
        // verificar se tem mana/energia
        if(this.mana >= habilidade.custo 
            && this.energia >= habilidade.energia) {
                // Dano no alvo
                alvo.hp -= habilidade.dano;
                // Debitar mana
                if (habilidade.custo > 0) {
                    this.mana -= habilidade.custo;
                    this.energia += 50;
                }
                // Esvaziar energia
                if (habilidade.energia > 0) {
                    this.energia = 0;
                }
                // Retornar mensagem
                return `${this.nome} usou ${habilidade.nome}`;
            } else {
                return `Sem mana ou energia 
                    para usar ${habilidade.nome}`;
            }
    }

    boss_atacar(alvo) {
        if(this.energia == 100) {
            alvo.hp -= 15;
            this.energia = 0;
            return `Boss usou sua habilidade`;
        } else {
            this.energia += 50;
            return `Boss carregou o ataque`;
        }
    }
}

class Habilidade {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

// Instanciar (CRIAR) os objetos
let hero = new Personagem("Aragon", "O Herói", 100, 100, 0);
let boss = 
    new Personagem("Radagon", "Elden Beast", 100, 0, 50);

// Preencher Status
document.getElementById("nome-heroi").textContent = 
`${hero.nome}`;
document.getElementById("titulo-heroi").textContent = 
`⚔️${hero.titulo}`;
document.getElementById("nome-boss").textContent = 
`${boss.nome}`;
document.getElementById("titulo-boss").textContent = 
`⚔️${boss.titulo}`;

// Criar array de turnos
const turnos = ["Aguardando Ação"];

// Atualizar as barras de vida
const atualizarInterface = (msg_hero, msg_boss) => {
    // barras herói
    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;
    // barras boss
    console.log(boss.energia)
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("en-boss").value = boss.energia;
    // turnos
    document.getElementById("log-hero").textContent = msg_hero;
    document.getElementById("log-boss").textContent = msg_boss;
    // mensagem de vitória/derrota
    if (boss.hp <= 0) {
        document.getElementById("tela").innerHTML = "Você venceu!";
    }
    if (hero.hp <= 0) {
        document.getElementById("tela").innerHTML = "Você perdeu!";
    }
}

// Criar habilidades e botões
let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "attack", 4, 0, 0),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "ultimate", 15, 0, 100)
];
listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn","btn-warning");
    container.appendChild(btn);
    btn.onclick = () => {
        let msg_hero = hero.atacar(boss, hab);
        let msg_boss = boss.boss_atacar(hero);
        atualizarInterface(msg_hero, msg_boss);
    }
});