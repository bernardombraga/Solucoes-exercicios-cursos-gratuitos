def leiaInt(msg):
    while True:
        lido = str(input(msg)).strip()
        try:
            num = int(lido)
        except (ValueError, TypeError):
            print('\033[0;31mERRO! Digite um número inteiro válido.\033[m')
        except KeyboardInterrupt:
            print('\033[0;31mUsuário preferiu não digitar esse número. Atribuido valor 0.\033[m')
            num = 0
            break
        else:
            break
    return num


def leiaFloat(msg):
    while True:
        lido = str(input(msg)).strip()
        try:
            num = float(lido)
        except (ValueError, TypeError):
            print('\033[0;31mERRO! Digite um número real válido.\033[m')
        except KeyboardInterrupt:
            print('\033[0;31mUsuário preferiu não digitar esse número. Atribuido valor 0.\033[m')
            num = 0
            break
        else:
            break
    return num


# Programa principal
nInt = leiaInt('Digite um número inteiro: ')
nReal = leiaFloat('Digite um número real: ')
print(f'O valor inteiro digitado foi {nInt} e o real foi {nReal}.')

