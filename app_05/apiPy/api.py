from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # Permite que o React Native acesse a API

# "Banco de dados" fake
alunos = [
    {"id": 1, "nome": "Ana Silva", "media": 5.0},
    {"id": 2, "nome": "Bruno Costa", "media": 7.5},
    {"id": 3, "nome": "Carla Souza", "media": 6.5}
]

@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

@app.route('/alunos', methods=['POST'])
def salvar_aluno():
    dados = request.json
    nome = dados.get('nome')
    media = dados.get('media')
    id = len(alunos) + 1
    print("DADOS:")
    print(dados)
    print(id)
    print(nome)
    print(media)
    
    alunos.append({"id": id, "nome": nome, "media": media})
    return jsonify({"message": "Cadastrado!", "id": id}), 201

if __name__ == '__main__':
    app.run(port=3000, debug=True)