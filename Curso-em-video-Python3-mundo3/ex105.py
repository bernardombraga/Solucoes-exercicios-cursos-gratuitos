def notas(* n, sit = False):
    """
    -> Analisa notas de um aluno e sua situação
    :param n: notas de alunos (pode ser vários valores)
    :param sit: se True, exibe situação do aluno
    :return: dicionário com análise da situação do aluno
    """
    r = {}
    total = 0
    maior = n[0]
    menor = n[0]
    soma = 0
    cont = 0
    média = 0
    for v in n:
        if v > maior:
            maior = v
        if v < menor:
            menor = v
        soma += v
        cont += 1
    média = soma / cont
    r = {"total": cont,
            "maior": maior,
            "menor": menor,
            "média": média}
    if sit == True:
        if média >= 7:
            r["situação"] = "BOA"
        elif média >= 5:
            r["situação"] = "RAZOÁVEL"
        else:
            r["situação"] = "RUIM"
    return r


# Programa principal
resp = {}
resp = notas(7, 4, 9, sit=True)
print(resp)
print()
# help(notas)
