def leiaDinheiro(msg):
    while True:
        lido1 = str(input(msg)).strip()
        lido2 = lido1
        if ',' in lido1:
            lido2 = lido2.replace(',', '.')
        if lido2.isalpha() or lido2 == '':
            print(f'\033[0;31mERRO! "{lido1}" não é um preço válido.\033[m')
        else:
            break
    return float(lido2)


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
