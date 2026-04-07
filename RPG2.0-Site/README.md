# RPG 2.0 - Documentação Central

## Visão Geral

RPG 2.0 é um jogo de RPG simples desenvolvido em JavaScript, HTML e CSS (usando Bootstrap 5), onde o jogador cria um herói personalizado e enfrenta um boss em combate por turnos. O projeto inclui funcionalidades como escolha de cenário via carrossel, sistema de combate com habilidades, barras de vida/mana/energia, e troca dinâmica de telas. É um projeto educacional para prática de conceitos de programação web.

### Objetivos do Projeto

- Demonstrar manipulação de DOM com JavaScript.
- Implementar orientação a objetos (classes `personagem` e `skill`).
- Integrar bibliotecas externas (Bootstrap para UI).
- Criar uma experiência interativa de jogo sem backend.

## Funcionalidades Principais

- **Cadastro de Personagem**: Formulário para inserir nome e título do herói.
- **Escolha de Cenário**: Carrossel com imagens para selecionar fundo do jogo e propriedades do boss.
- **Combate por Turnos**: Herói ataca com habilidades (attack, skill, ultimate); boss contra-ataca automaticamente.
- **Sistema de Atributos**: Vida (HP), Mana (MP), Energia (EN) com barras de progresso.
- **Interface Dinâmica**: Troca de telas, atualização em tempo real, logs de combate.

## Estrutura do Projeto

```
RPG2.0/
├── index.html          # Página principal (formulário + jogo)
├── script.js           # Lógica do jogo (classes, eventos, combate)
├── testes.html         # Página opcional para testes
├── info.md             # Esta documentação (central)
├── README_CENARIO.md   # Documentação específica da escolha de cenário
├── assets/             # Imagens e recursos
│   ├── City1.png       # Cenário urbano
│   ├── postapocalypse1.png  # Cenário pós-apocalipse ruínas
│   ├── postapocalypse4.png  # Cenário pós-apocalipse deserto
│   ├── heroina-raquelly.png # Imagem do herói
│   └── boss-luiza.png  # Imagem do boss
└── .vscode/            # Configurações do VS Code
```

- **index.html**: Estrutura HTML com Bootstrap, formulário de cadastro, carrossel de cenários, e interface do jogo.
- **script.js**: Contém classes, lógica de combate, eventos de formulário, e funções de atualização da tela.
- **assets/**: Recursos visuais para cenários e personagens.

## Como Jogar

1. **Acesse o Jogo**: Abra `index.html` em um navegador (Chrome, Firefox, etc.).
2. **Cadastro**: Preencha nome e título do herói no formulário.
3. **Escolha de Cenário**: Navegue no carrossel para selecionar o fundo (urbano ou pós-apocalíptico).
4. **Iniciar**: Clique em "Começar o jogo" para trocar para a tela de combate.
5. **Combate**: Use os botões de habilidades para atacar; o boss contra-ataca automaticamente após 1 segundo.
6. **Objetivo**: Reduza a vida do boss a zero (condições de vitória ainda não implementadas).

### Regras do Combate

- **Herói**: Ataca com habilidades que consomem mana/energia.
  - Attack: 4 de dano, sem custo.
  - Skill: 8 de dano, 10 de mana.
  - Ultimate: 15 de dano, 100 de energia.
- **Boss**: Ataca automaticamente, causando 15 de dano quando energia = 100, ou carrega energia (+50).
- Atributos se regeneram parcialmente após ataques.

## Detalhes Técnicos

### Classes e Objetos

- **Classe `personagem`**:
  - Propriedades: nome, titulo, hp, mp, en.
  - Métodos: `atacar(alvo, hab)` (ataca se tiver recursos), `boss_atacar(alvo)` (lógica específica do boss).

- **Classe `skill`**:
  - Propriedades: id, nome, dano, custo (mana), energia.
  - Exemplo: Lista de habilidades pré-definidas no código.

- **Objeto `cenarios`**: Mapeia imagens do carrossel a configurações (nome, bossNome, bossTitulo, vidaBoss, background).

### Lógica das Páginas

- **Duas Telas em Um Arquivo**: Usa `hidden` para alternar entre card de cadastro e card de jogo.
- **Evento de Submit**: Valida formulário, detecta cenário ativo, instancia personagens, aplica fundo, troca telas.
- **Atualização da Tela**: Função `atualizarTela()` sincroniza atributos com elementos HTML (barras de progresso, textos).

### Manipulação de DOM e CSS

- Acesso a atributos: `element.src` (imagens), `element.style` (CSS inline).
- Posicionamento: `offsetLeft`, `getComputedStyle()`.
- Animações: Keyframes no CSS (não implementado ainda).
- Temporizadores: `setTimeout` para ataques do boss.

## Instalação e Execução

### Pré-requisitos

- Navegador web moderno com suporte a ES6+.
- Bootstrap 5.3.0 (carregado via CDN no HTML).

### Passos

1. Clone ou baixe o projeto.
2. Abra `index.html` em um navegador.
3. Interaja com o jogo.

### Testes

- Use `testes.html` para testes isolados (se implementado).
- Verifique console do navegador para logs de depuração.

## TODOs e Extensões

- [x] Validação de formulário e instanciação de objetos.
- [x] Troca de telas (hidden/show).
- [x] Captura e exibição de dados do formulário.
- [x] Troca de fotos baseada na escolha.
- [x] Lógica de combate básica.
- [ ] Implementar condições de vitória/derrota.
- [ ] Adicionar animações e sons.
- [ ] Persistência com localStorage.
- [ ] Escolha de tipo de personagem (herói/boss).
- [ ] Mais cenários e habilidades dinâmicas.

## Pesquisa e Aprendizados

- Manipulação de strings em JS: `split()`, `replace()`, concatenação.
- Acesso a CSS via JS: `getComputedStyle()`, `offsetLeft`.
- Animações: Keyframes no CSS.
- Temporizadores: `setInterval`, `setTimeout`.
- Node Types: Como o navegador interpreta elementos HTML (DOM nodes).

## Contribuição

Este é um projeto educacional. Para sugestões, edite os arquivos e teste localmente. Consulte `README_CENARIO.md` para detalhes sobre a escolha de cenário.

Última atualização: Março 2026.
