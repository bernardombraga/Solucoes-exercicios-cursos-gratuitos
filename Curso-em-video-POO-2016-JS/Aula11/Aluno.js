class Aluno extends Pessoa {
    #matr
    #curso
    constructor() {
        super()
        this.#matr = null
        this.#curso = null

        // Impede que classe seja estendida
        /*
        if (this.constructor !== Aluno) {
            throw new Error("Não é possível estender uma classe final.")
        }
        */
    }

    getMatr() {
        return this.#matr
    }
    setMatr(m) {
        this.#matr = m
    }
    getCurso() {
        return this.#curso
    }
    setCurso(c) {
        this.#curso = c
    }

    pagarMensalidade() {
        let divApp = window.document.getElementById("App")
        divApp.innerHTML += `<hr> <p>Valor pago por aluno(a) ${this.getNome()}: R$2000,00</p>`
    }

    //fazerAniv() {
    //    console.log("Parabens!")
    //}
}