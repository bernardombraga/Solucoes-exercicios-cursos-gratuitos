pessoas = []
ind = {}
resp = str('')
while True:
    ind['nome'] = str(input('Nome: ')).strip().capitalize()
    while True:
        ind['sexo'] = str(input('Sexo: [M/F] ')).strip().upper()[0]
        if ind['sexo'] in 'MF':
            break
        print('ERRO! Por favor, digite apenas M ou F.')
    ind['idade'] = int(input('Idade: '))
    pessoas.append(ind.copy())
    ind.clear()
    while True:
        resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
        if resp in 'SN':
            break
        print('ERRO! Responda apenas S ou N.')
    if resp == 'N':
        break
print('-=' * 30)
# print(pessoas)
nPessoas = len(pessoas)
print(f'A) Ao todo, temos {nPessoas} cadastradas.')
soma = 0
for p in pessoas:
    soma += p['idade']
média = soma / nPessoas
print(f'B) A média de idade é de {média:.2f} anos.')
print('C) As mulheres cadastradas foram', end='')
for p in pessoas:
    if p['sexo'] == 'F':
        print(f' [{p["nome"]}]', end='')
print()
print(f'D) Lista das pessoas que estão acima da média:')
for p in pessoas:
    if p['idade'] > média:
        print(f'    nome = {p["nome"]}; sexo = {p["sexo"]}; idade = {p["idade"]};')
print("<< ENCERrADO >>")
