/**
 * 1 - Implementar a troca de fotos com base na escolha do usuário
 */

//CONSTANTES GLOBAIS
let VIDA_HEROI = 100; //hp - heroi
let MANA_HEROI = 100; //mp - heroi
let ENERGIA_HEROI = 0; //en - heroi
let VIDA_BOSS = 150; //hp - boss
let ENERGIA_BOSS = 100; //en - boss

// Cenários disponíveis
const cenarios = {
    'assets/City1.png': {
        nome: 'Cidade Urbana',
        bossNome: 'Luiza',
        bossTitulo: 'A mordedora urbana',
        background: 'assets/City1.png'
    },
    'assets/postapocalypse4.png': {
        nome: 'Pós-Apocalipse Deserto',
        bossNome: 'Luiza',
        bossTitulo: 'A sobrevivente',
        background: 'assets/postapocalypse4.png'
    },
    'assets/postapocalypse1.png': {
        nome: 'Pós-Apocalipse Ruínas',
        bossNome: 'Luiza',
        bossTitulo: 'A rainha das ruínas',
        background: 'assets/postapocalypse1.png'
    }
};

// Função para detectar o cenário ativo no carrossel
function getCenarioAtivo() {
    const carousel = document.getElementById('escolha-cenario');
    const activeItem = carousel.querySelector('.carousel-item.active img');
    if (activeItem) {
        const src = activeItem.src.split('/').pop(); // Pega o nome do arquivo
        const fullSrc = 'assets/' + src;
        return cenarios[fullSrc] || cenarios['assets/City1.png']; // Padrão se não encontrar
    }
    return cenarios['assets/City1.png'];
}

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
    atacar(alvo, hab){
        if( this.mp >= hab.custo && this.en >= hab.energia ){
            alvo.hp -= hab.dano

            //Debito de mana e acrescimo de energia
            if (hab.custo > 0) {
                this.mp -= hab.custo;
                this.en += 50;
            }

            //Zerando a energia
            if (hab.energia > 0) {
                this.en = 0
                return
            };

            // Retornar mensagem
            return `${this.nome} usou ${hab.nome}`;
        } else {
            return `Sem mana ou energia para usar ${hab.nome}`;
        }
    }

    boss_atacar(alvo) {
        if(this.en == 100) {
            alvo.hp -= 15;
            this.en = 0;
            return `${boss.nome} usou sua habilidade`; //Mensagem do boss
        } else {
            this.en += 50;
            return `${boss.nome} carregou o ataque`; //Mensagem do boss
        }
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
let boss = new personagem();

formulario_cadastro.addEventListener("submit", (e)=>{
    e.preventDefault();

    // Obter o cenário ativo
    const cenario = getCenarioAtivo();

    //Preenchendo as informações do personagem
    heroi = new personagem(`${heroi_nome.value}`, `${heroi_titulo.value}`, VIDA_HEROI, MANA_HEROI, ENERGIA_HEROI);
    boss = new personagem(cenario.bossNome, cenario.bossTitulo, VIDA_BOSS, 0, ENERGIA_BOSS);

    // Aplicar o background do cenário no jogo
    const tela = document.getElementById('tela');
    tela.style.backgroundImage = `url(${cenario.background})`;

    //Processo de "troca de telas"
    card_cadastro.hidden = true;
    card_jogo.hidden = false;

    atualizarTela();
})

function atualizarTela(msg_heroi, msg_boss){
    /**
     * Chamar sempre que algo precisar ser atualizado na tela
    */

    const heroi_nome = document.getElementById("heroi-nome-display");
    const heroi_descricao = document.getElementById("heroi-desc-display");
    let heroi_vida = document.getElementById("heroi-vida-display");
    let heroi_energia = document.getElementById("heroi-energia-display");
    let heroi_mana = document.getElementById("heroi-mana-display");
   
    heroi_nome.innerText = `${heroi.nome}`;
    heroi_descricao.innerText = `${heroi.titulo}`;
    heroi_vida.value = heroi.hp;
    heroi_mana.value = heroi.mp;
    heroi_energia.value = heroi.en;
   
    const boss_nome = document.getElementById("boss-nome-display");
    const boss_descricao = document.getElementById("boss-desc-display");
    let boss_vida = document.getElementById("boss-vida-display");
    let boss_energia = document.getElementById("boss-energia-display");
   
    boss_nome.innerText = `${boss.nome}`;
    boss_descricao.innerText = ` ${boss.titulo}`;
    boss_vida.value = boss.hp;
    boss_energia.value = boss.en;


    if (heroi.hp <= 0) {

        card_jogo.hidden = true; //Escondendo a tela de jogo
        let texto = document.createElement("main"); //Criando um elemento do tipo main
        texto.innerHTML = `<h1>A heroina ${heroi.nome} perdeu para a ${boss.nome}</h1>` //Inserindo o conteúdo da tag
        texto.classList.add("card", "container", "py-5", "mt-5", "bg-danger") //inserindo classes de personalização na tag
        texto.style.textAlign = "center"; //Alinhando o texto
        document.body.appendChild(texto); //Inserindo a tag main no body

        setTimeout(()=>{
            //Processo de "troca de telas"
            card_cadastro.hidden = false;
            formulario_cadastro.reset();
            document.body.removeChild(texto);
        }, 3000)

    } else if (boss.hp <= 0){

        card_jogo.hidden = true;
        let texto = document.createElement("main"); //Criando um elemento do tipo main
        texto.innerHTML = "<h1>Você venceu</h1>" //Inserindo o conteúdo da tag
        texto.classList.add("card", "container", "py-5", "mt-5") //inserindo classes de personalização na tag
        texto.style.textAlign = "center"; //Alinhando o texto
        document.body.appendChild(texto); //Inserindo a tag main no body

        setTimeout(()=>{
            //Processo de "troca de telas"
            card_cadastro.hidden = false;
            formulario_cadastro.reset();
            document.body.removeChild(texto);
        }, 3000)
    }

    document.getElementById("log-hero").textContent = msg_heroi;
    document.getElementById("log-boss").textContent = msg_boss;


}

// Criação das habilidades e botões
let container = document.getElementById("button-box");
let listaHabilidades = [
    new skill(1, "attack", 4, 0, 0),
    new skill(2, "skill", 8, 10, 0),
    new skill(3, "ultimate", 15, 0, 100)
];

listaHabilidades.forEach(habilidade => {
    let btn = document.createElement("button");
    btn.innerText = `${habilidade.nome}`;
    btn.classList.add("btn", "btn-danger");
    container.appendChild(btn);

    btn.addEventListener('click', ()=>{
        let msg_heroi = heroi.atacar(boss, habilidade);
        let msg_boss = boss.boss_atacar(heroi);
        atualizarTela(msg_heroi, msg_boss);
    })
});