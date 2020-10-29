a = float(input('Primeiro segmento: '))
b = float(input('Segundo segmento: '))
c = float(input('Terceiro segmento: '))
# print(a, b, c)
if (a < b + c) and (b < a + c) and (c < a + b):
    triangulo = True
    parte1 = 'Os segmentos acima PODEM FORMAR um triângulo '
else:
    triangulo = False
    parte1 = 'Os segmentos acima NÃO PODEM FORMAR triângulo'
if triangulo:
    if a == b and b == c:
        parte2 = 'EQUILÁTERO!'
    elif a == b or b == c or a == c:
        parte2 = 'ISÓSCELES!'
    else:
        parte2 = 'ESCALENO!'
else:
    parte2 = '!'
msg = parte1 + parte2
print(msg)
