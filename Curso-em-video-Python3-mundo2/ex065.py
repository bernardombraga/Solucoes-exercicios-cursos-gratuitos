cont = 0
soma = 0
maior = 0
menor = 0
continuar = True
n = int(input('Digite un número: '))
cont += 1
soma += n
maior = n
menor = n
erro = False
while continuar:
    if not erro:
        lido = str(input('Quer continuar? [S/N] '))
        resp = lido.strip().upper()[0]
    if resp == 'S':
        n = int(input('Digite un número: '))
        cont += 1
        soma += n
        if n > maior:
            maior = n
        if n < menor:
            menor = n
        erro = False
    elif resp == 'N':
        continuar = False
    while resp != 'S' and resp != 'N':
        print('Entrada inválida.')
        lido = str(input('Quer continuar? [S/N] '))
        resp = lido.strip().upper()[0]
        erro = True
media = soma / cont
print('Você digitou {} números e a média foi {:.2f}.'.format(cont, media))
print('O maior valor foi {} e o menor foi {}.'.format(maior, menor))
