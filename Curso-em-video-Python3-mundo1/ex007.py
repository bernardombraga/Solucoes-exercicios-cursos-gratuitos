msg1 = 'Primeira nota do aluno: '
n1 = float(input(msg1))
msg2 = 'Segunda nota do aluno: '
n2 = float(input(msg2))
media = (n1 + n2) / 2
msg3 = 'A média entre {:.1f} e {:.1f} é igual a {:.1f}.'.format(n1, n2, media)
print(msg3)
