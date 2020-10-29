# menor = 10000
# maior = 0
menor = 0
maior = 0
for i in range(0, 5):
    msg1 = 'Peso da {}ª pessoa (kg): '.format(i+1)
    peso = float(input(msg1))
    if i == 1:
        menor = peso
        maior = peso
    else:
        if peso < menor:
            menor = peso
        if peso > maior:
            maior = peso
print('O maior peso lido foi de {}kg.'.format(maior))
print('O menor peso lido foi de {}kg.'.format(menor))
