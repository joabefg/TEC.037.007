class Personagem {
    constructor(nome, titulo, hp, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.hpMax = hp;
        this.mana = mana;
        this.manaMax = mana;
        this.energia = energia;
        this.energiaMax = energia;
    }
    atacar(alvo, habilidade) {
        if (!habilidade) return `${this.nome} não fez nada.`;

        if (this.mana >= habilidade.custo
            && this.energia >= habilidade.energia) {
            alvo.hp -= habilidade.dano;
            if (alvo.hp < 0) alvo.hp = 0;

            if (habilidade.custo > 0) {
                this.mana -= habilidade.custo;
                this.energia += 50;
                if (this.energia > this.energiaMax) this.energia = this.energiaMax;
            }

            if (habilidade.energia > 0) {
                this.energia -= habilidade.energia;
                if (this.energia < 0) this.energia = 0;
            }

            return `${this.nome} usou ${habilidade.nome}! (-${habilidade.dano} HP)`;

        } else {
            return `${this.nome} sem mana/energia para usar ${habilidade.nome}!`;
        }
    }
    boss_atacar(alvo){
        if(this.energia == 300){
            alvo.hp -= 15 ;
            this.energia = 0;
            return `Boss usou sua habilidade`
        } else {
            this.energia +=50;
            return `Boss carregou o ataque`
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

// 

let hero = new Personagem("Naruto Uzumaki", "O futuro Hokage", 400, 300, 800);
let boss = new Personagem("Sasuke Uchiha", "O Último Uchiha", 400, 300, 0);

console.log(boss.hp)
document.getElementById("nome-heroi").textContent = hero.nome;
document.getElementById("titulo-heroi").textContent = "🐅 " + hero.titulo;

document.getElementById("nome-boss").textContent = boss.nome;
document.getElementById("titulo-boss").textContent = "👁️‍🗨️ " + boss.titulo;

let constructorn = document.getElementById("Controles");
const turnos = ["Aguardar a Ação"];

const atualizarInterface = (msg_hero, msg_boss) => {
    //Barra herói
    document.getElementById("hp-hero").value = hero.hp;
    document.getElementById("mp-hero").value = hero.mana;
    document.getElementById("energia-hero").value = hero.energia;
    //Barra Boss
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("energia-boss").value = boss.energia;
    
    //turnos
    document.getElementById("log-hero").textContent = msg_hero;
    document.getElementById("log-boss").textContent = msg_boss;

    if (boss.hp <= 0) {
        document.getElementById("tela").innerHTML = "Naruto Uzumaki wins!"
    }
    if (hero.hp <= 0) {
        document.getElementById("tela").innerHTML = "Sasuke"
    }
}


let container = document.getElementById("controles");
container.innerHTML = "";

let listaHabilidades = [
    new Habilidade(1, "Attack", 4, 0, 0),
    new Habilidade(2, "Skill", 8, 10, 0),
    new Habilidade(3, "Ultimate", 15, 0, 100)
];



function desabilitarBotoes() {
    document.querySelectorAll("#controles button").forEach(btn => btn.disabled = true);
}

listaHabilidades.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerHTML = hab.nome;
    btn.classList.add("btn", "btn-dark")
    container.appendChild(btn);

    btn.onclick = () => {
        let msg_hero = hero.atacar(boss, hab);

       let msg_boss = boss.boss_atacar(hero)

        atualizarInterface(msg_hero, msg_boss);
    }

})