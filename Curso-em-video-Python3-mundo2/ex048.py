n = 0
s = 0
for i in range(3, 500, 3):
    if i % 2 == 1:
        n = n + 1
        s = s + i
print('A soma dos {} valores solicitados é {}.'.format(n, s))
