const vidaChaf = 300;
const mana = 100;
const vidaJogador = 100;

let sistemaPontuacao = 100;

let menu = "Ecolha as formas de Ataque"
        "1 - ataque basico (20 de dano ) /n"
        "2 - Usar as Skill (50 de dano ) /n"
        "3 - Usar o Utimate (150 de dano ) /n"
        "4 - Fugir da Luta (- 30 de Pontos) /n"

let escolher = prompt(menu);
let acao = printInt(escolher)

switch (acao){

    case 1:
        let vidaChefAtual = vidaChaf - 20;
        if (vidaChefAtual){

            console.log("Vida do chefe = " , vidaChefAtual )
        }

    case 2:
        let vidaChefAtualSkill = vidaChaf - 50;
        if (mana >= 50) {
            mana - 50;
            console.log("Vida do chefe = " , vidaChefAtualSkill )
            
        }else{

            let ataqueChef = vidaJogador - 20;

            console.log("Voce nao tem mana!")
             console.log("Ateque do chefe", "sua vida Atual", ataqueChef)
        }
    case 3:
        let vidaChefAtualUtimate = vidaChaf - 150;

        if (mana >= 150){

            console.log(vidaChefAtualUtimate)

        }else{

            let ataqueChef = vidaJogador - 20;
            console.log("Ateque do chefe", "sua vida Atual", ataqueChef)

        }
    case 4:

        let sistemaPontuacaoAtual = sistemaPontuacao - 30;
        console.log("Voce Saio da luta" , sistemaPontuacaoAtual )

        

}


