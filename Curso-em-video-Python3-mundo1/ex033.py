x = int(input('Primeiro valor: '))
y = int(input('Segundo valor: '))
z = int(input('Terceiro valor: '))
min = x
if y < min:
    min = y
if z < min:
    min = z
max = x
if y > max:
    max = y
if z > max:
    max = z
print('O menor valor digitado foi {}.'.format(min))
print('O maior valor digitado foi {}.'.format(max))
