nome = resp = str('')
nota1 = nota2 = média = float(0)
i = nAluno = int(0)
dados = list()
aluno = list()
notas = list()
p = list()

while True:
    nome = str(input('Nome: ')).capitalize()
    nota1 = float(input('Nota 1: '))
    nota2 = float(input('Nota 2: '))
    notas = [nota1, nota2]
    média = (nota1 + nota2) / 2
    aluno = [nome, notas[:], média]
    dados.append(aluno[:])
    aluno.clear()
    resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if resp == 'N':
        break
# print(dados)
print('-=' * 30)
print('-' * 26)
print('{:<4}{:<10}{:>8}'.format('No.', 'NOME', 'MÉDIA'))
print('-' * 26)
for i, p in enumerate(dados):
    print('{:<4}{:<10}{:>8.1f}'.format(i, p[0], p[2]))
print('-' * 26)
print('-' * 35)
while True:
    nAluno = int(input('Mostrar notas de qual aluno? (999 interrompe): '))
    if nAluno == 999:
        break
    else:
        print(f'Notas de {dados[nAluno][0]} sao {dados[nAluno][1]}')
        print('-' * 35)
print('FINALIZANDO...')
print('<<< VOLTE SEMPRE >>>')