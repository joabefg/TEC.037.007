from flask import Flask, jsonify
from flask_cors import CORS

#permite o React Native acessar a API
app = Flask(__name__)
CORS(app)

# Banco de dados Fake
alunos = [
    {"id": 1, "nome": "Ana Silva", "media": 5.0},
    {"id": 2, "nome": "Juliana", "media": 7.5},
    {"id": 3, "nome": "Lara", "media": 6.5},
]

# Rotas
@app.route ('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

## iniciar a API
app.run(port=3000, debug= True)

