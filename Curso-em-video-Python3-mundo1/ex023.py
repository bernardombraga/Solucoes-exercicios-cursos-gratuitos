msg1 = 'Informe um número inteiro entre 0 e 9999: '
num = int(input(msg1))
print('Analisando o número {}...'.format(num))
u = (num // 1) % 10
d = (num // 10) % 10
c = (num // 100) % 10
m = num // 1000
msg2 = 'Unidade: {} \nDezena: {} \nCentena: {} \nMilhar: {}'.format(u, d, c, m)
print(msg2)