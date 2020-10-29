msg1 = 'Quanto de dinheiro você tem na carteira? R$'
real = float(input(msg1))
dolar = real / 3.27
msg2 = 'Com R${:.2f} vcoê pode comprar US${:.2f}.'.format(real, dolar)
msg3 = 'Cotação considerada: US$1,00 = R$3,27.'
print(msg2)
print(msg3)
