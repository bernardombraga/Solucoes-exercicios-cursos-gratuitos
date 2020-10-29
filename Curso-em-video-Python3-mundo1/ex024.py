entrada = str(input('Em que cidade você nasceu? '))
cidade = entrada.strip().lower()
partido = cidade.split()
pnome = partido[0]
santo = (pnome == 'santo')
print(santo)