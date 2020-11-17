let divApp = window.document.getElementById("App")
divApp.innerHTML += "<h1>Livros e seus donos</h1>"

let p1 = new Pessoa("João", 20, "Masculino")
let p2 = new Pessoa("Maria", 30, "Feminino")

let l1 = new Livro("Receitas", "Ana Maria Braga", 200, p1)
divApp.innerHTML += l1.detalhes()