import datetime
msg1 = 'Que ano quer analisar? Coloque 0 para analiar o ano atual: '
lido = int(input(msg1))
if lido == 0:
    ano = datetime.date.today().year
else:
    ano = lido
if (ano % 4 == 0) and (ano % 100 != 0 or ano % 400 == 0):
    msg2 = 'O ano {} É BISSEXTO'.format(ano)
else:
    msg2 = 'O ano {} NÃO É BISSEXTO'.format(ano)
print(msg2)