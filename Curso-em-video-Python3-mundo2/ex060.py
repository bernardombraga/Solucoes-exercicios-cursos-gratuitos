# from math import factorial
print('Digite um número para\ncalcular seu fatorial: ', end='')
n = int(input(''))
print('Calculando {}! = '.format(n), end='')
fatorial = n
i = n
while i > 1:
    print('{} x '.format(i), end='')
    i -= 1
    fatorial *= i
# fatorial = factorial(n)
print('1 = {}'.format(fatorial))