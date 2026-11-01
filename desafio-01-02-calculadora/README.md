# Calculadora em Python

Calculadora de terminal com as quatro operações básicas (adição, subtração, multiplicação e divisão), gerada com o **Google AI Studio** no Desafio 1 da Imersão Dev da Alura + Google.

O objetivo do desafio não era só gerar o código, mas entender como instruções, variáveis e condições constroem um software.

## Como executar

É preciso ter o Python 3 instalado.

```bash
python3 calculadora.py
```

O programa pede o primeiro número, o símbolo da operação (`+`, `-`, `*` ou `/`) e o segundo número, e então mostra o resultado.

## Como o código funciona

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

O operador fica guardado como texto na variável `operador`. O programa o identifica comparando esse texto com cada símbolo: `operador == '+'`, `'-'`, `'*'` e `'/'`.

### 3. Como a lógica faz os cálculos e mostra os resultados?

O Python avalia as condições de cima para baixo e executa apenas o primeiro bloco verdadeiro. Esse bloco faz a conta, guarda o valor em `resultado` e o exibe com `print(f"...")`.

- Na divisão, um `if` interno (condição aninhada) verifica se `numero2 == 0` para evitar a divisão por zero.
- Se o operador não for nenhum dos quatro, o `else` mostra uma mensagem de operador inválido.

## Testes realizados

| Entrada | Resultado obtido | Situação |
|---------|------------------|----------|
| 10 + 5 | `15.0` | ✅ |
| 10 - 3 | `7.0` | ✅ |
| 4 * 2.5 | `10.0` | ✅ |
| 10 / 4 | `2.5` | ✅ |
| 10 / 0 | Mensagem de erro amigável | ✅ |
| Operador `x` | Mensagem de operador inválido | ✅ |
| `abc` no lugar do número | O programa encerra com `ValueError` | ⚠️ |
| `0.1 + 0.2` | `0.30000000000000004` | ℹ️ |

## Limitações conhecidas

- Digitar letras ou usar vírgula como separador decimal (`2,5`) encerra o programa com erro, porque `float()` não consegue converter esse texto.
- Espaços em volta do operador (`" + "`) fazem ele ser tratado como inválido.
- Resultados como `0.30000000000000004` vêm da forma como o computador representa números decimais (ponto flutuante), não de um erro no código.

Esses pontos podem ser tratados nas próximas versões.

## Próxima etapa

No **Desafio 2**, este projeto será evoluído com o **Google Antigravity**, recebendo uma nova operação (porcentagem) e testes para garantir que as operações existentes continuem funcionando.
