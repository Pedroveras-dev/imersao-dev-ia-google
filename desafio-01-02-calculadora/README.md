# Calculadora em Python

Calculadora de terminal criada em duas etapas da Imersão Dev da Alura + Google:

- **Desafio 1:** gerada com o **Google AI Studio**, com as quatro operações básicas (adição, subtração, multiplicação e divisão).
- **Desafio 2:** evoluída com o **Google Antigravity**, que adicionou a operação de **porcentagem**.

O objetivo não era só gerar código, mas entender, modificar e testar um software.

## Como executar

É preciso ter o Python 3 instalado.

```bash
python3 calculadora.py
```

O programa pede o primeiro número, o símbolo da operação (`+`, `-`, `*`, `/` ou `%`) e o segundo número, e então mostra o resultado.

## Desafio 1: como o código funciona

### 1. Quais são os principais componentes do código?

O código é um script simples, executado de cima para baixo, com quatro partes:

- **Mensagens na tela:** `print` exibe o título e as operações disponíveis.
- **Entrada de dados:** `input` lê o que a pessoa digita e `float` converte o texto em número.
- **Decisão:** a estrutura `if / elif / else` escolhe qual conta fazer.
- **Saída:** o resultado é exibido com uma f-string.

As variáveis principais são `numero1`, `numero2`, `operador` e `resultado`.

### 2. Como a aplicação recebe os números e identifica a operação?

O `input()` lê o que a pessoa digita, sempre como texto. Para os números, o `float()` converte esse texto em número decimal:

```python
numero1 = float(input("Digite o primeiro número: "))
```

O operador fica guardado como texto na variável `operador`. O programa o identifica comparando esse texto com cada símbolo: `operador == '+'`, `'-'`, `'*'`, `'/'` e `'%'`.

### 3. Como a lógica faz os cálculos e mostra os resultados?

O Python avalia as condições de cima para baixo e executa apenas o primeiro bloco verdadeiro. Esse bloco faz a conta, guarda o valor em `resultado` e o exibe com `print(f"...")`.

- Na divisão, um `if` interno (condição aninhada) verifica se `numero2 == 0` para evitar a divisão por zero.
- Se o operador não for nenhum dos reconhecidos, o `else` mostra uma mensagem de operador inválido.

## Desafio 2: evolução com o Google Antigravity

### Processo

1. **Explorar:** pedi ao Antigravity que explicasse a estrutura do projeto, sem alterar arquivos.
2. **Implementar:** pedi a operação de porcentagem, com restrições claras (método GCCD: Goal, Context, Constraints, Done when).
3. **Testar:** pedi que ele executasse a porcentagem e todas as operações anteriores.
4. **Revisar:** conferi as mudanças com `git diff` antes de fazer o commit.

### Definição da porcentagem

A operação calcula **"X% de Y"**: `numero1 * numero2 / 100`. Exemplo: `50 % 200 = 100.0`.

Atenção: em Python o símbolo `%` é o operador de **resto da divisão** (`50 % 200` daria `50`). Por isso a fórmula foi escrita explicitamente no prompt, e o código não usa o `%` do Python para essa conta.

### O que mudou no código

- Um novo bloco `elif operador == '%':` foi adicionado antes do `else`, com a fórmula da porcentagem.
- O `%` foi incluído no menu de operações, no texto do `input` e na mensagem de operador inválido.
- As quatro operações originais não foram alteradas.

## Testes realizados

| Entrada | Resultado obtido | Situação |
|---------|------------------|----------|
| 10 + 5 | `15.0` | ✅ |
| 10 - 3 | `7.0` | ✅ |
| 4 * 2.5 | `10.0` | ✅ |
| 10 / 4 | `2.5` | ✅ |
| 10 / 0 | Mensagem de erro amigável | ✅ |
| 50 % 200 | `100.0` | ✅ |
| 10 % 50 | `5.0` | ✅ |
| 15 % 80 | `12.0` | ✅ |
| Operador `x` | Mensagem de operador inválido | ✅ |
| `abc` no lugar do número | O programa encerra com `ValueError` | ⚠️ |
| `0.1 + 0.2` | `0.30000000000000004` | ℹ️ |

## Limitações conhecidas

- Digitar letras ou usar vírgula como separador decimal (`2,5`) encerra o programa com erro, porque `float()` não consegue converter esse texto.
- Espaços em volta do operador (`" + "`) fazem ele ser tratado como inválido.
- Resultados como `0.30000000000000004` vêm da forma como o computador representa números decimais (ponto flutuante), não de um erro no código.
- O resultado da porcentagem aparece como `50.0 % 200.0 = 100.0`. Um texto como `50.0% de 200.0` seria mais claro.
