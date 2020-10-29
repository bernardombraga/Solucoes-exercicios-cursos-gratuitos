import random, time

linha = ('-=-' * 20)
print(linha)
msg1 = 'Vou pensar em um número entre 0 e 5. Tente adivinhar...'
print(msg1)
# print(len(msg1))
print(linha)

msg2 = 'Em que número eu pensei? '
num1 = int(input(msg2))

msg3 = 'PROCESSANDO...'
print(msg3)
num2 = random.randint(0, 5)
time.sleep(3)

if num1 == num2:
    msg3 = 'PARABÉNS! Você conseguiu me vencer!'
else:
    msg3 = 'GANHEI! Eu pensei no número {} e não no {}!'.format(num2, num1)
print(msg3)
# rint(num1, num2)
