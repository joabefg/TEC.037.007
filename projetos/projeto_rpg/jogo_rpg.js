class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
    }

    atacar(alvo, habilidade) {
        const requisito = habilidade.nome === "ultimate" ? "energia" : "mana";
        const recursoAtual = habilidade.nome === "ultimate" ? this.energia : this.mana;

        if (alvo.energia == 100) {
            this.hp -= 15;
            alvo.energia = 0;
        } else {
            alvo.energia += 50;
        }

        if (recursoAtual >= habilidade.custo + habilidade.energia) {
            alvo.hp -= habilidade.dano;

            if (habilidade.nome === "ultimate") {
                this.energia = 0;
            } else {
                this.mana -= habilidade.custo;
                this.energia += 50;
            }
            return `${this.nome} usou ${habilidade.nome}!`;
        }
        return `Sem ${requisito} suficiente para ${habilidade.nome}!`;
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

const hero = new Personagem("Aragon", "O Herói", 100, 100, 0);
const boss = new Personagem("The Master Mind", "Final Boss", 100, 1000, 100);
document.getElementById("name-hero").textContent = `${hero.nome}`;
document.getElementById("title-hero").textContent = `⚔️ ${hero.titulo}`;
document.getElementById("name-boss").textContent = `${boss.nome}`;
document.getElementById("title-boss").textContent = `👾 ${boss.titulo}`;

const listaHabilidades = [
    new Habilidade(1, "attack", 4, 0, 0),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "ultimate", 15, 0, 100)
];

const atualizarInterface = (texto) => {
    
    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("en-hero").value = hero.energia;

    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("en-boss").value = boss.energia;
    let temp = document.getElementById("log-primario").innerText;
    turno = document.getElementById("turno").innerText;
    document.getElementById("log-primario").innerText = `${turno}: ${texto}`;
    document.getElementById("log-secundario").innerText = temp;
    document.getElementById("turno").innerText = parseInt(turno) + 1;

    if(boss.hp <= 0) {
        document.getElementById("tela").innerHTML = "Você Venceu!";
    }
    if(hero.hp <= 0) {
        document.getElementById("tela").innerHTML = "Você Perdeu!";
    }
};

const container = document.getElementById("controles");
listaHabilidades.forEach(hab => {
    const btn = document.createElement("button");
    btn.innerText = hab.nome.toUpperCase();
    btn.classList.add("btn", "btn-dark")
    btn.onclick = () => {
        console.log(hero);
        console.log(boss);
        console.log(hab);
        const resultado = hero.atacar(boss, hab);
        atualizarInterface(resultado);
    };
    container.appendChild(btn);
});