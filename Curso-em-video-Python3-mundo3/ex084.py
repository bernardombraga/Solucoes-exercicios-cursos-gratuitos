dados = list()
pessoa = list()
maisPesados = list()
menosPesados = list()
nome = resp = str('')
peso = maiorPeso = menorPeso = float(0)
nPessoas = int(0)
# print(dados, pessoa, nome, peso)
while True:
    nome = str(input('Nome: ')).capitalize()
    peso = float(input('Peso (kg): '))
    pessoa = [nome, peso]
    dados.append(pessoa[:])
    pessoa.clear()
    resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if resp == 'N':
        break
print('-=' * 30)
# print(dados)
nPessoas = len(dados)
print(f'Ao todo, você cadastrou {nPessoas} pessoas.')
maiorPeso = dados[0][1]
menorPeso = dados[0][1]
for p in dados:
    if p[1] > maiorPeso:
        maiorPeso = p[1]
    if p[1] < menorPeso:
        menorPeso = p[1]
# print(maiorPeso, menorPeso)
for p in dados:
    if p[1] == maiorPeso:
        maisPesados.append(p[0])
    if p[1] == menorPeso:
        menosPesados.append(p[0])
print(f'O maior peso foi de {maiorPeso}kg. Peso de:', end='')
for p in maisPesados:
    print(f' [{p}]', end='')
print('.')
print(f'O menor peso foi de {menorPeso}kg. Peso de:', end='')
for p in menosPesados:
    print(f' [{p}]', end='')
print('.')
