from time import sleep

def PA(a1, an, p):
    p = abs(p)
    if p == 0:
        p = 1
    linha = '-=' * 20
    print(linha)
    print(f'Contagem de {a1} até {an} de {p} em {p}')
    ai = a1
    while True:
        print(f'{ai} ', end='')
        sleep(0.3)
        if an > ai:
            ai += p
            if ai > an:
                break
        else:
            ai -= p
            if ai < an:
                break
    print('FIM!')


# Programa Principal
PA(1, 10, 1)
PA(10, 0, 2)
print('-=' * 20)
print('Agora é sua vez de personalizar a contagem!')
ini = int(input('Início: '))
fim = int(input('Fim:    '))
pas = int(input('Passo:  '))
PA(ini, fim, pas)
print('-=' * 20)
