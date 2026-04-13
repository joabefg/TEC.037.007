from flask import Flask, jsonify
from flask_cors import CORS 

#Permite o React Native acessar o API
app = Flask(__name__)
CORS(app)

#Banco de dados Fake 
alunos=[
{"id":1,"nome":"Ana Luiza","media":5.0},
{"id":2,"nome":"Bruno Costa","media":7.5},
{"id":3,"nome":"Carla Souza","media":6.5},
]

# Rotas
@app.route('/alunos', methods=['GET'])
def listar_alunos():
    return jsonify(alunos)

# Iniciar API
app.run(port=3000, debug=True)

