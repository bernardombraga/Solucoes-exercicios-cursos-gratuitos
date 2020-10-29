def metade(x=0, formatar=False):
    res = x / 2
    if formatar:
        return moeda(res)
    else:
        return res


def dobro(x=0, formatar=False):
    res = 2 * x
    if formatar:
        return moeda(res)
    else:
        return res


def aumentar(x=0, y=0, formatar=False):
    res = x * (1 + y / 100)
    if formatar:
        return moeda(res)
    else:
        return res


def reduzir(x=0, y=0, formatar=False):
    res = x * (1 - y / 100)
    if formatar:
        return moeda(res)
    else:
        return res


def moeda(x=0, m='R$'):
    res = f'{m}{x:.2f}'.replace('.', ',')
    return res

def resumo(x=0, a=0, r=0):
    linha = '-' * 30
    print(linha)
    print('{:^30}'.format('RESUMO DO VALOR'))
    # print('RESUMO DO VALOR'.center(30))
    print(linha)
    print(' {:<17}{:>11}'.format('Preço analisado:', moeda(x)))
    print(' {:<17}{:>11}'.format('Dobro do preço:', dobro(x, True)))
    print(' {:<17}{:>11}'.format('Metade do preço:', metade(x, True)))
    print(' {:>2}{:<15}{:>11}'.format(a, '% de aumento:', aumentar(x, a, True)))
    print(' {:>2}{:<15}{:>11}'.format(r, '% de redução:', reduzir(x, r, True)))
    '''
    print(f' Preço analisado: \t{moeda(x)}')
    print(f' Dobro do preço: \t{dobro(x, True)}')
    print(f' Metade do preço: \t{metade(x, True)}')
    print(f' {a}% de aumento: \t{aumentar(x, a, True)}')
    print(f' {r}% de redução: \t{reduzir(x, r, True)}')
    '''
    print(linha)
