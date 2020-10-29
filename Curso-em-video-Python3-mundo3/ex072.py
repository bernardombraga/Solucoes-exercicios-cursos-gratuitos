nExtenso = ('zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete' , 'oito',
            'nove', 'dez', 'onze', 'doze', 'treze', 'catorze', 'quinze', 'dezesseis',
            'dezessete', 'dezoito', 'dezenove', 'vinte')
# print(nExtenso)
while True:
    while True:
        n = int(input('Digite um número entre 0 e 20: '))
        if (n >= 0 and n <= 20):
            break
        print('Tente novamente.', end='')
    print(f'você digitou o número {nExtenso[n]}.')
    continuar = ' '
    while continuar not in 'SN':
        continuar = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if continuar == 'N':
        break
print('Fim do programa.')
