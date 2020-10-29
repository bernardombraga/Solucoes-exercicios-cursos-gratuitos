lista = []
for i in range(0,5):
    valor = int(input(f'Digite um valor para a posição {i}: '))
    lista.append(valor)
# print(lista)

print('=-' * 30)
print(f'Você digitu os valores {lista}')

maior = max(lista)
nMaior = lista.count(maior)
# print(maior, nMaior)
posMaior = []
for p, n in enumerate(lista):
    if n == maior:
        posMaior.append(p)
print(f'O maior valor digitado foi {maior} nas posições', end='')
for i in range(0, nMaior):
    print(f' {posMaior[i]}...', end='')
print('')

menor = min(lista)
nMenor = lista.count(menor)
posMenor = []
for p, n in enumerate(lista):
    if n == menor:
        posMenor.append(p)
print(f'O menor valor digitado foi {menor} nas posições', end='')
for i in range(0, nMenor):
    print(f' {posMenor[i]}...', end='')
print('')
