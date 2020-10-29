i = 0
s = 0
while True:
    n = int(input('Digite um número (999 para parar): '))
    if n == 999:
        break
    i += 1
    s += n
print(f'A soma dos {i} valores foi {s}!')
