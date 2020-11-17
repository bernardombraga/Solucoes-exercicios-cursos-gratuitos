class Livro extends interfacePublicacao {
    #titulo
    #autor
    #totalPaginas
    #paginaAtual
    #aberto
    #leitor
    constructor(titulo, autor, totalPaginas, leitor) {
        super()
        this.#titulo = titulo
        this.#autor = autor
        this.#totalPaginas = totalPaginas
        this.#paginaAtual = 0
        this.#aberto = false
        this.#leitor = leitor
    }

    detalhes() {
        let htmlDetalhes = "<h2>Detalhes do livro</h2>"
        htmlDetalhes += `<p>Nome: </p>`
        htmlDetalhes += `<p>Autor: </p>`
        htmlDetalhes += `<p>Autor: </p>`
        htmlDetalhes += `<p>Total de páginas: </p>`
        htmlDetalhes += `<p>Págiana atual: </p>`
        htmlDetalhes += `<p>Total de págians: </p>`
        htmlDetalhes += `<p>Aberto: </p>`
        htmlDetalhes += `<p>Leitor: </p>`
        return htmlDetalhes
    }

    abrir() {

    }
    fechar() {

    }
    folhear() {

    }
    avancarPag() {

    }
    voltarPag() {

    }
}