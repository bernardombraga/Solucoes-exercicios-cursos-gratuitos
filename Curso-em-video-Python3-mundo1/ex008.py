msg1 = 'Digite uma medida em metros: '
m = float(input(msg1))
km = m / 1000
hm = m / 100
dam = m / 10
dm = m * 10
cm = m * 100
mm = m * 1000
msg2 = 'A medida {0}m corresponde a: \n {1}km \n {2}hm \n {3}dam \n {4:.0f}dm \n {5:.0f}cm \n {6:.0f}mm'.format(m, km, hm, dam, dm, cm, mm)
print(msg2)
