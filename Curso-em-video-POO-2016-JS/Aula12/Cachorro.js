import { Mamifero } from './Mamifero.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Cachorro extends Mamifero {
    constructor() {
        super()
    }

    enterrarOsso() {
        divApp.innerHTML += "<p>Enterrando osso</p>"
    }
    abanarRabo() {
        divApp.innerHTML += "<p>Abanando o rabo</p>"
    }

    emitirSom() {
        divApp.innerHTML += "<p>Au! Au! Au!</p>"
    }
}