# Informações sobre o projeto

## Objetos

### Heroi:

- Nome
- Titulo
- Hp
- Mp
- En

Escolhe o tipo de ataque

### Boss:

- Nome
- Titulo
- Hp
- En

Tem um ataque pré definido

## Páginas

Duas páginas serão apresentadas para o usário final, **cadastro** e **rpg**.
Ambas as páginas estarão em um único arquivo html, retirando a necessidade de se ter que aplicar algum tipo de persistência entre duas páginas diferentes, afim de que os dados possam ser compartilhados.

### Lógica das páginas

Funcionará da seguinte forma:

- A página será constituida de 2 cards, sendo que um deles é basicamente um formulário, enquanto o outro é o jogo em si.
- Com isso, o jogo iniciará com apenas o card do formulário sendo visivel, enquanto o card do jogo em si terá seu display "_hidden_" (_escondido_). Isso permitirá com que os dados inseridos dentro do formulário possam ser acessados em qualquer local do código, sem haver a necessidade de ter que implementar algum tipo de persistência, como dito anteriormente.
- Após os dados do formulário serem enviados, eles serão utilizados para instanciar os objetos dos personagens, tanto herói quanto boss; e o cenário escolhido pelo usuário.
- Assim que os dados forem enviados, o card do formulário será ocultado enquanto o card do jogo finalmente ficará visivel, iniciando o jogo em si

### Cadastro

Página onde o usuário irá realizar a personalização do heroi e do boss. As seguintes opções poderão ser personalizadas, tanto no boss quanto no usuário.

- Nome do personagem
- Título do personagem
- Foto do ambiente
- Foto do personagem

Com base nessas informações, dois objetos serão criados: **Heroi** e **Boss**, que vão ser instanciados para a utilização dentro do jogo

### RPG

Onde o usuário irá realmente jogar, com o personagem que ele criou e com o cenário escolhido.

---

## Pesquisa

como acessar atributos do css e html por meio do javascript

- _tag_.src -> Imagens
- left, bottom, right, top -> De qualquer elemento -> por meio do css
- `_tag_.offSetLeft` & `GetComputedStyle(_tag_)._estilo_`
- manipulação de strings dentro do js -> importante (replace, concatenação, split...)
- Criar animações por meio de keyframes dentro do css
- `SetInterval` e `SetTimeout`

---

## Revisar depois

- [ ] Caso ocorra a implementação da possibilidade de ser um boss, será necessário mudar os campos com o nome **heroi** para **personagem**
- [ ] Realizar a validação dos campos do formulário e instanciar o objeto do personagem
- [ ] Fazer com que ao enviar o formulário a página "mude" (ativar o hidden do card do formulário e desativar o hidden do jogo)
- [ ] Pegar os dados que foram colocados no formulário assim que ele for enviado
- [ ] Mostrar os dados que foram colocados
- [ ] Implementar a troca de fotos com base na escolha do usuário
- [ ] Implementar a lógica do combate e condições de vitória

---

## Passo a passo atual

1 - Fazer com que ao enviar o formulário a página "mude" (ativar o hidden do card do formulário e desativar o hidden do jogo)
2 - Pegar os dados que foram colocados no formulário assim que ele for enviado
3 - Mostrar os dados que foram colocados
4 - Implementar a troca de fotos com base na escolha do usuário
5 - Implementar a lógica do combate e condições de vitória
