var Fornecedor = function(dados) {
    Fornecedor.prototype.nome = dados.nome || "" 
    Fornecedor.prototype.telefone = dados.telefone || "" 
    Fornecedor.prototype.cep = dados.cep || ""

    this.CNPJ = ""

    // this.pai = Fornecedor.prototype
    let pai = Fornecedor.prototype

    this.entregarProdutos = function() {
        window.alert("O fornecedor está entregando os produtos.")
    }

    this.gravarNaMemoria = function() {
        Fornecedor.dados.push(this)
        // this.pai.gravarNaMemoria()
        pai.gravarNaMemoria()
    }
}

Fornecedor.prototype = new Pessoa()

Fornecedor.dados = []
