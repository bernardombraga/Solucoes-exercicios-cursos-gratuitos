import { Animal } from './Animal.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Mamifero extends Animal {
    #corPelo
    constructor() {
        super()
        this.#corPelo = null
    }

    getCorPelo() {
        return this.#corPelo
    }
    setCorPelo(c) {
        this.#corPelo = c
    }

    locomover() {
        divApp.innerHTML += "<p>Correndo</p>"
    }
    alimentar() {
        divApp.innerHTML += "<p>Mamando</p>"
    }
    emitirSom() {
        divApp.innerHTML += "<p>Som de Mamifero</p>"
    }
}
