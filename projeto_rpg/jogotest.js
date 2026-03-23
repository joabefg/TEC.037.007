class Personagem{
    constructor(nome, titulo, hp, mana, energia){
        this.nome= nome;
        this.titulo= titulo;
        this.hp= hp;
        this.mana= mana;
        this.energia= energia;
    }
    atacar(alvo, habilidade){
        //veriificar se tem mana e energia
        if(this.mana >= habilidade.custo
            && this.energia >= habilidade.energia){
                // dano no alvo
                alvo.hp -= habilidade.dano;
                // debitar mana
                if(habilidade.custo > 0){
                    this.mana -= habilidade.custo;
                    this.energia += 15;
                }
                // esvaziar energia
                if (habilidade.energia >0) {
                    this.energia = 0;
                }
                //retornar mensagem
                return `${this.nome} usou ${habilidade.nome}`;
                }else {
                    return ` Sem mana para usar ${habilidade.nome}`;
                }
    } 
    boss_atacar(alvo){
        if(this.energia == 100){
            alvo.hp -= 15;
            this.energia = 0 ;

        } else {
            this.energia += 50;
        }
    };
            

}

class Habilidade {
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome ;
        this.dano = dano; 
        this.custo = custo;
        this.energia = energia;
    }

}

//instaciar (criar) os objetos
let hero = new Personagem("Anabelle", "Herói", 100, 100, 0);
let boss = new Personagem("Caçador de almas", "Boss", 100, 0, 50);

document.getElementById("nome-heroi").textContent = `${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `🗡️ ${hero.titulo}`;

document.getElementById("nome-boss").textContent = `${boss.nome}`;
document.getElementById("titulo-boss").textContent = `💀🪄 ${boss.titulo}`;

const atualizarInterface = (mensagem)=> {
    console.log(hero.mana)
    document.getElementById("hp-heroi").value = hero.hp;
    document.getElementById("mp-heroi").value = hero.mana;
    document.getElementById("energia-heroi").value = hero.energia;
    document.getElementById("hp-boss").value = boss.hp;
    document.getElementById("energia-boss").value = boss.energia;

}


//criar habilidade e botões
let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "Ataque", 4, 0, 0),
    new Habilidade(2, "Skill", 8, 10, 0),
    new Habilidade(3, "Ultimate", 15, 0, 100)
];

listaHabilidades.forEach(hab=> {
    let btn = document.createElement("button");
    btn.innerText= hab.nome;
    btn.classList.add("btn");
    container.appendChild(btn);
    btn.onclick = () => {
        let mensagem = hero.atacar(boss, hab);
        atualizarInterface(mensagem);  
       boss.boss_atacar(hero);
    }
});


