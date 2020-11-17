class Livro extends interfacePublicacao {
    #titulo
    #autor
    #totalPaginas
    #paginaAtual
    #aberto
    #leitor
    constructor(titulo, autor, totalPaginas, leitor) {
        super()
        this.setTitulo(titulo)
        this.setAutor(autor)
        this.setTotalPaginas(totalPaginas)
        this.setPaginaAtual(0)
        this.setAberto(false)
        this.setLeitor(leitor)
    }

    getTitulo() {
        return this.#titulo
    }
    setTitulo(ti) {
        this.#titulo = ti
    }
    getAutor() {
        return this.#autor
    }
    setAutor(au) {
        this.#autor = au
    }
    getTotalPaginas() {
        return this.#totalPaginas
    }
    setTotalPaginas(tp) {
        this.#totalPaginas  = tp
    }
    getPaginaAtual() {
        return this.#paginaAtual
    }
    setPaginaAtual(pa) {
        this.#paginaAtual = pa
    }
    getAberto() {
        return this.#aberto
    }
    setAberto(ab) {
        this.#aberto = ab
    }
    getLeitor() {
        return this.#leitor
    }
    setLeitor(lt) {
        this.#leitor = lt
    }

    detalhes() {
        let htmlDetalhes = "<h2>Detalhes do livro</h2>"
        htmlDetalhes += `<p>Nome: ${this.getTitulo()}</p>`
        htmlDetalhes += `<p>Autor: ${this.getAutor()}</p>`
        htmlDetalhes += `<p>Total de páginas: ${this.getTotalPaginas()}</p>`
        htmlDetalhes += `<p>Págiana atual: ${this.getPaginaAtual()}</p>`
        htmlDetalhes += `<p>Aberto: ${this.getAberto() ? "Sim" : "Não"}</p>`
        htmlDetalhes += `<p>Leitor: ${this.getLeitor().getNome()}, ${this.getLeitor().getIdade()} anos, do sexo ${this.getLeitor().getSexo().toLowerCase()}</p>`
        return htmlDetalhes
    }

    abrir() {
        this.setAberto(true)
    }
    fechar() {
        this.setAberto(false)
    }
    folhear(pagina) {
        if (pagina >= 0 && pagina <= this.getTotalPaginas()) {
            this.setPaginaAtual(pagina)
        } else {
            this.setPaginaAtual(0)
        }
    }
    avancarPag() {
        if (this.getPaginaAtual() < this.getTotalPaginas()) {
            this.setPaginaAtual(this.getPaginaAtual() + 1)
        } else {
            this.setPaginaAtual(0)
        }
    }
    voltarPag() {
        if (this.getPaginaAtual() > 0) {
            this.setPaginaAtual(this.getPaginaAtual() - 1)
        } else {
            this.setPaginaAtual(0)
        }
    }
}