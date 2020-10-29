const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true},
    {nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false},
    {nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
    {nome: 'Tesoura', qtde: 1, preco: 19.20, fragil: true}
]

const apenasFragil = item => item.fragil
const subTotal = item => item.qtde * item.preco
obj0 = {qtde: 0, total: 0, media: 0}
const media = function(acc, el, i, array) {
    if ((i + 1) === array.length) {
        return (acc + el) / array.length
    } else {
        return acc + el
    }
}
const mediaAlt = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde, 
        total: novoTotal, 
        media: novoTotal / novaQtde
    }
}


const resposta1 = carrinho
            .filter(apenasFragil)

const resposta2 = carrinho
            .filter(apenasFragil)
            .map(subTotal)

const resposta3 = carrinho
            .filter(apenasFragil)
            .map(subTotal)
            .reduce(media)

const resposta4 = carrinho
                    .filter(apenasFragil)
                    .map(subTotal)
                    .reduce(mediaAlt, obj0)
                    .media

console.log(resposta1)
console.log(resposta2)
console.log(resposta3)
console.log(resposta4)



