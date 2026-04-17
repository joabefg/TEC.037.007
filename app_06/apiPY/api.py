from flask import Flask, jsonify
from flask_cors import CORS

#Permite o React Native acessar a API
app = Flask(__name__)
CORS(app)

#Banco de dados Fake
alunos = [
    {"id": 1, "nome": "Ana Silva", "media": 5},
    {"id": 1, "nome": "Bruno Costa", "media": 7},
    {"id": 1, "nome": "Carla Souza", "media": 6},
]

# Rotas 
@app.route('/alunos', methods=['GET'])
def listar_alunos(): #retorna em json
    return jsonify(alunos)

#Iniciar a API
app.run(port=8080, debug=True) #Debug = para
