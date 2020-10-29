import random
pc = random.randint(0, 10)
print('''Sou seu computador...
Acabei de pensar em um número entre 0 e 10.
Será que você consegue adivinhar qual foi?''')
player = int(input('Qual é seu palpite? '))
# print(pc, player)
tentativas = 1
while pc != player:
    if pc > player:
        print('Mais... Tente mais uma vez.')
        player = int(input('Qual é seu palpite? '))
    elif pc < player:
        print('Menos... Tente mais uma vez.')
        player = int(input('Qual é seu palpite? '))
    tentativas += 1
print('Acertou com {} tentativas. Parabéns!'.format(tentativas))
