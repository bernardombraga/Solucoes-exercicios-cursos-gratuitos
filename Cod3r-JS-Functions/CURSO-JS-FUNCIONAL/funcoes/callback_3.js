const nums = [1, 2, 3, 4, 5]
const dobro = n => 2 * n
console.log(nums.map(dobro))

const nomes = ['Ana', 'Bia', 'Lia', 'Gui', 'Rafa', 'Bete']
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.10},
    {nome: 'Lapis', qtde: 3, preco: 5.82},
    {nome: 'Tesoura', qtde: 1, preco: 19.20}
]
// console.log(carrinho)

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    let resultado
    for (let i = 0; i < this.length; i++) {
        resultado = fn(this[i], i, this)
        novoArray.push(resultado)
    }
    return novoArray
}

console.log(carrinho.meuMap(getNome))
const totaisMP = carrinho.meuMap(getTotal)
console.log(totaisMP)
