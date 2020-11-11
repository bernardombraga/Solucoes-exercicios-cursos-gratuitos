import { protectedTipo } from './symbolTipoConta.js'

export default class ContaBanco {
    #dono
    #saldo
    #status

    constructor() {
        this.numConta = null
        this[protectedTipo] = null
        this.#dono = null
        this.#saldo = 0
        this.#status = false 
    }

    getNumConta() {
        return this.numConta
    }
    setNumConta(n) {
        this.numConta = n
    }
    getTipo() {
        return this[protectedTipo]
    }
    setTipo(t) {
        if (t === "CC" || t === "CP") {
            this[protectedTipo] = t
        } else {
            console.log("Erro! Tipo de conta inválido.")
        }
    }
    getDono() {
        return this.#dono 
    }
    setDono(d) {
        this.#dono = d
    }
    getSaldo() {
        return this.#saldo
    }
    setSaldo(sl) {
        this.#saldo = sl
    }
    getStatus() {
        return this.#status
    }
    setStatus(st) {
        if (st === true || st === false) {
            this.#status = st
        } else {
            console.log("Erro! Status inválido.")
        }
    }

    abrirConta(t) {
        this.setTipo(t)
        if (this.getTipo() === "CC") {
            this.setSaldo(50)
            this.setStatus(true)
        } else if (this.getTipo() === "CP") {
            this.setSaldo(150)
            this.setStatus(true)
        }
    }
    fecharConta() {
        if (this.getSaldo() === 0) {
            this.setStatus(false)
        } else if (this.getSaldo() > 0) {
            console.log("Erro! Conta com dinheiro.")
        } else {
            console.log("Erro! Conta em débito.")
        }
    }
    depositar(v) {
        if (this.getStatus() === true) {
            this.setSaldo(this.getSaldo() + v)
        } else {
            console.log("Erro! Impossível depositar. Conta fechada.")
        }
    }
    sacar(v) {
        if (this.getStatus() === true) {
            if (this.getSaldo() > v) {
                this.setSaldo(this.getSaldo() - v)
            } else {
                console.log("Erro! Saldo insuficiente para saque.")
            }
        } else {
            console.log("Erro! Impossível sacar. Conta fechada.")
        }
    }
    pagarMensal() {
        if (this.getStatus() === true) {
            let v
            if (this.getTipo() === "CC") {
                v = 12
            } else if (this.getTipo() === "CP") {
                v = 20
            }
            if (this.getSaldo() >= v) {
                this.setSaldo(this.getSaldo() - v)
            } else {
                console.log("Erro! Saldo insuficiente para pagar mensalidade.")
            }
        } else {
            console.log("Erro! Impossível cobrar mensalidade. Conta fechada.")
        }
    }

}