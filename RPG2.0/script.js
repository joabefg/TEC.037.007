/**
 * 1 - Fazer com que ao enviar o formulário a página "mude" (ativar o hidden do card do formulário e desativar o hidden do jogo)
 * 2 - Pegar os dados que foram colocados no formulário assim que ele for enviado
 * 3 - Mostrar os dados que foram colocados
 * 4 - Implementar a troca de fotos com base na escolha do usuário
 * 5 - Implementar a lógica do combate e condições de vitória
 */


//CONSTANTES GLOBAIS
const VIDA_HEROI = 100; //hp - heroi
const MANA_HEROI = 100; //mp - heroi
const ENERGIA_HEROI = 100; //en - heroi
const VIDA_BOSS = 300; //hp - boss
const ENERGIA_BOSS = 100; //en - boss

//Criando classes do jogo

class personagem {
    constructor(nome, titulo, hp, mp, en) {
        this.nome = nome;
        this.titulo = titulo;
        this.hp = hp;
        this.mp = mp;
        this.en = en;
    }

    //Função de ataque
    atacar(alvo, skill){
        //Implementar lógica
    }
}

class skill {
    constructor(id, nome, dano, custo, energia) {
        this.id = id;
        this.nome = nome;
        this.dano = dano;
        this.custo = custo;
        this.energia = energia;
    }
}


//Campos do formulário
const card_cadastro = document.getElementById("card-cadastro");
const formulario_cadastro = document.getElementById("formulario-cadastro");
let heroi_nome = document.getElementById("heroi-nome");
let heroi_titulo = document.getElementById("heroi-titulo");
//IMPLEMENTAR ESCOLHA DE PERSONAGEM

//Campos do jogo
const card_jogo = document.getElementById("card-jogo");

//Instanciando os personagens
let heroi = new personagem(); //Objeto vazio para que possa ser possível usá-lo em todo o código
let boss = new personagem("Luiza");

formulario_cadastro.addEventListener("submit", (e)=>{
    e.preventDefault();

    console.log(heroi_nome.value);
    console.log(heroi_titulo.value);

    //Preenchendo as informações do personagem
    heroi = new personagem(`${heroi_nome.value}`, `${heroi_titulo.value}`, VIDA_HEROI, MANA_HEROI, ENERGIA_HEROI);

    //Processo de "troca de telas"
    card_cadastro.hidden = true;
    card_jogo.hidden = false;
})


/**
 * Pegar na tela jogo: heroi e boss
 * - nome
 * - vida
 * - mana
 * - energia
 * - titulo
 */

console.log(personagem)