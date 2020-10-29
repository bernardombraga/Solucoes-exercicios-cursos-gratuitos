import math
msg1 = 'Digite um valor: '
num = float(input(msg1))
parteint = math.floor(num)
msg2 = 'O valor digitado foi {} e a sua porção inteira é {}.'.format(num, parteint)
print(msg2)
