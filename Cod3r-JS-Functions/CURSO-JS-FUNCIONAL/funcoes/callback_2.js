const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')
// console.log(caminho)

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}

console.log('Início Async...')
fs.readFile(caminho, exibirConteudo)
// fs.readFile(caminho, {}, exibirConteudo)
fs.readFile(caminho, (_,conteudo) => console.log(conteudo.toString()))
console.log('Fim Async...')

console.log('Início Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync...')

