n1 = float(input('Primeira nota: '))
n2 = float(input('Segunda nota: '))
m = (n1 + n2) / 2
msg1 = 'Tirando {:.1f} e {:.1f}, a média do aluno é {:.1f}.'.format(n1, n2, m)
print(msg1)
if m >= 7.0:
    msg2 = 'O aluno está APROVADO.'
elif m >= 5.0:
    msg2 = 'O aluno está em RECUPERAÇÃO.'
else:
    msg2 = 'O aluno está REPROVADO.'
print(msg2)
