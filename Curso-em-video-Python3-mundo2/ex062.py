print('Gerador de PA')
print('-=' * 10)
a1 = int(input('Primeiro termo: '))
r = int(input('Razão da PA: '))
i = 1
termo = a1
n = 10
nTotal = n
while n != 0:
    while i <= n:
        print('{} → '.format(termo), end='')
        termo += r
        i += 1
    print('PAUSA')
    n = int(input('Quantos termos você quer mostrar a mais? '))
    nTotal += n
    i = 1
print('Prograssão finalizada com {} termos.'.format(nTotal))