import { Animal } from './Animal.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Reptil extends Animal {
    #corEscama
    constructor() {
        super()
        this.#corEscama = null
    }

    getCorEscama() {
        return this.#corEscama
    }
    setCorEscama(e) {
        this.#corEscama = e
    }

    locomover() {
        divApp.innerHTML += "<p>Rastejando</p>"
    }
    alimentar() {
        divApp.innerHTML += "<p>Comendo vegetais</p>"
    }
    emitirSom() {
        divApp.innerHTML += "<p>Som de Réptil</p>"
    }
}
