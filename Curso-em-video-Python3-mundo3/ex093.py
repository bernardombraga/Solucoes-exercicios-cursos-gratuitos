dados = {}
dados['nome'] = str(input('Nome: ')).strip().capitalize()
nPartidas = int(input(f'Quantas partidas {dados["nome"]} jogou? '))
dados['gols'] = []
for i in range(0, nPartidas):
    nGols = int(input(f'   Quantos gols na partida {i}? '))
    dados['gols'].append(nGols)
dados['total'] = sum(dados['gols'])
print('-=' * 30)
print(dados)
print('-=' * 30)
for k, v in dados.items():
    print(f'O campo {k} tem o valor {v}')
print('-=' * 30)
print(f'O jogador {dados["nome"]} jogou {nPartidas} partidas.')
for k, v in enumerate(dados['gols']):
    print(f'    => Na partida {k}, fez {v} gols.')
print(f'Foi um total de {dados["total"]} gols.')
