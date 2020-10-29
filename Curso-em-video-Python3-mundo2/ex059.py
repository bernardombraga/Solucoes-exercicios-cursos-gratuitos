from time import sleep
painel = '''    [ 1 ] somar
    [ 2 ] multiplicar
    [ 3 ] maior
    [ 4 ] novos números
    [ 5 ] sair do programa'''
linha = '=-=' * 12
option = 4
sair = False
while not sair:
    if option == 1:
        res = n1 + n2
        print('O resultado de {} + {} é {}.'.format(n1, n2, res))
    elif option == 2:
        res = n1 * n2
        print('O resultado de {} x {} é {}.'.format(n1, n2, res))
    elif option == 3:
        res = n1 if n1 > n2 else n2
        print('Entre {} e {}, o maior é {}.'.format(n1, n2, res))
    elif option == 4:
        n1 = int(input('Primeiro número: '))
        n2 = int(input('Segundo número: '))
    elif option == 5:
        sair = True
        print('Finalizando....')
    else:
        print('Opção inválida. Tente novamente.')
    sleep(2)
    print(linha)
    if not sair:
        print(painel)
        option = int(input('>>>>> Qual é a sua opção? '))
print('Fim do programa! Volte sempre!')
