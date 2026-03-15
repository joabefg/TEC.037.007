// 1. OBJETOS: A "Ficha" de cada um
const heroi = {
    hp: 200,
    mana: 100,
    manaGasta: 0
};

const boss = {
    hp: 3000
};

// 2. DOM: Função para atualizar a tela (Sincroniza o JS com o HTML)
function atualizarTela() {
    document.getElementById("hp-boss").innerText = boss.hp;
    document.getElementById("hp-heroi").innerText = heroi.hp;
    document.getElementById("mana-heroi").innerText = heroi.mana;
}

// 3. FUNÇÕES DE LÓGICA (Reutilizando o que aprendemos)
function ataqueBoss() {
    if (boss.hp > 0 && Math.random() > 0.2) {
        let dano = 15;
        heroi.hp -= dano;
        alert("O Boss te golpeou!");
    }
}

// 4. FUNÇÃO PRINCIPAL (Chamada pelos botões)
function jogar(acao) {
    if (boss.hp <= 0) return alert("O Boss já morreu!");

    if (acao === 1) {
        boss.hp -= 20;
    } else if (acao === 2) {
        if (heroi.mana >= 30) {
            boss.hp -= 50;
            heroi.mana -= 30;
            heroi.manaGasta += 30;
        } else {
            alert("Sem mana!");
        }
    } else if (acao === 3) {
        if (heroi.manaGasta >= 50) {
            boss.hp -= 150;
            heroi.manaGasta = 0;
        } else {
            alert("Ultimate ainda carregando!");
        }
    }

    heroi.mana += 5; // Recuperação por turno
    ataqueBoss();
    atualizarTela(); // Fundamental: mostra o resultado para o aluno

    if (boss.hp <= 0) alert("Vitória!");
}