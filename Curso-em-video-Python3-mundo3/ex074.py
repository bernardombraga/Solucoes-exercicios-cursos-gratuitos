from random import randint
números = (randint(1,10), randint(1,10), randint(1,10),
           randint(1,10), randint(1,10))
# print(números)
print('Os valores sorteados foram:', end='')
for n in números:
    print(f' {n}', end='')
maior = max(números)
print(f'\nO amior valor sorteado foi {maior}.')
menor = min(números)
print(f'O menor valor sorteado foi {menor}.')
