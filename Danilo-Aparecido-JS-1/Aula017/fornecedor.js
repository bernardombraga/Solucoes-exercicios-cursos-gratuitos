var Fornecedor = function() {
    this.CNPJ = ""
    
    this.entregarProdutos = function() {
        window.alert("O fornecedor está entregando os produtos.")
    }
}


Fornecedor.prototype = new Pessoa()