print('Gerador de PA')
print('-=' * 10)
a1 = int(input('Primeiro termo: '))
r = int(input('Razão da PA: '))
i = 1
ai = a1
while i <= 10:
    print('{} → '.format(ai), end='')
    ai += r
    i += 1
print('FIM')