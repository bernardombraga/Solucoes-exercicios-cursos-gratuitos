peso = float(input('Qual o seu peso? (kg) '))
altura = float(input('Qual a sua altura? (m) '))
imc = peso / altura ** 2
print('O IMC dessa pessoa é de {:.1f}.'.format(imc))
if imc < 18.5:
    print('Classificação: abaixo do peso.')
elif imc < 25:
    print('Classificação: peso ideal.')
elif imc < 30:
    print('Classificação: sobrepeso.')
elif imc < 40:
    print('Classificação: obesidade.')
else:
    print('Classificação: obesidade mórbida. ')