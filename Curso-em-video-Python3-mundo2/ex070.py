line = '-' * 30
print(line)
print('{:^30}'.format('LOJA SUPER BARATÃO'))
print(line)
total = more1000 = 0
productMaisBarato = ''
priceMaisBarato = 0
primeiraVez = True
while True:
    name = str(input('Nome do produto: '))
    price = float(input('Preço: R$'))
    moreProducts = ' '
    while moreProducts not in 'SN':
        moreProducts = str(input('Quer continuar? [S/N] ')).strip().upper()[0]
    total += price
    if price > 1000:
        more1000 += 1
    if primeiraVez:
        primeiraVez = False
        priceMaisBarato = price
        productMaisBarato = name
    else:
        if price < priceMaisBarato:
            priceMaisBarato = price
            productMaisBarato = name
    if moreProducts == 'N':
        break
print('{:-^30}'.format(' FIM DO PROGRAMA '))
print(f'O total da compra foi de {total}.')
print(f'Temos {more1000} que custa mais de R$1000.00')
print(f'O produto mais barato foi a {productMaisBarato} que custa R${priceMaisBarato:.2f}.')
