# Implementação da Escolha de Cenário no RPG 2.0

## Visão Geral

Esta documentação descreve a implementação da funcionalidade de escolha de cenário no jogo RPG 2.0, baseada na imagem ativa do carrossel no formulário de cadastro. A lógica permite que o jogador selecione um cenário (urbano ou pós-apocalíptico) que afeta o fundo do jogo e as propriedades do boss inimigo.

## Estrutura da Lógica

### 1. Definição dos Cenários

Um objeto `cenarios` foi criado para mapear cada imagem do carrossel a um conjunto de propriedades:

```javascript
const cenarios = {
  "assets/City1.png": {
    nome: "Cidade Urbana",
    bossNome: "Luiza",
    bossTitulo: "A mordedora urbana",
    vidaBoss: 150,
    background: "assets/City1.png",
  },
  "assets/postapocalypse4.png": {
    nome: "Pós-Apocalipse Deserto",
    bossNome: "Luiza",
    bossTitulo: "A sobrevivente",
    vidaBoss: 200,
    background: "assets/postapocalypse4.png",
  },
  "assets/postapocalypse1.png": {
    nome: "Pós-Apocalipse Ruínas",
    bossNome: "Luiza",
    bossTitulo: "A rainha das ruínas",
    vidaBoss: 180,
    background: "assets/postapocalypse1.png",
  },
};
```

- **Chaves**: Caminhos relativos das imagens do carrossel.
- **Propriedades**:
  - `nome`: Descrição do cenário.
  - `bossNome` e `bossTitulo`: Nome e título do boss, adaptados ao cenário.
  - `vidaBoss`: Vida inicial do boss, variando por dificuldade.
  - `background`: Imagem de fundo aplicada ao jogo.

### 2. Detecção do Cenário Ativo

A função `getCenarioAtivo()` identifica a imagem ativa no carrossel:

```javascript
function getCenarioAtivo() {
  const carousel = document.getElementById("escolha-cenario");
  const activeItem = carousel.querySelector(".carousel-item.active img");
  if (activeItem) {
    const src = activeItem.src.split("/").pop(); // Extrai o nome do arquivo
    const fullSrc = "assets/" + src;
    return cenarios[fullSrc] || cenarios["assets/City1.png"]; // Fallback para o padrão
  }
  return cenarios["assets/City1.png"];
}
```

- Usa `querySelector` para encontrar o item ativo (com classe `.active`).
- Extrai o nome da imagem do `src` e mapeia para o objeto `cenarios`.
- Retorna o cenário correspondente ou um padrão se não encontrar.

### 3. Aplicação no Evento de Submit

No evento `submit` do formulário:

```javascript
formulario_cadastro.addEventListener("submit", (e) => {
  e.preventDefault();

  // Obter o cenário ativo
  const cenario = getCenarioAtivo();

  // Criar personagens com base no cenário
  heroi = new personagem(
    `${heroi_nome.value}`,
    `${heroi_titulo.value}`,
    VIDA_HEROI,
    MANA_HEROI,
    ENERGIA_HEROI,
  );
  boss = new personagem(
    cenario.bossNome,
    cenario.bossTitulo,
    cenario.vidaBoss,
    0,
    ENERGIA_BOSS,
  );

  // Aplicar background
  const tela = document.getElementById("tela");
  tela.style.backgroundImage = `url(${cenario.background})`;

  // Trocar telas
  card_cadastro.hidden = true;
  card_jogo.hidden = false;

  atualizarTela();
});
```

- Chama `getCenarioAtivo()` para obter o cenário selecionado.
- Instancia o boss com propriedades dinâmicas.
- Altera o `background-image` do elemento `#tela` (área de jogo).
- Prossegue com a troca de telas e atualização inicial.

### 4. Ajustes na Atualização da Tela

Na função `atualizarTela()`, o `max` da barra de vida do boss é definido dinamicamente:

```javascript
boss_vida.max = boss.hp; // Ajusta o máximo com base na vida inicial
boss_vida.value = boss.hp;
```

Isso garante que a barra reflita corretamente a vida máxima variável por cenário.

## Benefícios da Implementação

- **Modularidade**: Cenários são fáceis de adicionar/editar no objeto `cenarios`.
- **Dinamismo**: Fundo e propriedades do boss mudam automaticamente com a seleção.
- **Fallback Seguro**: Se a imagem não for encontrada, usa um cenário padrão.
- **Integração**: Funciona com o carrossel Bootstrap existente sem alterações no HTML.

## Como Testar

1. Abra `index.html` em um navegador.
2. Navegue no carrossel para selecionar um cenário.
3. Preencha o formulário e inicie o jogo.
4. Verifique o fundo alterado e as propriedades do boss na tela de jogo.

## Possíveis Extensões

- Adicionar mais imagens/cenários ao carrossel e ao objeto `cenarios`.
- Incluir variações em habilidades ou itens baseados no cenário.
- Salvar a escolha em localStorage para persistência entre sessões.
