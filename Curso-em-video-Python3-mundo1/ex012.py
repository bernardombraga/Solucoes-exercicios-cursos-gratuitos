msg1 = 'Qual é o preço do produto? R$'
inicial = float(input(msg1))
pct = 5
final = inicial * (100 - pct) / 100
msg2 = 'O produto que custava R${:.2f}, na promoção com desconto de {}% vai custar R${:.2f}.'.format(inicial, pct, final)
print(msg2)
