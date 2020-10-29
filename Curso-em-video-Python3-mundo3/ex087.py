matriz = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
# print(matriz)
for i in range(0, 3):
    for j in range(0, 3):
        matriz[i][j] = int(input(f'Digite um valor para [{i}, {j}]: '))
# print(matriz)
print('-=' * 30)
for i in range(0, 3):
    for j in range(0, 3):
        print('[{:^5}]'.format(matriz[i][j]), end='')
    print('')
print('-=' * 30)
somaPares = 0
for i in range(0, 3):
    for j in range(0, 3):
        if matriz[i][j] % 2 == 0:
            somaPares += matriz[i][j]
print(f'A soma dos valores pares é {somaPares}.')
somaCol2 = 0
for i in range(0, 3):
    somaCol2 += matriz[i][2]
print(f'A soma dos valores da terceira coluna é {somaCol2}.')
maiorLin1 = matriz[1][0]
for j in range(0, 3):
    if matriz[1][j] > maiorLin1:
        maiorLin1 = matriz[1][j]
print(f'O maior valor da segunda linha é {maiorLin1}.')
