class Aluno extends Pessoa {
    #matr
    #curso
    constructor() {
        super()
        this.#matr = null
        this.#curso = null
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

    cancelarMatr() {
        let divApp = window.document.getElementById("App")
        divApp.innerHTML += "<p>Matrícula será cancelada</p>"
    }
}