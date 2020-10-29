dist = float(input('Qual é a distância de sua viagem em km? '))
print('Você está prestes a começar uma viagem de {:.1f}km.'.format(dist))
'''if dist <= 200:
    valor = 0.50 * dist
else:
    valor = 0.45 * dist'''
valor = 0.50 * dist if dist <= 200 else 0.45 * dist
print('E o preço de sua viagem será de R${:.2f}.'.format(valor))
