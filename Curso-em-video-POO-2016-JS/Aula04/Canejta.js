class Caneta {
    #modelo
    #cor
    #ponta
    #tampada

    constructor(m, c, p) {
        this.setModelo(m)
        this.setCor(c)
        this.setPonta(p)
        this.tampar()
    }

    getModelo() {
        return this.#modelo
    }
    setModelo(m) {
        this.#modelo = m
    }
    getCor() {
        return this.#cor
    }
    setCor(c) {
        this.#cor = c
    }
    getPonta() {
        return this.#ponta
    }
    setPonta(p) {
        this.#ponta = p
    }
    tampar() {
        this.#tampada = true
    }
    destampar() {
        this.#tampada = false
    }
}