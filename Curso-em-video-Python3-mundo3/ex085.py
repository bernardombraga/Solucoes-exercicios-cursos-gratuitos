todos = [[], []]
n = int(0)

for c in range(0, 7):
    n = int(input(f'Digite o {c+1}º valor: '))
    if n % 2 == 0:
        todos[0].append(n)
    else:
        todos[1].append(n)

print('-=' * 30)
todos[0].sort()
print('Os valores pares digitados foram:', todos[0])
todos[1].sort()
print('Os valores ímpares digitados foram:', todos[1])
