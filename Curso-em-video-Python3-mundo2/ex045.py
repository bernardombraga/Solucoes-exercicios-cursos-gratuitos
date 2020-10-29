import random, time

msg1 = '''Suas opções:
[ 0 ] PEDRA
[ 1 ] PAPEL
[ 2 ] TESOURA'''
print(msg1)
msg2 = 'Qual é a sua jogada? '
options = ('PEDRA', 'PAPEL', 'TESOURA')
optPlayer = int(input(msg2))
player = options[optPlayer]

computer = str(random.choice(options))
# print(optPlayer, player,computer)

msg3 = 'JO'
msg4 = 'KEN'
msg5 = 'PO!!!'
# time.sleep(1)
print(msg3)
time.sleep(1)
print(msg4)
time.sleep(1)
print(msg5)

linha = '-=' * 13
print(linha)
msg6 = 'Computador jogou {}'.format(computer.capitalize())
print(msg6)
msg7 = 'Você jogou {}'.format(player.capitalize())
print(msg7)
print(linha)

if player == computer:
    msg8 = 'EMPATE'
elif (player == 'PEDRA' and computer == 'TESOURA') or (player == 'PAPEL' and computer == 'PEDRA') or (player == 'TESOURA' and computer == 'PAPEL'):
    msg8 = 'JOGADOR VENCE'
else:
    msg8 = 'COMPUTADOR VENCE'
print(msg8)
