time = []
jogador = {}
while True:
    jogador['nome'] = str(input('Nome: ')).strip().capitalize()
    nPartidas = int(input(f'Quantas partidas {jogador["nome"]} jogou? '))
    jogador['gols'] = []
    for i in range(0, nPartidas):
        nGols = int(input(f'   Quantos gols na partida {i+1}? '))
        jogador['gols'].append(nGols)
    jogador['total'] = sum(jogador['gols'])
    time.append(jogador.copy())
    jogador.clear()
    while True:
        resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
        if resp in 'SN':
            break
        print('ERRO! Responda apenas S ou N.')
    if resp == 'N':
        break

print('-=' * 30)
print('-' * 40)
print('{:<3} {:<13} {:<15} {:<5}'.format("cod", "nome", "gols", "total"))
print('-' * 40)
for k, j in enumerate(time):
    print('{:>3} {:<13} {:<15} {:<5}'.format(k, j['nome'], str(j['gols']), j['total']))
print('-' * 40)
while True:
    cod = int(input('Mostrar dados de qual jogador? (999 para parar) '))
    if cod == 999:
        break
    if cod > len(time) - 1:
        print('ERRO! Não existe jogador com o código {}!'.format(cod))
    else:
        print(' -- LEVANTAMENTO DO JOGADOR {}'.format(time[cod]['nome']))
        for k, v in enumerate(time[cod]['gols']):
            print(f'    No jogo {k+1} fez {v} gols.')
    print('-' * 40)
print('<< VOLTE SEMPRE >>')
