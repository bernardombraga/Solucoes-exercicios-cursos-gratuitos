var Cliente = function() {
    this.nome = ""
    this.telefone = ""
    this.cpf = ""

    this.mostrar = function() {
        window.document.write(`Nome: ${this.nome} <br>`)
        window.document.write(`Telefone: ${this.telefone} <br>`)
        window.document.write(`CPF: ${this.cpf}`)
    }
}


