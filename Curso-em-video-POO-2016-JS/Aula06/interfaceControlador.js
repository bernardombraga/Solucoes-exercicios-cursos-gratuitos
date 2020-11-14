const msgErroInstancia = "Não se pode instanciar uma interface."
const msgErroMetodo = "É obrigatória a implementação desse método."

export class interfaceControlador {
    constructor() {
        if (new.target === interfaceControlador) {
            throw new Error(msgErroInstancia)
        }
    }

    ligar() {
        throw new Error(msgErroMetodo)
    }
    desligar() {
        throw new Error(msgErroMetodo)
    }
    abrirMenu() {
        throw new Error(msgErroMetodo)
    }
    fecharMenu() {
        throw new Error(msgErroMetodo)
    }
    maisVolume() {
        throw new Error(msgErroMetodo)
    }
    menosVolume() {
        throw new Error(msgErroMetodo)
    }
    ligarMudo() {
        throw new Error(msgErroMetodo)
    }
    desligarMudo() {
        throw new Error(msgErroMetodo)
    }
    play() {
        throw new Error(msgErroMetodo)
    }
    pause() {
        throw new Error(msgErroMetodo)
    }
}