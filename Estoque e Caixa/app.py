from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def read_file(filename):
    try:
        with open(filename, 'r') as file:
            return file.readlines()
    except FileNotFoundError:
        return []

def write_file(filename, data):
    with open(filename, 'a') as file:
        file.write(data + '\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_caixa', methods=['POST'])
def add_caixa():
    descricao = request.form['descricao']
    valor = request.form['valor']
    write_file('data/caixa.txt', f"{descricao}: R${valor}")
    return jsonify(success=True)

@app.route('/add_estoque', methods=['POST'])
def add_estoque():
    produto = request.form['produto']
    quantidade = request.form['quantidade']
    write_file('data/estoque.txt', f"{produto}: {quantidade} unidades")
    return jsonify(success=True)

@app.route('/load_data')
def load_data():
    caixa_data = read_file('data/caixa.txt')
    estoque_data = read_file('data/estoque.txt')
    return jsonify(caixa=caixa_data, estoque=estoque_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)


