document.getElementById('caixaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const descricao = document.getElementById('descricao').value;
    const valor = document.getElementById('valor').value;

    fetch('/add_caixa', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'descricao': descricao,
            'valor': valor,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadData();
        }
    });

    document.getElementById('caixaForm').reset();
});

document.getElementById('estoqueForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = document.getElementById('produto').value;
    const quantidade = document.getElementById('quantidade').value;

    fetch('/add_estoque', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'produto': produto,
            'quantidade': quantidade,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            loadData();
        }
    });

    document.getElementById('estoqueForm').reset();
});

function loadData() {
    fetch('/load_data')
    .then(response => response.json())
    .then(data => {
        const caixaList = document.getElementById('caixaList');
        caixaList.innerHTML = '';
        data.caixa.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            caixaList.appendChild(listItem);
        });

        const estoqueList = document.getElementById('estoqueList');
        estoqueList.innerHTML = '';
        data.estoque.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            estoqueList.appendChild(listItem);
        });
    });
}

loadData();
