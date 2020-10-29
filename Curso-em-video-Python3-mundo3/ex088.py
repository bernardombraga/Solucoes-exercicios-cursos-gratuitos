from random import randint
from time import sleep
linha = '-' * 30
nJogos = i = n = int(0)
jogo = []
tudo = []

print(linha)
print('{:^30}'.format('JOGA NA MEGA SENA'))
print(linha)
nJogos = int(input('Quantos jogos você quer que eu sorteie? '))
print(f'-=-=-= SORTEANDO {nJogos} JOGOS -=-=-=')
for i in range(1, nJogos + 1):
    while True:
        n = randint(1, 60)
        if n not in jogo:
            jogo.append(n)
        if len(jogo) == 6:
            jogo.sort()
            sleep(1)
            print(f'Jogo {i}:', jogo)
            break
    tudo.append(jogo[:])
    jogo.clear()
print('-=' * 5 + ' < BOA SORTE! > ' + '-=' * 5)
