linha = '=' * 30
print(linha)
msgInicial = '{:^30}'.format('10 TERMOS DE UMA PA')
print(msgInicial)
print(linha)
a0 = int(input('Primeiro termo: '))
r = int(input('Razão: '))
# print(a0, r)
for n in range(0, 10):
    an = a0 + r * n
    print(an, end=' → ')
print('ACABOU')
