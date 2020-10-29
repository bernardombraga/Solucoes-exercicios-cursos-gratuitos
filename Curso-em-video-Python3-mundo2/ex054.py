from datetime import datetime, date
# print(datetime.today())
# print(date.today())
anoA = datetime.today().year
nMenor = 0
nMaior = 0
for i in range(0, 7):
    msg1 = 'Em que ano a {}ª pessoa nasceu? '.format(i+1)
    anoN = int(input(msg1))
    idade = anoA - anoN
    if idade < 21:
        nMenor += 1
    else:
        nMaior += 1
print('')
print('Ao todo, tivemos {} pessoas maiores de idade.'.format(nMaior))
print('E também tivemos {} pessoas menores de idade.'.format(nMenor))
