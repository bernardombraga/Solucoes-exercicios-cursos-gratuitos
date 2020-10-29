def leiaInt(msg):
    while True:
        lido = str(input(msg)).strip()
        if lido.isnumeric():
            num = float(lido)
            if num % 1 == 0:
                num = int(lido)
                break
        print('\033[0;31mERRO! Digite um número inteiro válido.\033[m')
    return num


# Programa principal
print('-' * 30)
n = leiaInt('Digite um número: ')
print(f'Você acabou de digitar o número {n}.')

