x = int(input('Digite um número para ver sua tabuada: '))
for y in range(1, 11):
    print('{} x {:2} = {}'.format(x, y, x * y))
