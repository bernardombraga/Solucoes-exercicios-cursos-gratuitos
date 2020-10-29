msg1 = 'Qual é o salário do funcionário? R$'
salário1 = float(input(msg1))
pct = 15
salário2 = salário1 * (100 + pct) / 100
msg2 = 'Um funcionário que ganhava R${:.2f}, com {}% de aumento, passa a receber R${:.2f}.'.format(salário1, pct, salário2)
print(msg2)
