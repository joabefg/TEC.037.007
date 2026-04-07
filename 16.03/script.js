/* Criando as entidades */
class personagem { //Personagem do jogo
    constructor(nome, titulo, vida, mana, energia) {
        this.nome = nome;
        this.titulo = titulo;
        this.vida = vida;
        this.mana = mana;
        this.energia = energia;
    }
    //Função de ataque dos personagens
    atacar(alvo, habilidade){};
}

class habilidade{ //Habilidades dos personagens
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}

const habilidades = [ //Array com as habilidades
    new habilidade(1, "ataque", 20, 0, 0),
    new habilidade(2, "skill", 30, 15, 0),
    new habilidade(3, "ultimate", 50, 0, 100)
];

//Instanciando os objetos
let heroi = new personagem("Raquelly", "Big lips", 100, 100, 0); //Objeto Heroi
let boss = new personagem("Luiza", "The little lips", 300, 0, 50); //Objeto boss

/**
 * Acessar:
 * botões
 * hp - Herói e Boss
 * mp - Herói e Boss
 * energia - Herói e Boss
 */

//Atributos do herói
const heroi_nome = document.getElementById('heroi-nome');
const heroi_hp = document.getElementById('heroi.hp');
const heroi_mp = document.getElementById('heroi-mp');
const heroi_en = document.getElementById('heroi-en');
const grupo_heroi_hp = document.getElementById('grupo-heroi-hp');
const grupo_heroi_mp = document.getElementById('grupo-heroi-mp');
const grupo_heroi_en = document.getElementById('grupo-heroi-en');
const desc_heroi = document.getElementById('desc-heroi');

//Ações do herói
const botao_skills = document.getElementById('ataque-skill');
const botao_ataque = document.getElementById('ataque-simples');
const botao_ultimate = document.getElementById('ataque-ultimate');

//Atributos do Boss
let boss_nome = document.getElementById('boss-nome');
let boss_hp = document.getElementById('boss-hp');
let boss_mp = document.getElementById('boss-mp');
let boss_en = document.getElementById('boss-en');
let grupo_boss_hp = document.getElementById('grupo-boss-hp');
let grupo_boss_mp = document.getElementById('grupo-boss-mp');
let grupo_boss_en = document.getElementById('grupo-boss-en');
let desc_boss = document.getElementById('desc_boss');

//Preenchendo os atributos do herói
heroi_nome.textContent = `${heroi.nome}`; //Adicionando nome
desc_heroi.textContent += `${heroi.titulo}`; //Adicionando titulo
heroi_mp.value = parseInt(heroi.mp); //Adicionando mp
heroi_hp = heroi.vida; //Adicionando hp
heroi_en = heroi.energia; //Adicionando energia

//Preenchendo os atributos do boss
boss_nome.textContent = `${boss.nome}`; //Adicionando nome
desc_boss.textContent += `${boss.titulo}`; //Adicionando titulo
boss_mp.value = parseInt(boss.mp); //Adicionando mp
boss_hp = boss.vida; //Adicionando hp
boss_en = boss.energia; //Adicionando energia

/* Lógica principal */