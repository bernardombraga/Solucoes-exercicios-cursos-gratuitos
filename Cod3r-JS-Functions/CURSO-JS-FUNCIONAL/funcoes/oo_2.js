class Produto {

    constructor(nome, preco, desc = 0.1) {
        // this._nome = nome
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    get nome() {
        return `Produto: ${this._nome}`
    }

    set nome(novonome) {
        this._nome = novonome.toUpperCase()
    }

    get preco() {
        return this._preco
    }

    set preco(novoPreco) {
        if (novoPreco > 0)  {
            return this._preco = novoPreco
        }
    }

    precoFinal() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 5)
p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)
console.log(p1._nome)

const p2 = new Produto('Geladeira', 3000, 0.5)
console.log(p2.preco)
console.log(p2.precoFinal())


console.log(typeof Produto)