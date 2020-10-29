from math import sqrt, pow, hypot
msg1 = 'Comprimento do cateto oposto: '
catop = float(input(msg1))
msg2 = 'Comprimento do cateto adjacente: '
catad = float(input(msg2))
# hip = sqrt(pow(catop, 2) + pow(catad, 2))
hip = hypot(catop, catad)
msg3 = 'A hipotenusa vai medir {:.2f}.'.format(hip)
print(msg3)
