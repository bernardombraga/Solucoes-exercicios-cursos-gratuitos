class Pessoa {
    #nome
    #idade
    #sexo
    constructor(nome, idade, sexo) {
        this.#nome = nome
        this.#idade = idade
        this.#sexo = sexo
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

    fazerAniver() {
        this.setIdade(this.getIdade() + 1)
    }
}