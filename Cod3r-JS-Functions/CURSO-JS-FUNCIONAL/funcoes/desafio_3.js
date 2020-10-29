const fs = require('fs')
const path = require('path')

/*
const p = new Promise(resolve => {
    const caminho = path.join(__dirname, 'dados.txt')
    // console.log(caminho)
    // const exibirConteudo = (err, conteudo) => console.log(conteudo.toString())
    // fs.readFile(caminho, exibirConteudo)
    const passarConteudo = (err, conteudo) => resolve(conteudo.toString())
    fs.readFile(caminho, passarConteudo)
})

p.then(console.log)
*/

function lerArquivo(caminho) {
    return  new Promise(resolve => {
        const passarConteudo = (err, conteudo) => resolve(conteudo.toString())
        fs.readFile(caminho, passarConteudo)
    })
}

const caminho = path.join(__dirname, 'dados.txt')
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(conteudo => conteudo.map(el => el.replace('\r', '')))
    .then(linhas => linhas.join(', '))
    .then(conteudo => `O valor final é: ${conteudo}`)
    .then(console.log)
