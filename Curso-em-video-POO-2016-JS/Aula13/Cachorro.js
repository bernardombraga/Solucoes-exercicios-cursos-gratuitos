import { Lobo } from './Lobo.js'
import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 
import { protectedCorPelo } from './symbolMamifero.js'

let divApp = window.document.getElementById("App")

export class Cachorro extends Lobo {
    emitirSom() {
        divApp.innerHTML += "<p>Au! Au! Au!</p>"
    }

    reagir(p1, p2) {
        if (typeof(p1) === "string" && typeof(p2) === "undefined") {
            let frase = p1
            if (frase === "Toma comida" || frase === "Olá") {
                divApp.innerHTML += "<p>Abanar e Latir</p>"
            } else {
                divApp.innerHTML += "<p>Rosnarr</p>"
            }
        }
        else if (Number.isInteger(p1) === true && Number.isInteger(p2) === true) {
            let hora = p1
            let min = p2
            if (hora < 12) {
                divApp.innerHTML += "<p>Abanar</p>"
            } else if (hora >= 19) {
                divApp.innerHTML += "<p>Ignorar</p>"
            } else {
                divApp.innerHTML += "<p>Abanar e Latir</p>"
            }
        }        
        else if (typeof(p1) === "boolean" && typeof(p2) === "undefined") {
            let dono = p1
            if (dono === true) {
                divApp.innerHTML += "<p>Abanar</p>"
            } else {
                divApp.innerHTML += "<p>Rosnar e Latir</p>"
            }
        }
        else if (Number.isInteger(p1) && typeof(p2) === "number" && Number.isInteger(p2) === false) {
            let idade = p1
            let peso = p2
            if (idade < 5) {
                if (peso < 10) {
                    divApp.innerHTML += "<p>Abanar</p>"
                } else {
                    divApp.innerHTML += "<p>Latir</p>"
                }
            } else {
                if (peso < 10) {
                    divApp.innerHTML += "<p>Rosnar</p>"
                } else {
                    divApp.innerHTML += "<p>Ignorar</p>"
                }
            }
        } else {
            throw new Error("Parâmetro inválido para método 'reagir'")
        }
    }
}