linha = '-' * 30
totMais18 = 0
totHomens = 0
totMulherMenos20 = 0
while True:
    print(linha)
    print('{:^30}'.format('CADASTRE UMA PESSOA'))
    print(linha)
    idadeTXT = ' '
    while not idadeTXT.isnumeric():
        idadeTXT = str(input('Idade: '))
    idade = int(idadeTXT)
    sexo = ' '
    while sexo not in 'MF':
        sexo = str(input('Sexo: [M/F] ')).strip().upper()[0]
    if idade > 18:
        totMais18 += 1
    if sexo == 'M':
        totHomens += 1
    if (sexo == 'F' and idade < 20):
        totMulherMenos20 += 1
    continuar = ' '
    while continuar not in 'SN':
        continuar = str(input('Deseja continuar? [S/N?] ')).strip().upper()[0]
    if continuar == 'N':
        break
print(linha)
print('Total de pessoas com mais de 18:', totMais18)
print('Ao todo, temos {} homens cadastrados'.format(totHomens))
print(f'E temos {totMulherMenos20} mulheres com menos de 20 anos')
