import { Mamifero } from './Mamifero.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Canguru extends Mamifero {
    constructor() {
        super()
    }

    usarBolsa() {
        divApp.innerHTML += "<p>Usando a bolsa</p>"
    }
    locomover() {
        divApp.innerHTML += "<p>Saltando</p>"
    }
}