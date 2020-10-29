import datetime
anoN = int(input('Ano de nascimento: '))
anoA = datetime.date.today().year
idade = anoA - anoN
print('O atleta tem {} anos.'.format(idade))
# print(anoN, anoA, idade)
if idade > 25:
    msg = 'Classificação: MASTER'
elif idade > 19:
    msg = 'Classificação: SÊNIOR'
elif idade > 14:
    msg = 'Classificação: JUNIOR'
elif idade > 9:
    msg = 'Classificaçaõ: INFANTIL'
else:
    msg = 'Classificação: MIRIM'

print(msg)