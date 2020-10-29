msg1 = 'Digite algo: '
algo = input(msg1)

msg2 = '\033[7:30m' + 'O tipo primitivo é:'
print(msg2, type(algo))

msg3 = 'Só tem espaço?'
print(msg3, algo.isspace())

msg4 = 'É um número?'
print(msg4, algo.isnumeric())

msg5 = 'É alfabético?'
print(msg5, algo.isalpha())

msg6 = 'É alfanumérico?'
print(msg6, algo.isalnum())

msg7  = 'Está em maiúsculo?'
print(msg7, algo.isupper())

msg8 = 'Está em minúsculo?'
print(msg8, algo.islower())

msg9 = 'Está capitalizado?'
print(msg9, algo.istitle())
