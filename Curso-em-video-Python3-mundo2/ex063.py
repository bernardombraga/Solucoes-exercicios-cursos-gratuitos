linha1 = '-' * 30
print(linha1)
print('Sequência de Fibonacci')
print(linha1)
n = int(input('Quantos termos você quer mostrar? '))
ant2 = 0
ant1 = 1
termo = 0
i = 1
linha2 = '~' * 30
print(linha2)
while i <= n:
    print('{} → '.format(termo), end='')
    termo = ant1 + ant2
    ant2 = ant1
    ant1 = termo
    i += 1
print('FIM')
print(linha2)
