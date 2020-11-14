import { interfaceControlador } from './interfaceControlador.js'
let divApp = window.document.getElementById("App")

export default class ControleRemoto extends interfaceControlador {
    #volume
    #ligado
    #tocando

    constructor() {
        super()
        this.#setVolume(50)
        this.#setLigado(false)
        this.#setTocando(false)
    }

    ligar() {
        this.#setLigado(true)
    }
    desligar() {
        this.#setLigado(false)
    }
    abrirMenu() {
        divApp.innerHTML = ""
        divApp.innerHTML += `<h2>Menu</h2>`
        divApp.innerHTML += `Ligado: ${this.#getLigado() ? "Sim" : "Não"} <br>`
        divApp.innerHTML += `Volume: ${this.#getVolume()} `
        for (let i = 0; i < this.#getVolume(); i = i + 10) {
            divApp.innerHTML += "|"
        }
        divApp.innerHTML += "<br>"
        divApp.innerHTML += `Tocando: ${this.#getTocando() ? "Sim" : "Não"} <br>`
    }
    fecharMenu() {
        let msgFechando = "<br> <strong>Fechando o menu...</strong>"
        if (divApp.innerHTML !== "") {
            divApp.innerHTML += msgFechando
            setTimeout(() => divApp.innerHTML = "", 3000)
        }
    }
    maisVolume() {
        if (this.#getLigado()) {
            this.#setVolume(this.#getVolume() + 1)
        }
    }
    menosVolume() {
        if (this.#getLigado()) {
            this.#setVolume(this.#getVolume() - 1)
        }
    }
    ligarMudo() {
        if (this.#getLigado() && this.#getVolume() !== 0) {
            this.#setVolume(0)
        }
    }
    desligarMudo() {
        if (this.#getLigado() && this.#getVolume() === 0) {
            this.#setVolume(50)
        }
    }
    play() {
        if (this.#getLigado() && !this.#getTocando()) {
            this.#setTocando(true)
        }
    }
    pause() {
        if (this.#getLigado() && this.#getTocando()) {
            this.#setTocando(false)
        }
    }

    #getVolume() {
        return this.#volume
    }
    #setVolume(v) {
        this.#volume = v
    }
    #getLigado() {
        return this.#ligado
    }
    #setLigado(l) {
        this.#ligado = l
    }
    #getTocando() {
        return this.#tocando
    }
    #setTocando(t) {
        this.#tocando = t
    }
}