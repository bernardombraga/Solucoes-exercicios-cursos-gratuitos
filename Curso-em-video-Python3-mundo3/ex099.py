from time import sleep

def analisar(* valores):
    print('-=' * 20)
    print('Analisando os valores passados...')
    for n in valores:
        print(f'{n} ', end='')
        sleep(0.3)
    print(f'Foram informados {len(valores)} valores ao todo.')
    print(f'O maior valor informado foi', end='')
    if len(valores) != 0:
        print(f' {max(valores)}.')
    else:
        print('.')


# Programa principal
analisar(2, 9, 4, 5, 7, 1)
analisar(4, 7, 0)
analisar(1, 2)
analisar(6)
analisar()