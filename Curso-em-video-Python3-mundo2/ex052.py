n = int(input('Digite um número: '))
nDiv = 0
for i in range(1, n+1):
    if n % i == 0:
        nDiv = nDiv + 1
        print('\033[33m', end='')
    else:
        print('\033[31m', end='')
    print('{} '.format(i), end='')
print('\033[m')
print('O número {} foi divisível {} vezes.'.format(n, nDiv))
if nDiv == 2:
    print('E por issso ele É PRIMO!')
else:
    print('E por isso ele NÃO É PRIMO!')
