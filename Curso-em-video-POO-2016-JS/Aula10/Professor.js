class Professor extends Pessoa {
    #especialidade
    #salario
    constructor() {
        super()
        this.#especialidade = null
        this.#salario = null
    }

    getEspecialidade() {
        return this.#especialidade
    }
    setEspecialidade(e) {
        this.#especialidade = e
    }
    getSalario() {
        return this.#salario
    }
    setSalario(s) {
        this.#salario = s
    }

    receberAum(a) {
        this.setSalario(this.getSalario() + a)
    }
}