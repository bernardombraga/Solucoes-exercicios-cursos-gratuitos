msg1 = 'Digite um número inteiro: '
n1 = int(input(msg1))
msg2 = 'Digite outro número inteiro: '
n2 = int(input(msg2))
s = n1 + n2
print('A soma entre \033[1:34m{0}\033[m e \033[1:31m{1}\033[m vale \033[1:32m{2}\033[m.'.format(n1, n2, s))
