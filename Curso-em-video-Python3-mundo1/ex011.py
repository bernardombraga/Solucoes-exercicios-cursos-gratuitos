msg1 = 'Largura da parede em metros: '
L = float(input(msg1))
msg2 = 'Altura da parede em metros: '
H = float(input(msg2))
A = L * H
V = A / 2
msg3 = 'Sua parede tem a dimensão de {}m x {}m e sua área é de {}m².'.format(L, H, A)
print(msg3)
msg4 = 'Para pintar essa parede, você precisa de {}L de tinta.'.format(V)
print(msg4)
