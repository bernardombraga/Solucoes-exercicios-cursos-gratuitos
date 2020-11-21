class Pessoa {
    #nome
    #idade
    #sexo
    constructor() {
        this.#nome = null
        this.#idade = null
        this.#sexo = null

        // Impede instanciamento da classe
        if (new.target === Pessoa) {
            throw new Error("Não se pode instanciar uma classe abstrata.")
        }

        // Impede que o método fazerAniv seja sobresscrito
        if (this.constructor !== Pessoa) {
            // console.log("Classe filha")
            // console.log(this.fazerAniv)
            // console.log(this.__proto__.__proto__.fazerAniv)
            if (this.fazerAniv.toString() !== this.__proto__.__proto__.fazerAniv.toString()) {
                throw new Error("Não se pode sobrescrever um método final.")
            }
        }
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