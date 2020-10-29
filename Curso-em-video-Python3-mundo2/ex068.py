from random import randint
linha1 = '=-' * 15
linha2 = '-' * 30
print(linha1)
print('VAMOS JOGAR PAR OU ÍMPAR')
print(linha1)
continuar = True
vitórias = 0
while continuar:
    playerValue = int(input('Diga um valor: '))
    option = ' '
    while option not in 'PI':
        option = str(input('PAR ou ÍMPAR? [P/I] ')).strip().upper()[0]
    pcValue = randint(0, 10)
    print(linha2)
    print(f'Você jogou {playerValue} e o computador {pcValue}.')
    total = playerValue + pcValue
    if total % 2 == 0:
        res = 'PAR'
    else:
        res = 'ÍMPAR'
    print(f'Total de {total}. Deu {res}!')
    print(linha2)
    if (option == 'P' and res == 'PAR') or (option == 'I' and res == 'ÍMPAR'):
        print('VOCÊ VENCEU!')
        print('Vamos jogar novamente...')
        print(linha1)
        vitórias += 1
    else:
        print('VOCÊ PERDEU!')
        print(linha1)
        continuar = False
print(f'GAME OVER! Você venceu {vitórias} vezes.')

