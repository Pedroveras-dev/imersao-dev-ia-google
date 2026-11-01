# ==========================================================
# CALCULADORA SIMPLES EM PYTHON (PARA INICIANTES)
# ==========================================================
# Este programa realiza as quatro operações matemáticas básicas:
# Adição (+), Subtração (-), Multiplicação (*) e Divisão (/)
# Utiliza apenas estruturas condicionais (if/elif/else) e input().

# 1. Mensagem de Boas-Vindas
print("=" * 40)
print("     CALCULADORA BÁSICA EM PYTHON")
print("=" * 40)

# 2. Entrada do primeiro número
# Usamos float() para aceitar números inteiros ou com casas decimais
numero1 = float(input("Digite o primeiro número: "))

# 3. Escolha da operação matemática
print("\nOperações disponíveis:")
print("  +  -> Adição (Soma)")
print("  -  -> Subtração")
print("  *  -> Multiplicação")
print("  /  -> Divisão")
operador = input("Digite o símbolo da operação desejada (+, -, *, /): ")

# 4. Entrada do segundo número
numero2 = float(input("\nDigite o segundo número: "))

# 5. Estrutura condicional para calcular e exibir o resultado
print("\n" + "-" * 40)

if operador == '+':
    resultado = numero1 + numero2
    print(f"Resultado: {numero1} + {numero2} = {resultado}")

elif operador == '-':
    resultado = numero1 - numero2
    print(f"Resultado: {numero1} - {numero2} = {resultado}")

elif operador == '*':
    resultado = numero1 * numero2
    print(f"Resultado: {numero1} * {numero2} = {resultado}")

elif operador == '/':
    # Verificação de segurança: divisão por zero não é permitida na matemática
    if numero2 == 0:
        print("Erro: Não é possível dividir um número por zero!")
    else:
        resultado = numero1 / numero2
        print(f"Resultado: {numero1} / {numero2} = {resultado}")

else:
    # Executado caso o usuário digite um caractere diferente de +, -, * ou /
    print(f"Erro: O operador '{operador}' é inválido! Escolha +, -, * ou /.")

print("-" * 40)
print("Fim do cálculo. Obrigado por utilizar!")
