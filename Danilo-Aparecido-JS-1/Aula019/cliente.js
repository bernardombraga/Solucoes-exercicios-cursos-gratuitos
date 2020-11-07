var Cliente = function(dados) {
    Cliente.prototype.nome = dados.nome || "" 
    Cliente.prototype.telefone = dados.telefone || "" 
    Cliente.prototype.cep = dados.cep || ""
     
    this.codigoCliente = ""

    this.gravarNaMemoria = function() {
        Cliente.dados.push(this)
        Cliente.prototype.gravarNaMemoria()
    }

    // Da forma abaixo sobreescre prototype de clientes
    // e não é possível acessar mais o método da classe pai
    /*
    Cliente.prototype.gravarNaMemoria = function() {
        Cliente.dados.push(this)
    }
    */
}

Cliente.prototype = new Pessoa()

Cliente.dados = []
