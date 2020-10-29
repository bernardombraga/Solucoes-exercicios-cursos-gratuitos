lido = str(input('Informe seu sexo [M/F]: '))
sexo = lido.strip().upper()[0]
# while sexo != 'M' and sexo != 'F':
while sexo not in 'M F':
    if sexo != 'M' and sexo != 'F':
        lido = str(input('Dados inválidos. Por favor, invorme seu sexo [M/F]: '))
        sexo = lido.strip().upper()[0]
print('Sexo {} registrado com sucesso.'.format(sexo))
