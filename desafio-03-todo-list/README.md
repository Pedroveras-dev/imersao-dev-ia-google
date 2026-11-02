# Lista de Tarefas (To-Do List)

Aplicação web simples para acompanhar atividades pendentes e concluídas, desenvolvida com o **Google Antigravity** no Desafio 3 da Imersão Dev da Alura + Google.

## Funcionalidades

- **Adicionar tarefas:** pelo botão "Adicionar" ou pela tecla Enter. Tarefas vazias ou só com espaços não são aceitas.
- **Marcar como concluída:** pela caixa de seleção ou clicando no texto. A tarefa concluída fica riscada e mais apagada. Ao desmarcar, ela volta ao visual de pendente.
- **Remover tarefas:** pelo botão "Remover" de cada item.

## Como executar

Não é preciso instalar nada. Abra o arquivo `index.html` no navegador (clique duplo) ou, no Linux:

```bash
xdg-open index.html
```

## Tecnologias e organização

HTML, CSS e JavaScript puros, sem frameworks nem bibliotecas:

| Arquivo | Papel |
|---------|-------|
| `index.html` | **Estrutura:** título, formulário (campo + botão) e a lista vazia |
| `style.css` | **Aparência:** layout, cores e o visual das tarefas concluídas (classe `.concluida`) |
| `script.js` | **Comportamento:** adicionar, concluir e remover tarefas |

## Como os componentes trabalham juntos

1. O **HTML** define o formulário e uma lista `<ul>` vazia.
2. O **JavaScript** seleciona esses elementos pelo `id` (`getElementById`) e escuta os eventos da página.
3. Ao enviar o formulário (clique ou Enter), o evento `submit` é capturado. `preventDefault()` evita o recarregamento da página, `.trim()` remove os espaços e a tarefa vazia é recusada.
4. A função `adicionarTarefa` cria no **DOM** um `<li>` com checkbox, texto e botão Remover, e o insere na lista. O texto é inserido com `textContent`, e não `innerHTML`, por segurança.
5. Ao marcar o checkbox, o JavaScript adiciona a classe `concluida` ao item, e o **CSS** aplica o texto riscado e a aparência apagada. Ao desmarcar, a classe é removida.
6. O botão Remover executa `li.remove()`, tirando o item da página.

Resumo: o HTML dá a estrutura, o JavaScript reage aos eventos e altera o DOM, e o CSS define a aparência a partir das classes.

## Processo com o Google Antigravity

1. **Criar:** prompt no formato GCCD (Goal, Context, Constraints, Done when), definindo as tecnologias, a pasta, a validação de tarefas vazias e o uso de `textContent`.
2. **Melhorar:** pedido de diferenciação visual para as tarefas concluídas, feita com uma classe CSS.
3. **Testar:** verificação de todas as funcionalidades após a melhoria.
4. **Revisar:** conferência das mudanças com `git diff` antes de cada commit.

## Testes realizados

| # | Caso | Resultado |
|---|------|-----------|
| 1 | Adicionar pelo botão | ✅ |
| 2 | Adicionar com Enter (o campo é limpo depois) | ✅ |
| 3 | Tarefa vazia ou só com espaços não é adicionada | ✅ |
| 4 | Concluir: o texto fica riscado e o item fica apagado | ✅ |
| 5 | Desmarcar volta ao visual de pendente | ✅ |
| 6 | Remover uma tarefa pendente e uma concluída | ✅ |
| 7 | Remover uma tarefa do meio sem afetar as outras | ✅ |
| — | Texto com HTML (`<b>negrito</b>`) aparece como texto | ✅ |

## Limitações e próximos passos

- As tarefas não são salvas: ao atualizar a página, a lista volta vazia. Uma evolução seria usar `localStorage`.
- Não há mensagem quando a lista está vazia.
