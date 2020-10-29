def fatorial(n=1, show=False):
    """
    -> Calcula fatorial de um número
    :param n: número inteiro informado
    :param show: mostrar cálculo
    :return: valor do fatorial
    """
    msg = ''
    f = 1
    for i in range(n, 0, -1):
        f *= i
        if show:
            if i != 1:
                msg += '{} x '.format(i)
            else:
                msg += '{} = {}'.format(i, f)
    if show:
        print(msg)
    return f


# Programa principal
print('-' * 30)
print(fatorial(5, True))
# print()
# help(fatorial)