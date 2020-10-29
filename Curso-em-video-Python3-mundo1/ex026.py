lido = str(input('Digite uma frase: '))
frase = lido.strip().upper()
letra = 'A'
nletra = frase.count(letra)
print('A letra {} aparece {} na frase.'.format(letra, nletra))
pvezletra = frase.find(letra) + 1
print('A primeira letra {} aparece na posição {}.'.format(letra, pvezletra))
uvezletra = frase.rfind(letra) + 1
print('A última letra {} aparece na posição {}.'.format(letra, uvezletra))
