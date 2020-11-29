import { Reptil } from './Reptil.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

let divApp = window.document.getElementById("App")

export class Tartaruga extends Reptil {
    locomover() {
        divApp.innerHTML += "Andando beeeeem devagar"        
    }
}