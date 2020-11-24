import { Animal } from './Animal.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Peixe extends Animal {
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
        divApp.innerHTML += "<p>Nadando</p>"
    }
    alimentar() {
        divApp.innerHTML += "<p>Comendo substâncias</p>"
    }
    emitirSom() {
        divApp.innerHTML += "<p>Peixe não faz som</p>"
    }
    soltarBolha() {
        divApp.innerHTML += "<p>Soltou uma bolha</p>"
    }
}