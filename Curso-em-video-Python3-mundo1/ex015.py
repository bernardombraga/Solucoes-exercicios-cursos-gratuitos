msg1 = 'Quantos dias alugados? '
dias = int(input(msg1))
msg2 = 'Quantos km rodados? '
km = float(input(msg2))
valor = 60 * dias + 0.15 * km
msg3 = 'O total a pagar é de R${:.2f}.'.format(valor)
print(msg3)
