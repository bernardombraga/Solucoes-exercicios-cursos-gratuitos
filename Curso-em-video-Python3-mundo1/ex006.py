msg1 = 'Digite um número inteiro: '
n = int(input(msg1))
dobro = 2*n
triplo = 3*n
raiz = n**(1/2)
msg2 = 'O dobro de {} vale {}. \n'.format(n, dobro)
msg3 = 'O triplo de {} vale {}. \n'.format(n, triplo)
msg4 = 'A raiz quadrada de {} é igual a {:.2f}.'.format(n, raiz)
msg5 = msg2 + msg3 + msg4
print(msg5)

