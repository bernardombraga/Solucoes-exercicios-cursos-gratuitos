nome = str(input('Digite seu nome completo: '))
nome = nome.strip()
print('Analisando seu nome...')
maiusculo = nome.upper()
print('Seu nome em maiúsculas é {}.'.format(maiusculo))
minusculo = nome.lower()
print('Seu nome em minúsculas é {}.'.format(minusculo))
partido = nome.split()
juntado = ''.join(partido)
nletrasnome = len(juntado)
print('Seu nome tem ao todo {} letras.'.format(nletrasnome))
pnome = partido[0]
nletraspnome = len(pnome)
print('Seu primeiro nome é {} e ele tem {} letras.'.format(pnome, nletraspnome))
