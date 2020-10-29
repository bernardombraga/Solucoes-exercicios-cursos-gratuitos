# msg1 = '=' * 11 + " LOJAS GUANABARA " + '=' * 11
msg1 = '{:=^40}'.format(' LOJAS GUANABARA ')
print(msg1)
msg2 = 'Preço das compras: R$'
preço = float(input(msg2))
msg3 = '''FORMAS DE PAGAMENTO:
[ 1 ] à vista dinheiro/cheque
[ 2 ] à vista no cartão
[ 3 ] 2x no cartão
[ 4 ] 3x ou mais no cartão'''
print(msg3)
msg4 = 'Qual é a opção? '
opção = int(input(msg4))

if opção == 1:
    pctDesc = 10
    final = preço * (1 - pctDesc/100)
    msgFinal = 'Sua compra de R${:.2f} vai custar R${:.2f} no final.'.format(preço, final)
elif opção == 2:
    pctDesc = 5
    final = preço * (1 - pctDesc/100)
    msgFinal = 'Sua compra de R${:.2f} vai custar R${:.2f} no final.'.format(preço, final)
elif opção == 3:
    nVezes = 2
    parcela = preço / nVezes
    final = preço
    msgFinal = 'Sua compra será parcelada em {}x de R${:.2f} SEM JUROS\nSua compra de R${:.2f} vai custar R${:.2f} no final.'.format(nVezes, parcela, preço, final)
elif opção == 4:
    msg5 = 'Quantas parcelas? '
    nVezes = int(input(msg5))
    pctJuros = 20
    parcela = preço / nVezes
    final = preço * (1 + pctJuros / 100)
    msgFinal = 'Sua compra será parcelada em {}x de R${:.2f} COM JUROS\nSua compra de R${:.2f} vai custar R${:.2f} no final.'.format(nVezes, parcela, preço, final)
else:
    msgFinal = 'Opção inválida. Tente novamente.'
print(msgFinal)