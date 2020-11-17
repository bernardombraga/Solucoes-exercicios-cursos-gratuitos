const proibidoChamarMetodo = function() {
    const msgErroMetodo = "É obrigatória a implementação desse método."
    throw new Error(msgErroMetodo)
}

class interfacePublicacao {
    constructor() {
        if (new.target === interfacePublicacao) {
            throw new Error("Não se pode instanciar uma interface.")
        }
    }

    abrir() {
        proibidoChamarMetodo()
    }
    fechar() {
        proibidoChamarMetodo()
    }
    folhear(pagina) {
        proibidoChamarMetodo()
    }
    avancarPag() {
        proibidoChamarMetodo()
    }
    voltarPag() {
        proibidoChamarMetodo()
    }
}