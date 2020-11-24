import { protectedPeso, protectedIdade, protectedMembros } from './symbolsAnimal.js' 

const proibidoChamarMetodo = function() {
    const msgErroMetodo = "É obrigatória a implementação desse método."
    throw new Error(msgErroMetodo)
}

export class Animal {
    constructor() {
        this[protectedPeso] = null
        this[protectedIdade] = null
        this[protectedMembros] = null

        // Impede instanciamento da classe
        if (new.target === Animal) {
            throw new Error("Não se pode instanciar uma classe abstrata.")
        }
    }

    getPeso() {
        return this[protectedPeso]
    }
    setPeso(p) {
        this[protectedPeso] = p 
    }
    getIdade() {
        return this[protectedIdade]
    }
    setIdade(i) {
        this[protectedIdade] = i
    }
    getMembros() {
        return this[protectedMembros]
    }
    setMembros(m) {
        this[protectedMembros] = m
    }

    locomover() {
        proibidoChamarMetodo()
    }
    alimentar() {
        proibidoChamarMetodo()
    }
    emitirSom() {
        proibidoChamarMetodo()
    }
}