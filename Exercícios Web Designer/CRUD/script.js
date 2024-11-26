let tarefas = [];

function renderizarTarefas() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const tarefaDiv = document.createElement('div');
        tarefaDiv.classList.add('tarefa');

        const textoTarefa = document.createElement('span');
        textoTarefa.textContent = tarefa;

        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'Editar';
        botaoEditar.classList.add('botao');
        botaoEditar.onclick = () => editarTarefa(index);

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';
        botaoExcluir.classList.add('botao');
        botaoExcluir.onclick = () => excluirTarefa(index);

        tarefaDiv.appendChild(textoTarefa);
        tarefaDiv.appendChild(botaoEditar);
        tarefaDiv.appendChild(botaoExcluir);
        
        listaTarefas.appendChild(tarefaDiv);
    });
}

function adicionarTarefa() {
    const novaTarefa = document.getElementById('novaTarefa').value;
    if (novaTarefa) {
        tarefas.push(novaTarefa);
        document.getElementById('novaTarefa').value = '';
        renderizarTarefas();
    }
}

function editarTarefa(index) {
    const novaDescricao = prompt('Editar tarefa:', tarefas[index]);
    if (novaDescricao) {
        tarefas[index] = novaDescricao;
        renderizarTarefas();
    }
}

function excluirTarefa(index) {
    tarefas.splice(index, 1);
    renderizarTarefas();
}

// Renderiza a lista ao carregar a página
renderizarTarefas();
