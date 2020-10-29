'''
números = (int(input('Digite um número: ')),
           int(input('Digite outro número: ')),
           int(input('Digite mais um número: ')),
           int(input('Digite o último número: ')))
'''

números = ()
# números = tuple()
for i in range(1, 5):
    n = int(input(f'Digite o {i}º número: '))
    números += (n,)

print('Você digitou os valores:', números)
vezes9 = números.count(9)
print(f'O valor 9 aparece {vezes9} vezes.')
if 3 in números:
    pos3 = números.index(3) + 1
    print(f'O valor 3 aparece na {pos3}ª posição.')
else:
    print('O valor 3 não foi digitado em nenhuma posição.')
print('Os valores pares digitados foram:', end='')
for n in números:
    if n % 2 == 0:
        print(f' {n}', end='')
