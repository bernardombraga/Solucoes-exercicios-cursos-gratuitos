times = ('Corinthias', 'Palmeiras', 'Santos', 'Grêmio',
         'Cruzeiro', 'Flamengo', 'Vasco', 'Chapecoense',
         'Atléico-MG', 'Botafogo', 'Atlético-PR', 'Bahia',
         'São Paulo', 'Fluminense', 'Sport Recife',
         'EC Vitória', 'Coritiba', 'Avaí','Ponte Preta',
         'Atlético-GO')
# print(times)
linha = '-=' * 15
print(linha)
print('Lista de times do Brasileirão:', times)
print(linha)
print('Os 5 primeiros são:', times[:5])
print(linha)
print('Os 4 últimos são:', times[-4:])
print(linha)
print('Times em ordem alfabética:', sorted(times))
print(linha)
posChap = times.index('Chapecoense') + 1
print(f'O Chapecoense está na {posChap}ª posição.')