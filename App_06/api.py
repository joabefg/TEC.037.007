from flask import Flask 
from flask_cors import CORS

#Permite acessar a API

app = Flask(__name__)
CORS(app)

#Banco de dados fake

alunos = [
    {"id": 1, "nome": "Ana da Silva", "media":5.0},
    {"id": 2, "nome": "Bruno Costa", "media":7.5},
    {"id": 3, "nome": "Carla Souza", "media":6.5}

    ]

#Rotas

@app.router('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

app.run(port=3000,debug=True)

# arthur_martins = "Bom dia Campeão!"

# print (arthur_martins) 