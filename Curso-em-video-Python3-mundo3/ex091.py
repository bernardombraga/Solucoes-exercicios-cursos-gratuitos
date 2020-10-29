from random import randint
from time import sleep
from operator import itemgetter
res = {}
ranking = []
'''
res['jogador1'] = randint(1, 6)
res['jogador2'] = randint(1, 6)
res['jogador3'] = randint(1, 6)
res['jogador4'] = randint(1, 6)
'''
for i in range(1, 5):
    res[f'jogador{i}'] = randint(1, 6)
print('Valores sorteados:')
for k, v in res.items():
    print(f'{k} tirou {v} no dado.')
    sleep(1)
print('-=' * 30)
ranking = sorted(res.items(), key=itemgetter(1), reverse=True)
print('  == RANKING DOS JOGADORES ==')
# print(ranking)
for i, v in enumerate(ranking):
    print(f'   {i+1}º lugar: {v[0]} com {v[1]}.')
    sleep(1)

