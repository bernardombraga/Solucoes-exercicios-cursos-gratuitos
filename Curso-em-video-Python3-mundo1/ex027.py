nome = str(input('Digite seu nome completo: '))
print('Muito prazer em te conhecer!')
partido = nome.split()
pnome = partido[0]
print('Seu primeiro nome é {}'.format(pnome))
npartes = len(partido)
unome = partido[npartes - 1]
print('Seu último nome é {}.'.format(unome))
