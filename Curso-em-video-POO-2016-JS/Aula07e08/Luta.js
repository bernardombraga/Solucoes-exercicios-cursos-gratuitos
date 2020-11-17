let divApp = window.document.getElementById("App")

export default class Luta {
    #desafiado
    #desafiante
    #rounds
    #aprovada

    constructor() {
        this.#desafiado = null
        this.#desafiante = null
        this.#rounds = null
        this.#aprovada = null
    }

    getDesafiado() {
        return this.#desafiado
    }
    setDesafiado(dd) {
        this.#desafiado = dd
    }
    getDesafiante() {
        return this.#desafiante
    }
    setDesafiante(dt) {
        this.#desafiante = dt
    }
    getRounds() {
        return this.#rounds
    }
    setRounds(r) {
        this.#rounds = r
    }
    getAprovada() {
        return this.#aprovada
    }
    setAprovada(a) {
        this.#aprovada = a
    }

    marcarLuta(l1, l2) {
        if (l1.getCategoria() === l2.getCategoria() && l1 !== l2) {
            this.#desafiado = l1
            this.#desafiante = l2
            this.#aprovada = true
        } else {
            this.#aprovada = false
        }
    }
    Lutar() {
        if (this.#aprovada) {
            this.#desafiado.apresentar()
            this.#desafiante.apresentar()
            divApp.innerHTML += "<hr>"
            let resultadoLuta = Math.floor(3*Math.random())
            switch (resultadoLuta) {
                case 0:
                    this.#desafiado.empatarLuta()
                    this.#desafiante.empatarLuta()
                    divApp.innerHTML += "Empate"
                    break;
                case 1:
                    this.#desafiado.ganharLuta()
                    this.#desafiante.perderLuta()
                    divApp.innerHTML += `${this.#desafiado.getNome()} venceu`
                    break;
                case 2:
                    this.#desafiado.perderLuta()
                    this.#desafiante.ganharLuta()
                    divApp.innerHTML += `${this.#desafiante.getNome()} venceu`
                    break;            
                default:
                    divApp.innerHTML += "Erro durante realização da luta."
                    break;
            }
        } else {
            divApp.innerHTML += "Luta não pode acontecer <br>"
        }
    }
}