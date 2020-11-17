let divApp = window.document.getElementById("App")
divApp.innerHTML += "<h1>Livros e seus donos</h1>"

let p1 = new Pessoa("João", 20, "Masculino")
let p2 = new Pessoa("Maria", 30, "Feminino")

let l1 = new Livro("Receitas Mais Você", "Ana Maria Braga", 200, p1)
l1.abrir()
l1.fechar()
l1.abrir()
l1.folhear(100)
l1.avancarPag()
l1.voltarPag()
l1.voltarPag()
divApp.innerHTML += l1.detalhes()