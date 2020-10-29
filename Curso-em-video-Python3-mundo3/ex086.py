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
