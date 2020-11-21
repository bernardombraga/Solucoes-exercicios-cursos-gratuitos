class Bolsista extends Aluno {
    #bolsa
    constructor() {
        super()
        this.#bolsa = 0
    }

    getBolsa() {
        return this.#bolsa
    }
    setBolsa(b) {
        this.#bolsa = b
    }

    renovarBolsa() {
        let divApp = window.document.getElementById("App")
        divApp.innerHTML += "<hr> <p> Bolsa renovada</p>"
    }
    pagarMensalidade() {
        let valorPago = 2000 * (1 - this.getBolsa() / 100)
        divApp.innerHTML += `<hr> Valor pago por aluno(a) ${this.getNome()} com bolsa de ${this.getBolsa()}%: R$${valorPago.toFixed(2).replace(".", ",")}`
    }
}