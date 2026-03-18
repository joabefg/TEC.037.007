class Personagem {
    constructor(nome, titulo, hp, mana, energia){
        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
        this.titulo = titulo;
    }
    atacar(alvo, habilidades){

    }
}
 class habilidade {

    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome;
        this.custo = custo;
        this.energia = energia;
        this.dano = dano;

        
    }
 }  
let hero = new Personagem("Ector", "O Herói", 100, 100, 0);
let boss =  new Personagem("Astrogildo", "Vilão", 100, 0, 50);

document.getElementById("nome-heroi").textContent = 
  `⚔️${hero.nome}`;
document.getElementById("titulo-heroi").textContent = 
  `${hero.titulo}`;

  document.getElementById("nome-boss").textContent = 
  `⛏️${boss.nome}`;
document.getElementById("titulo-boss").textContent = 
  `${boss.titulo}`;

  let container = document.getElementById("controles");
  let listaHabilidades = [
  new Habilidade(1, "ATTACK", 4, 0, 0),
  new Habilidade(2, "skill", 8, 10, 0),
  new Habilidade(3, "ULTIMATE", 15, 0, 100)
  ];
  listaHabilidades.array.forEach(hab => {
    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-warning")
    container.appendChild(btn);
  });
 