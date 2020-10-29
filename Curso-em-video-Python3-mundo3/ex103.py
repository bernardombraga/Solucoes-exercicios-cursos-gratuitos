def jogador(nom="<desconhecido>", nG=0):
    print(f'O jogador {nom} fez {nG} gol(s) no compeonato.')


# Programa principal:
print('-' * 30)
nome = str(input('Nome do jogador: ')).strip().capitalize()
nGols = str(input('Número de gols: ')).strip()
if nome == '' and not nGols.isnumeric():
    jogador()
elif nome == '':
    jogador(nG=nGols)
elif not nGols.isnumeric():
    jogador(nom=nome)
else:
    jogador(nome, nGols)
