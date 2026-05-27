import mysql.connector
from mysql.connector import Error

def conectar_banco():
    """Estabelece a conexão com o banco de dados (Bloco 1)"""
    try:
        conexao = mysql.connector.connect(
            host="localhost",
            user="root",        # Orientar o aluno a mudar se o dele for diferente
            password="rootpassword",    # Orientar o aluno a colocar a senha dele
            database="parque_diversoes"
        )
        if conexao.is_connected():
            return conexao
    except Error as e:
        print(f"❌ Erro ao conectar ao banco de dados: {e}")
        return None

def cadastrar_atracao():
    """Insere uma nova atração no parque (Bloco 2)"""
    conexao = conectar_banco()
    if conexao:
        cursor = conexao.cursor()
        print("\n--- CADASTRO DE NOVA ATRAÇÃO ---")
        nome = input("Nome da atração: ")
        status = input("Status (Funcionando/Manutenção): ")

        comando_sql = "INSERT INTO atracoes (nome, status) VALUES (%s, %s)"
        dados = (nome, status)

        try:
            cursor.execute(comando_sql, dados)
            conexao.commit()  # O "botão salvar" do jogo
            print(f"🎰 {nome} cadastrado com sucesso!")
        except Error as e:
            print(f"❌ Erro ao cadastrar: {e}")
        finally:
            cursor.close()
            conexao.close()

def listar_atracoes_manutencao():
    """Lista apenas as atrações em manutenção (Bloco 3)"""
    conexao = conectar_banco()
    if conexao:
        cursor = conexao.cursor()
        comando_sql = "SELECT nome, status FROM atracoes WHERE status = 'Manutenção'"

        try:
            cursor.execute(comando_sql)
            resultados = cursor.fetchall()  # Puxa os peixes com a rede

            print("\n--- 🚨 PAINEL DE ALERTA: MANUTENÇÃO ---")
            if not resultados:
                print("✅ Nenhuma atração em manutenção no momento.")
            else:
                for atracao in resultados:
                    print(f"⚠️ ATRAÇÃO: {atracao[0]} | STATUS: {atracao[1]}")
        except Error as e:
            print(f"❌ Erro ao consultar: {e}")
        finally:
            cursor.close()
            conexao.close()

def emitir_ingresso():
    """Emite um ingresso na bilheteria (Bloco 4 - Desafio Final)"""
    conexao = conectar_banco()
    if conexao:
        cursor = conexao.cursor()
        print("\n--- 🎟️ EMISSÃO DE INGRESSO ---")
        visitante = input("Nome do Visitante: ")
        try:
            valor = float(input("Valor do Ingresso (R$): "))
        except ValueError:
            print("❌ Valor inválido! Use números.")
            return

        comando_sql = "INSERT INTO bilheteria (visitante, valor) VALUES (%s, %s)"
        dados = (visitante, valor)

        try:
            cursor.execute(comando_sql, dados)
            conexao.commit()
            print(f"🎟️ Ingresso emitido com sucesso para {visitante}!")
        except Error as e:
            print(f"❌ Erro ao emitir ingresso: {e}")
        finally:
            cursor.close()
            conexao.close()

def relatorio_bilheteria():
    """Lista ingressos e calcula o total acumulado (Bloco 4 - Desafio Final)"""
    conexao = conectar_banco()
    if conexao:
        cursor = conexao.cursor()
        comando_sql = "SELECT visitante, valor FROM bilheteria"

        try:
            cursor.execute(comando_sql)
            ingressos = cursor.fetchall()

            print("\n--- 📊 RELATÓRIO DA BILHETERIA ---")
            total_acumulado = 0.0
            
            if not ingressos:
                print("Nenhum ingresso vendido ainda.")
            else:
                for ing in ingressos:
                    print(f"Visitante: {ing[0]} | Pago: R$ {ing[1]:.2f}")
                    total_acumulado += float(ing[1])
                
                print("-" * 30)
                print(f"💰 TOTAL ARRECADADO: R$ {total_acumulado:.2f}")
        except Error as e:
            print(f"❌ Erro ao gerar relatório: {e}")
        finally:
            cursor.close()
            conexao.close()

# Loop Principal do Sistema (O Menu do Jogo)
while True:
    print("\n=======================================")
    print("      SISTEMA PARQUE DE DIVERSÕES      ")
    print("=======================================")
    print("1 - Cadastrar Nova Atração")
    print("2 - Ver Alertas de Manutenção")
    print("3 - Emitir Ingresso (Bilheteria)")
    print("4 - Relatório Financeiro (Bilheteria)")
    print("5 - Sair do Sistema")
    
    opcao = input("\nEscolha uma opção (1-5): ")

    if opcao == '1':
        cadastrar_atracao()
    elif opcao == '2':
        listar_atracoes_manutencao()
    elif opcao == '3':
        emitir_ingresso()
    elif opcao == '4':
        relatorio_bilheteria()
    elif opcao == '5':
        print("\nDesligando o sistema do parque... Até logo!")
        break
    else:
        print("❌ Opção inválida! Tente novamente.")