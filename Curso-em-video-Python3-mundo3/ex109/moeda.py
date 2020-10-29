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
