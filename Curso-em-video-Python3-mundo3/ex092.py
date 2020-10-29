import datetime
dados = dict()

dados['bome'] = str(input('Nome: ')).strip().capitalize()
anoN = int(input('Ano de Nascimento: '))
anoA = datetime.date.today().year
dados['idade'] = anoA - anoN
dados['ctps'] = int(input('Carteira de Trabalho (0 não tem): '))
if dados['ctps'] != 0:
    dados['contratação'] = int(input('Ano de Contratação: '))
    dados['salário'] = float(input('Salário: R$'))
    anoApos = dados['contratação'] + 35
    dados['aposentadoria'] = anoApos - anoN

print('-=' * 30)
for key, value in dados.items():
    print(f'  - {key} tem o valor {value}')
# print(dados)
