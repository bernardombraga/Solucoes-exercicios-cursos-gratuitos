msg1 = 'Informe a temperatura em ºC: '
C = float(input(msg1))
F = C * (9 / 5) + 32
msg2 = 'A temperatura de {}ºC corresponde a {}ºF!'.format(C, F)
print(msg2)
