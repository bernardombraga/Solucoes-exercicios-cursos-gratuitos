import urllib
import urllib.request

try:
    site = urllib.request.urlopen('http://www.pudim.com.br/')
except urllib.error.URLError:
    print('O site Pudim não está acessível.')
else:
    print('Consegui acessar o site Pudim com sucesso.')
    print('Conteúdo HTML do site:')
    print(site.read())
