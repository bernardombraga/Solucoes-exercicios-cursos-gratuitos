palavras = ('aprender', 'programar', 'linguagem', 'phyton',
            'curso', 'gratis', 'estudar', 'praticar',
            'trabalhar', 'mercado', 'programador', 'futuro')
# print(palavras)
# vogais = ('a', 'e', 'i', 'o', 'u')
# print(vogais)
vogais = 'aeiou'
for palavra in palavras:
    print(f'Na palavra {palavra.upper()}, temos as vogais:', end='')
    for letra in palavra:
        if letra.lower() in vogais:
            print(f' {letra}', end='')
    print('')
