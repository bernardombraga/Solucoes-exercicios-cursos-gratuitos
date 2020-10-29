def area(x=1, y=1):
    a = x * y
    print(f'A área de um terreno {x}mx{y}m é de {a}m².')


msg = 'Controle de Terrenos'
print(msg)
print('-' * len(msg))
L = float(input('LARGURA (m): '))
C = float(input('COMPRIMENTO (m): '))
area(L, C)
# area(x=L, y=C)
# area(y=C, x=L)
# area(1)
