salário = float(input('Qual é o salário do funcionário? R$'))
if salário <= 1250:
    novo = salário * 1.15
else:
    novo = salário * 1.10
print('Quem ganhava R${:.2f} passa a ganhar R${:.2f} agora.'.format(salário, novo))
