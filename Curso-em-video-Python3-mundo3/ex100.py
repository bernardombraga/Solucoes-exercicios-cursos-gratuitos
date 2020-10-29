from time import sleep
from random import randint

def sortear(lista, n):
    print(f'Sortenado {n} valores da lista: ', end='')
    for i in range(0, n):
        lista.append(randint(1, 10))
        sleep(0.3)
        print(f'{lista[i]} ', end='')
    print('PRONTO!')

def somapares(lista):
    s = 0
    for i in lista:
        if i % 2 == 0:
            s += i
    print(f'Somando os valores pares de {lista}, temos {s}.')


# Programa principal
valores = []
sortear(valores, 5)
somapares(valores)
