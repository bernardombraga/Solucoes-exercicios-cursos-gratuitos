completa = []
pares = []
ímpares = []
while True:
    n = int(input('Digite um número: '))
    completa.append(n)
    resp = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    if resp == 'N':
        break
for n in completa:
    if n % 2 == 0:
        pares.append(n)
    else:
        ímpares.append(n)
print('-=' * 30)
print('A lista completa é', completa)
print('A lista de pares é', pares)
print('A lista de ímpares é', ímpares)
