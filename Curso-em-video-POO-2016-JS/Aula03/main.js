import Caneta from './Caneta.js'

let divConteudo = window.document.getElementById("conteudo")
let c1 = new Caneta()
c1.modelo = "BIC Cristal"
c1.cor = "Azul"
c1.tampar()
c1.destampar()
divConteudo.innerHTML += `Instância c1: ${JSON.stringify(c1)} <br>`
c1.rabiscar()
