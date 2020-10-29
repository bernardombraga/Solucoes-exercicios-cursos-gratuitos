import datetime
anoN = int(input('Ano de nascimento: '))
anoA = datetime.date.today().year
idade = anoA - anoN
# print(anoN, anoA, idade)
print('Quem nasceu em {} tem {} anos em {}.'.format(anoN, idade, anoA))

print('''Qual seu sexo? Digite:
[ F ] para sexo feminino
[ M ] para sexo masculino''')
lido = str(input('Opção: '))
sexo = lido.strip().upper()
# print(sexo)
if sexo == 'M':
    print('Você precisa fazer o alistamento militar obrigatório.')
elif sexo == 'F':
    print('Você não precisa fazer o alistamento militar obrigatório.')
else:
    print('Opção inválida. Tente novamente.')

if idade < 18 and sexo == 'M':
    dif = 18 - idade
    print('Ainda faltam {} anos para o alistamento.'.format(dif))
    anoF = anoA + dif
    print('Seu alistamento será em {}.'.format(anoF))
elif idade > 18 and sexo == 'M':
    dif = idade - 18
    print('Você já deveria ter se alistado há {} anos.'.format(dif))
    anoP = anoA - dif
    print('Seu alistamento foi em {}.'.format(anoP))
elif idade == 18 and sexo == 'M':
    print('Você tem que se alistar IMEDIATAMENTE!')
