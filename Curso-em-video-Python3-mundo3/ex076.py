lista = ('Lápis', 1.75, 'Borracha', 2.0, 'Caderno', 15.9,
         'Estojo', 25.0, 'Transferidor', 4.2, 'Compasso', 9.99,
         'Mochila', 120.32, 'Canetas', 22.3, 'Livro', 34.9)
linha = '-' * 40
print(linha)
print('{:^40}'.format('LISTAGEM DE PREÇOS'))
print(linha)
for i in range(0, len(lista), 2):
    print('{:.<30}R${:>7.2f}'.format(lista[i], lista[i+1]))
    # print(lista[i], lista[i+1])
print(linha)
