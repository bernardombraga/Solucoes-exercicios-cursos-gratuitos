# a = [0] * 5
# print(a)
lido = str(input('Digite a expressão: '))
partido = lido.split()
unido = ''.join(partido)
nAbre = unido.count('(')
nFecha = unido.count(')')
erro = False
if nAbre != nFecha:
    erro = True
else:
    contAbre = 0
    contFecha = 0
    tamanho = len(unido)
    for i in range(0, tamanho):
        if unido[i] == '(':
            contAbre += 1
        if unido[i] == ')':
            contFecha += 1
        if contFecha > contAbre:
            erro = True
    abreErros = ('(+', '(-', '(*', '(/')
    fechaErros = ('+)', '-)', '*)', '/)')
    for i in range(0, tamanho-1):
        # print(unido[i:i+2])
        if unido[i:i+2] in abreErros or unido[i:i+2] in fechaErros:
            erro = True
if erro:
    print('Sua expressão está errada!')
else:
    print('Sua expressão está válida!')
