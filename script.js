const tarefaInput = document.getElementById('tarefaInput');
        const adicionarBtn = document.getElementById('adicionarBtn');
        const listaTarefas = document.getElementById('listaTarefas');

        adicionarBtn.addEventListener('click', () => {
            const tarefaTexto = tarefaInput.value.trim();

            if (tarefaTexto) {
                const tarefaItem = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.addEventListener('change', () => {
                    tarefaItem.classList.toggle('concluída', checkbox.checked);
                });

                const textoTarefa = document.createElement('span');
                textoTarefa.textContent = tarefaTexto;

                const excluirBtn = document.createElement('button');
                excluirBtn.textContent = 'Excluir';
                excluirBtn.addEventListener('click', () => {
                    listaTarefas.removeChild(tarefaItem);
                });

                tarefaItem.appendChild(checkbox);
                tarefaItem.appendChild(textoTarefa);
                tarefaItem.appendChild(excluirBtn);
                listaTarefas.appendChild(tarefaItem);

                tarefaInput.value = ''; // Limpa o campo de entrada
            } else {
                alert('Por favor, digite uma tarefa.');
            }
        });
    