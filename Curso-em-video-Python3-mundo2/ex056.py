somaIdade = 0
nPessoas = 0
media = 0
nomeHMV = ''
idadeHMV = 0
nMM20 = 0
# HMV = homem mais velho
# MM20 = mulheres com menos de 20 anos

for i in range(0, 4):
    linha = '----- {}ª pessoa -----'.format(i+1)
    print(linha)
    nome = str(input('Nome: ')).strip().capitalize()
    idade = int(input('Idade: '))
    sexo = str(input('Sexo [M/F]: ')).strip().upper()
    somaIdade += idade
    nPessoas += 1
    if (sexo == 'M') and (idade > idadeHMV):
        idadeHMV = idade
        nomeHMV = nome
    if (sexo == 'F') and (idade < 20):
        nMM20 += 1
media = somaIdade / nPessoas
print('A média de idade do grupo é de {:.1f} anos.'.format(media))
print('O homem mais velho tem {} anos e se chama {}.'.format(idadeHMV, nomeHMV))
print('Ao todo, são {} mulheres com menos de 20 anos'.format(nMM20))
