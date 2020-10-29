msg1 = 'Digite um número inteiro: '
nD = int(input(msg1))
msg2 = ''' Escolha uma das bases para conversão:
[ 1 ] converter para BINÁRIO
[ 2 ] converter para OCTAL
[ 3 ] converter para HEXADECIMAL'''
print(msg2)
msg3 = 'Sua opção: '
opção = int(input(msg3))

if opção == 1:
    out = bin(nD)[2:]
    msg4 = '{} convertido para BINÁRIO é igual a {}.'.format(nD, out)
elif opção == 2:
    out = oct(nD)[2:]
    msg4 = '{} convertido para OCTAL é igual a {}.'.format(nD, out)
elif opção == 3:
    out = hex(nD)[2:]
    msg4 = '{} convertido para HEXADECIMAL é igual a {}.'.format(nD, out)
else:
    msg4 = 'Opção inválida. Tente novamente.'
print(msg4)