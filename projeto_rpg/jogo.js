class Personagem  {

    constructor(nome, titulo, hp, mana, energia){

        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
        this.titulo = titulo;

    }

    atacar(alvo,habilidade){

        this.alvo = alvo;
        this.habilidade = habilidade;


    }

}

    class habilidade {

    constructor(id, nome, dano, custo, energia){

        this.id = id;
        this.nome = nome;
        this.custo = custo;
        this.dano = dano;
        this.energia = energia;

    }

}
// criando um objeto 
let hero = new Personagem("carlos", "Heroi", 100, 100, 0);
let boos = new Personagem("Ze pilintra", "tinhoso", 100, 0, 50);

// Usar status 

document.getElementById("nome-heroi").textContent = `${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `⚔️${hero.titulo}`;
document.getElementById("titulo-vilao").textContent = `${boss.titulo}`;
document.getElementById("nome-vilao").textContent = `${boss.nome}`;

let constructor = document.getElementById("controles");

let listaHabilidade = [

    new habilidade(1, "attack", 4, 0, 0),
    new habilidade(2, "skill", 8, 10, 0),
    new habilidade(3, "utimate", 15, 0, 100)


];

listaHabilidade.forEach(hab => {

    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-warning");
    conteiner.appendChild(btn);

});


    
