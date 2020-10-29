lista = []
# lista.append(5)
# lista.append(7)
# lista.insert(0, 3)
# lista.insert(1, 4)
for i in range(0, 5):
    n = int(input('Digite um valor: '))
    if i == 0:
        lista.append(n)
        print('Primeiro elemento da lista (posição 0)...')
    elif n > lista[-1]:
        lista.append(n)
        print('Adicionado ao final da lista...')
    elif n < lista[0]:
        lista.insert(0, n)
        print('Adicionado no início da lista (posição 0)...')
    elif n in lista:
        pos = lista.index(n)
        lista.insert(pos, n)
        print(f'Valor repetido. Adicionado na posição {pos} da lista...')
    else:
        tamanho = len(lista)
        for j in range(0, tamanho - 1):
            if lista[j] < n < lista[j+1]:
                lista.insert(j+1, n)
                print(f'Adicionado na posição {j+1} da lista...')
print('-=' * 30)
print(f'Os valores digitados em ordem foram {lista}')
