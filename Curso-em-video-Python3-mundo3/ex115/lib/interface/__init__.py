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


def linha(tam = 42):
    return '-' * tam


def cabeçalho(txt, tam=42):
    print(linha())
    print(txt.center(tam))
    print(linha())


def menu(lista):
    cabeçalho('MENU PRINCIPAL')
    for key, item in enumerate(lista):
        print(f'\033[m{key+1}\033[33m - \033[34m{item}\033[m')
    print(linha())


def lerOpção():
    opc = leiaInt('\033[32mSua opção: \033[m')
    return opc
