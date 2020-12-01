import { Animal } from './Animal.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 
import { protectedCorPelo } from './symbolMamifero.js'

let divApp = window.document.getElementById("App")

export class Mamifero extends Animal {
    constructor() {
        super()
        this[protectedCorPelo] = null
    }

    getCorPelo() {
        return this[protectedCorPelo]
    }
    setCorPelo(c) {
        this[protectedCorPelo] = c
    }

    emitirSom() {
        divApp.innerHTML += "<p>Som de Mamifero</p>"
    }
}
