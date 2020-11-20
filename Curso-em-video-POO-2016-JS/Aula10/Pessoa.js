class Pessoa {
    #nome
    #idade
    #sexo
    constructor() {
        this.#nome = null
        this.#idade = null
        this.#sexo = null
    }

    getNome() {
        return this.#nome
    }
    setNome(n) {
        this.#nome = n
    }
    getIdade() {
        return this.#idade
    }
    setIdade(i) {
        this.#idade = i
    }
    getSexo() {
        return this.#sexo
    }
    setSexo(s) {
        this.#sexo = s
    }

    fazerAniv() {
        this.setIdade(this.getIdade() + 1)
    }
}