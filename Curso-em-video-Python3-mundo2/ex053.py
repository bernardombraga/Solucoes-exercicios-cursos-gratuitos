lido = str(input('Digite uma frase: '))
fraseCEI = lido.strip().upper() # CEI = com espaço interno
# print(fraseCEI)
frasePartes = fraseCEI.split()
# print(frasePartes)
fraseSEI = ''.join(frasePartes) # SEI = sem espaço interno
# print(fraseSEI)
nLetras = len(fraseSEI)
# print(nLetras)
# print(fraseSEI[nLetras - 1])
fraseSEIinv = ''
for i in range(0, nLetras):
    fraseSEIinv = fraseSEIinv + fraseSEI[nLetras - 1 - i]
# fraseSEIinv = fraseSEI[::-1]
# print(fraseSEIinv)
print('O inverso de {} é {}.'.format(fraseSEI, fraseSEIinv))
if fraseSEI == fraseSEIinv:
    print('Temos um palíndromo!')
else:
    print('A frase digitada não é um palíndromo!')
