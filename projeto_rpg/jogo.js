class Personagem  {

    constructor(nome, titulo, hp, mana, energia){

        this.nome = nome;
        this.hp = hp;
        this.mana = mana;
        this.energia = energia;
        this.titulo = titulo;

    }

    atacar(alvo,habilidade){

       if (this.mana >= habilidade.custo && this.energia >= habilidade.energia){

            alvo.hp -= habilidade.dano;

            if(habilidade.custo > 0){

                this.mana -= habilidade.custo;
                this.energia += 50;

            }
            if(habilidade.energia > 0){

                this.energia = 0;

            }

            return `${this.nome} usou ${habilidade.nome}`;




        }else{

            return `sem mana ou energia para usar ${habilidade.nome}`;

        }


    }

}

    class Habilidade {

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
let boss = new Personagem("Ze pilintra", "tinhoso", 100, 0, 50);

// Usar status 

document.getElementById("nome-hero").textContent = `${hero.nome}`;
document.getElementById("titulo-hero").textContent = `⚔️${hero.titulo}`;
document.getElementById("titulo-vilao").textContent = `${boss.titulo}`;
document.getElementById("nome-vilao").textContent = `${boss.nome}`;

let constructor = document.getElementById("controles");

const atualizarInterface = (mansagem) => {

document.getElementById("hp-hero").value = hero.hp;
document.getElementById("mp-hero").value = hero.mana;
document.getElementById("en-hero").value = hero.energia;

document.getElementById("hp-vilao").value = boss.hp;
document.getElementById("en-vilao").value = boss.energia;

}


let listaHabilidade = [

    new Habilidade(1, "attack", 4, 0, 0),
    new Habilidade(2, "skill", 8, 10, 0),
    new Habilidade(3, "utimate", 15, 0, 100)


];

listaHabilidade.forEach(hab => {

    let btn = document.createElement("button");
    btn.innerText = hab.nome;
    btn.classList.add("btn", "btn-warning");
    constructor.appendChild(btn);
    btn.onclick = () => {

        console.log(hab.nome)
        hero.atacar(boss, hab)
        boss.atacar(hero, hab)


        atualizarInterface();

    }

});


    

