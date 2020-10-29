import math
msg1 = 'Digite o ângulo que você deseja em graus: '
anggrau = float(input(msg1))
angrad = math.radians(anggrau)
sen = math.sin(angrad)
cos = math.cos(angrad)
tan = math.tan(angrad)
msg2 = 'O ângulo de {}º tem o seno de {:.2f}.'.format(anggrau, sen)
print(msg2)
msg3 = 'O ângulo de {}º tem o cosseno de {:.2f}.'.format(anggrau, cos)
print(msg3)
msg4 = 'O ângulo de {}º tem a tangente de {:.2f}.'.format(anggrau, tan)
print(msg4)
