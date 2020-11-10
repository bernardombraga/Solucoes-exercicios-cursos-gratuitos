import { protectedCarga, protectedTampada } from './symbols.js'

export default class Caneta {
    #ponta

    constructor() {
        this.modelo = undefined
        this.cor = undefined
        this.#ponta = undefined
        this[protectedCarga] = undefined      
        this[protectedTampada] = undefined
    }
    
    rabiscar() {
        if (this[protectedTampada] === true) {
            window.document.getElementById("conteudo").innerHTML += "Erro! Não posso rabiscar.<br>"
        } else {
            window.document.getElementById("conteudo").innerHTML += "Estou rabiscando... <br>"
        }
    }

    // tampar() {
    tampar() {
        this[protectedTampada] = true
        // console.log(this[protectedTampada] )
    }

    // #destampar() {
    destampar() {
        this[protectedTampada] = false
        // console.log(this[protectedTampada] )
    }
}
