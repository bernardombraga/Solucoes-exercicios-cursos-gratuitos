class Funcionario extends Pessoa {
    #setor
    #trabalhando
    constructor() {
        super()
        this.#setor = null
        this.#trabalhando = null
    }

    getSetor() {
        return this.#setor
    }
    setSetor(s) {
        this.#setor = s
    }
    getTrabalhando() {
        return this.#trabalhando
    }
    setTrabalhando(t) {
        this.#trabalhando = t
    }

    mudarTrabalho() {
        this.setTrabalhando(! this.getTrabalhando())
    }
}