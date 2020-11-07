var Abstracao = function() {
    if (this.constructor === Abstracao) {
        throw new Error("Não se pode instanciar uma classe abstrata.")
    }
}

Abstracao.prototype.nome = ""
Abstracao.prototype.telefone = ""
Abstracao.prototype.cpf =  ""

Abstracao.prototype.gravarNaMemoria = function() {
    throw new Error("Obrigatório a implementação do método gravarNaMemoria() para classes filhas")
}
