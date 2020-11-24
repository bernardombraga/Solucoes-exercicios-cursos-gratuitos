import { Animal } from './Animal.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Ave extends Animal {
    #corPena
    constructor() {
        super()
        this.#corPena = null
    }

    getCorPena() {
        return this.#corPena
    }
    setCorPena(p) {
        this.#corPena = p
    }

    locomover() {
        divApp.innerHTML += "<p>Voando</p>"
    }
    alimentar() {
        divApp.innerHTML += "<p>Comendo frutas</p>"
    }
    emitirSom() {
        divApp.innerHTML += "<p>Som de Ave</p>"
    }
}
