msg1 = 'Valor da casa: R$'
preco = float(input(msg1))
msg2 = 'Salário do comprador: R$'
salario = float(input(msg2))
msg3 = 'Quantos anos de financiamento? '
anos = int(input(msg3))

prestacao = preco / (12 * anos)
msg4 = 'Para pagar uma casa de R${:.2f} em {} anos, a prestação será de R${:.2f}.'.format(preco, anos, prestacao)
print(msg4)

maximo = 0.3 * salario
if prestacao <= maximo:
    msg5 = 'Empréstimo pode ser CONCEDIDO!'
else:
    msg5 = 'Empréstimo NEGADO!'
print(msg5)
# print(maximo, prestacao)
