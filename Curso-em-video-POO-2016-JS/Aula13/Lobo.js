import { Mamifero } from './Mamifero.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 
import { protectedCorPelo } from './symbolMamifero.js'

let divApp = window.document.getElementById("App")

export class Lobo extends Mamifero {
    emitirSom() {
        divApp.innerHTML += "<p>Auuuuuuuuu!</p>"
    }
}