// ==========================================================
// APLICAÇÃO DE LISTA DE TAREFAS (TO-DO LIST)
// ==========================================================
// Este script controla as ações do usuário na página:
// 1. Adicionar uma nova tarefa (via clique no botão ou tecla Enter)
// 2. Marcar uma tarefa como concluída (ou desmarcar)
// 3. Remover uma tarefa da lista

// 1. SELEÇÃO DOS ELEMENTOS DO HTML
// Usamos document.getElementById para capturar os elementos que vamos manipular
const formTarefa = document.getElementById('form-tarefa');
const inputTarefa = document.getElementById('input-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

// 2. FUNÇÃO PARA CRIAR E ADICIONAR UMA NOVA TAREFA
function adicionarTarefa(texto) {
  // Cria o elemento <li> que representará o item da tarefa na lista
  const li = document.createElement('li');
  li.className = 'item-tarefa';

  // Cria um elemento <label> para agrupar o checkbox e o texto
  // Usar <label> permite que clicar no texto também marque o checkbox
  const conteudo = document.createElement('label');
  conteudo.className = 'item-conteudo';

  // Cria a caixinha de seleção (checkbox) para marcar como concluída
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'checkbox-tarefa';

  // Cria o <span> onde o texto da tarefa ficará visível
  // ATENÇÃO DE SEGURANÇA: Usamos textContent (e não innerHTML) para evitar
  // que textos com tags HTML ou scripts maliciosos sejam executados
  const spanTexto = document.createElement('span');
  spanTexto.className = 'texto-tarefa';
  spanTexto.textContent = texto;

  // Cria o botão para remover a tarefa
  const btnRemover = document.createElement('button');
  btnRemover.type = 'button';
  btnRemover.className = 'btn-remover';
  btnRemover.textContent = 'Remover';

  // FUNCIONALIDADE 2: MARCAR COMO CONCLUÍDA
  // O evento 'change' dispara sempre que o checkbox é marcado ou desmarcado
  checkbox.addEventListener('change', function () {
    // toggle adiciona a classe 'concluida' se checked for true, e remove se for false
    li.classList.toggle('concluida', checkbox.checked);
  });

  // FUNCIONALIDADE 3: REMOVER TAREFA
  // O evento 'click' no botão remover exclui o item <li> da lista
  btnRemover.addEventListener('click', function () {
    li.remove();
  });

  // MONTAGEM DOS ELEMENTOS NO HTML
  // Colocamos o checkbox e o texto dentro do label
  conteudo.appendChild(checkbox);
  conteudo.appendChild(spanTexto);

  // Colocamos o label e o botão de remover dentro do <li>
  li.appendChild(conteudo);
  li.appendChild(btnRemover);

  // Por fim, adicionamos o <li> dentro da lista <ul>
  listaTarefas.appendChild(li);
}

// FUNCIONALIDADE 1: ADICIONAR TAREFA (POR BOTÃO OU TECLA ENTER)
// Ao escutar o evento 'submit' do formulário, o navegador captura automaticamente:
// - O clique no botão "Adicionar" (que é do tipo submit)
// - O pressionamento da tecla Enter enquanto o cursor estiver no campo de texto
formTarefa.addEventListener('submit', function (evento) {
  // Impede o recarregamento padrão da página ao enviar o formulário
  evento.preventDefault();

  // Pega o valor digitado e remove espaços em branco nas pontas com .trim()
  const textoTarefa = inputTarefa.value.trim();

  // Validação: não permite adicionar tarefas vazias ou somente com espaços
  if (textoTarefa === '') {
    return;
  }

  // Chama a função que cria os elementos e insere na lista
  adicionarTarefa(textoTarefa);

  // Limpa o campo de entrada e devolve o foco para facilitar a digitação da próxima tarefa
  inputTarefa.value = '';
  inputTarefa.focus();
});

