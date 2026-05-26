# dicionários
'''
Parece uma lista, mas ao invés de índices ele usa chaves para acessar os valores.
É dividido em chave: valor e pode conter vários tipos diferentes de dados
chaves são únicas, valores se repetem, se tiver mais de uma chave a última será a válida, pois agirá como alteração
'''
dicionario_vazio = {}
girias_br = {
     "gambiarra": "solução improvisada",
     "muvuca": "aglomeração de pessoas",
     "treta": "confusão"
}
alimento = dict(goiaba="fruta", abobora="legume", grao="feijão")
# add item
capitais = {
     "Brasil": "Brasília",
     "Rússia": "Moscou",
     "Itália": "Roma"}
capitais["China"] = "Xangai" # Xangai não é a capital?
# imprimir a lista inteira
print(capitais)
# alterar item
capitais["China"] = "Pequim"
# acessar um item específico
print(capitais["China"] )
# acessar item inexistente
# --print(capitais["França"])--
print(capitais.get("França"))
# obter chaves e valores
paises = capitais.keys()
cidades = capitais.values()
print(paises)
print(cidades)
# Deletar
'''
del capitais["Itália"]
print(capitais)
capitais.clear()
print(capitais)
'''
# iterar
for pais in capitais:
     print("Bem vindo a ",pais)
for item in capitais.items():
     print(item)
for pais,cidade in capitais.items():
     print(cidade," é a capital de ",pais)
# dicionário dentro de dicionário
npc = {
    "nome": "Ferreiro",
    "fala": "Precisa de espada?",
    "itens": {
        "espada": 100,
        "escudo": 80
    }
}
print(npc)
# Crie um dicionário contendo sua ficha de personagem, com nome, raça, classe, nível, arma, ouro
# O dicionário deve ter um subdicionário com seus atributos: vida, magia, defesa, ataque e sorte
# cada atributo terá um valor de 1 a 5 mas o total deve ser no máximo 20 pontos

# ATIVIDADE: 
     # 1. Professor faz uma lista de rpg, os alunos copiam e depois preenchem
     # 2. Professor faz um jogo de tabuleiro de acesso á dungeon e os alunos jogam
     # 3. Em um jogo de perguntas e respostas Ana fez 8 pontos, Pedro fez 6 e Lucas fez 10, 
     #    Crie um dicionário que contenha os nomes e os pontos de cada aluno.
# Lista de RPG
personagem = {
    "nome": "Arthos",
    "raca": "Humano",
    "classe": "Guerreiro",
    "nivel": 3,
    "idade": 25,
    "origem": "Soldado",
    "arma_principal": "Espada Longa",
    "ouro": 120,
    "inventario": ["Poção de Cura", "Tocha", "Corda"],
    "atributos": {
        "pontos_de_vida": 35,
        "classe_de_armadura": 16,
        "proeficiencia": 2,
        "percepcao": 4,
        "iniciativa": 3
    }
}
# Tabuleiro
mapa = {
    1: "monstro",
    2: "saída",
    3: "tesouro",
    4: "arma",
    5: "cura",
    6: "armadura"
}
historico = []

while True:
    sala = int(input("Escolha uma sala: "))

    if sala in mapa:
        print("Você encontrou:", mapa[sala])

        if mapa[sala] == "tesouro":
            print("VOCÊ VENCEU!")
            break
    else:
        print("Sala inexistente")

'''
pequenos fragmentos de código que fazem tarefas pequenas mas ninguém quer ficar
repetindo esse código, as funções permitem separar um pedaço de código para 
usar depois várias vezes
Podemos definir e depois chamar a função

Função é definida usando def
Precisa ter os parênteses mesmo se não for passar nenhum argumento
O conteúdo precisa ser identado e algo precisa existir mesmo que apenas um pass
'''
def faz_nada():
     pass
# chamar uma função
def emitir_som():
     print("quack")
emitir_som()
# retorno
def autenticar():
     return True
if autenticar():
     print('Usuário Logado')
else:
     print('Usuário ou senha incorretos')
# parâmetro
'''
Os valores passados ao chamar a função são chamados arguments (fora).
Esses valores são copiados para uma variável interna chamada parâmetro (dentro).
'''
def eco(som): # som é o parâmetro
     return som.upper() + som.lower()
print(eco('oi')) # oi é o argumento
# vamos fazer uma função que realmente faz algo
def cesta_fruta(cor):
     if cor == 'vermelho':
          return "morango"
     elif cor == 'verde':
          return "abacate"
     elif cor == 'amarelo':
          return "caju"
     else:
          return 'não tem fruta dessa cor na cesta'
msg = cesta_fruta('azul')
print(msg)

'''
OBJETOS E CLASSES
Linguagens de programação trabalham com:
variaveis primitivas: letras, números, v/f
conjunto de variáveis: arrays, listas, dicionários
objetos: variáveis mais complexas, que possuem atributos e comportamentos

Antes de fabricar um objeto nós precisamos de um mod para saber o que ele
vai conter, esse molde é chamado de classe, como se fosse uma receita
'''
# class Gato(): # se não for passar nenhum argumento podemos só usar sem parentesis
class Gato:
     pass
siames = Gato()
persa = Gato()
sphynx = Gato()
# atributos
siames.cor = 'cinza'
persa.cor = 'amarelo'
print(siames.cor)
print(persa.cor)
# --print(sphynx.cor)-- vai dar erro porque esse gato não possui cor, confuso não?
# inicialização
class Gatoo:
     def __init__(self): # init não é obrigatório como o construtor do javascript mas age parecido
          pass
class Gatooo:
     def __init__(self, cor):
          self.cor = cor
gato_preto = Gatooo('preto')
print(gato_preto.cor)
# Método, herança e sobrescrita
class Veiculo():
     def definicao(self):
          print("Eu sou um veículo!")
class Carro(Veiculo):
     # pass (usa o pass primeiro e depois mostra a sobrescrita)
     def definicao(self):
          print("Eu sou um veículo, mais especificamente um carro.")
v = Veiculo()
c = Carro()
v2 = Carro()
v.definicao()
c.definicao()
v2.definicao()