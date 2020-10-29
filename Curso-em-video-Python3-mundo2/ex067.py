linha = '-' * 20
while True:
    n = int(input('Quer ver a tabuada de qual valor? '))
    if n < 0:
        break
    print(linha)
    for i in range(1, 11):
        res = n * i
        print(f'{n} x {i:2} = {res:2}')
    print(linha)
print(linha)
print('PROGRAMA TABUADA ENCERRADO. Volte sempre!')