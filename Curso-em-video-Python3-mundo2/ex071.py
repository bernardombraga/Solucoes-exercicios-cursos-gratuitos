# Cédulas: R$50, R$20, R$10 e R$1
linha = '=' * 30
print(linha)
print('{:^30}'.format('Banco CEV'))
print(linha)
valor = int(input('Que valor você quer sacar? R$'))
sobra = valor
c50 = sobra // 50
sobra -= 50 * c50
c20 = sobra // 20
sobra -= 20 * c20
c10 = sobra // 10
sobra -= 10 * c10
c01 = sobra // 1
sobra -= 1 * c01
# print(valor, c50, c20, c10, c01, sobra)
if c50 != 0:
    print(f'Total de {c50} cédulas de R$50')
if c20 != 0:
    print(f'Total de {c20} cédulas de R$20')
if c10 != 0:
    print(f'Total de {c10} cédulas de R$10')
if c01 != 0:
    print(f'Total de {c01} cédulas de R$1')
print(linha)
print('Volte sempre ao BANCO CEV! Tenha um om dia!')
