n1 = int(input('Primeiro número: '))
n2 = int(input('Segundo número: '))
if n1 > n2:
    msg = 'O PRIMEIRO valor é maior.'
elif n1 < n2:
    msg = 'O SEGUNDO valor é maior'
else:
    msg = 'Os dois valores são iguais.'
print(msg)
