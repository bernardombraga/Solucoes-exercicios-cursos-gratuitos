v = float(input('Qual é a velocidade atual do carro em km/h? '))
vmax = 80
if v > vmax:
    print('MULTADO! Você excedeu o limite permitido que é de {}'.format(vmax))
    multa = 7 * (v - vmax)
    print('Você deve pagar uma multa de {:.2f}!'.format(multa))
print('Tenha um bom dia! Dirija com segurança!')
