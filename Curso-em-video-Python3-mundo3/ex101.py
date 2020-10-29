def vota(anoN):
    """
    => Avalia condição de voto de uma pessoa
    :param anoN: ano de nascimento da pessoa
    :return: string com condiçõa do voto
    """
    from datetime import datetime
    anoA = datetime.today().year
    idade = anoA - anoN
    cond = f'Com {idade} ano(s): '
    if idade < 16:
        cond += 'NÃO VOTA.'
    elif idade < 18 or idade > 65:
        cond += 'VOTO OPCIONAL.'
    else:
        cond += 'VOTO OBRIGATÓRIO.'
    return cond


# Programa principal
print('-' * 30)
ano = int(input('Em que ano você nasceu? '))
print(vota(ano))
# help(vota)
