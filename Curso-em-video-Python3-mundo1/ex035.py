linha = '-=' * 20
msg1 = 'Analisador de Triângulos'
print(linha)
print(msg1)
print(linha)
a = float(input('Primeiro segmento: '))
b = float(input('Segundo segmento: '))
c = float(input('Terceiro segmento: '))
'''
min = a
if b < min:
    min = b
if c < min:
    min = c
max = a
if b > max:
    max = b
if c > max:
    max = c
int = a
if (b > min) and (b < max):
    int = b
if (c > min) and (c < max):
    int = c
# print(min, int, max)
if min + int > max:
    msg2 = 'Os segmentos acima PODEM FORMAR um triângulo.'
else:
    msg2 = 'Os segmentos acima NÃO PODEM FORMAR um triângulo.'
'''
if (a + b > c) and (a + c > b) and (b + c > a):
    msg2 = 'Os segmentos acima PODEM FORMAR um triângulo.'
else:
    msg2 = 'Os segmentos acima NÃO PODEM FORMAR um triângulo.'
print(msg2)
