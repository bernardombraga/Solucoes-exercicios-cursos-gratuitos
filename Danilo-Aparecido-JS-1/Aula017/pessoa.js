var Pessoa = function(dados) {
    if (dados !== undefined) {
        if (dados.nome !== undefined) {
            this.nome = dados.nome
        } else {
            this.nome = ""
        }
        if (dados.telefone !== undefined) {
            this.telefone = dados.telefone
        } else {
            this.telefone = ""
        }
        if (dados.cpf !== undefined) {
            this.cpf = dados.cpf
        } else {
            this.cpf = ""
        }        
    } else {
        this.nome = ""
        this.telefone = ""
        this.cpf =  ""
    }
    
    this.mostrar = function() {
        window.document.write(`Nome: ${this.nome} <br>`)
        window.document.write(`Telefone: ${this.telefone} <br>`)
        window.document.write(`CPF: ${this.cpf}`)
    }
    
    this.gravarNaMemoria = function() {
        Pessoa.dadosPessoas.push(this)
    }
}

Pessoa.dadosPessoas = []

Pessoa.mostraTodos = function() {
    let html = ""
    let divRes = window.document.getElementById("resultado")
    for (let pessoa of Pessoa.dadosPessoas) {
        html += `Nome: ${pessoa.nome} <br>`
        html += `Telefone: ${pessoa.telefone} <br>`
        html += `CPF: ${pessoa.cpf}`
        html += "<hr>"
    }
    html += "<h2>Gerado por método de classe</h2>"
    divRes.innerHTML = html    
}