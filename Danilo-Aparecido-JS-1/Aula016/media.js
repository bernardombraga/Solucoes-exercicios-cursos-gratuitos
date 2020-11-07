var Media = function(dados) {
    // Atributos públicos
    this.nota1 = 0
    this.nota2 = 0
    
    // Método privado
    // Arrow function não altera escopo do "this"
    // let somaNotas = () => this.nota1 + this.nota2
    // Usar sintaxe com "function" causa problem se o "bind" não for usado
    let somaNotas = function() {
        return this.nota1 + this.nota2
    }.bind(this)
    // Na expresão acima, o contexto do "this" da classe é passado pelo "bind" para a função somaNotas()

    // Método público
    this.calculo = function() {
        // variável (atributo) privada
         let media = somaNotas() / 2

        return media
    }
}