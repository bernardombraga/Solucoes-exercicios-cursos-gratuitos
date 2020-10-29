c = 0
s = 0
for i in range(1, 7):
    n = int(input('Digite o {}º valor: '.format(i)))
    if n % 2 == 0:
        c = c + 1
        s = s + n
print('Você informou {} números PARES e a soma foi {}.'.format(c, s))
