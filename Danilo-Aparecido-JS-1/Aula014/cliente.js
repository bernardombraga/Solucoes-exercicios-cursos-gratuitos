var Cliente = function() {
    this.nome = ""
    this.telefone = ""
    this.cpf = ""
    
    this.mostrar = function() {
        window.document.write(`Nome: ${this.nome} <br>`)
        window.document.write(`Telefone: ${this.telefone} <br>`)
        window.document.write(`CPF: ${this.cpf}`)
    }
    
    this.gravarNaMemoria = function() {
        Cliente.clientes.push(this)
    }
}

Cliente.clientes = []

Cliente.mostraTodos = function() {
    let html = ""
    let divRes = window.document.getElementById("resultado")
    for (let cliente of Cliente.clientes) {
        html += `Nome: ${cliente.nome} <br>`
        html += `Telefone: ${cliente.telefone} <br>`
        html += `CPF: ${cliente.cpf}`
        html += "<hr>"
    }
    html += "<h2>Gerado por método de classe</h2>"
    divRes.innerHTML = html    
}