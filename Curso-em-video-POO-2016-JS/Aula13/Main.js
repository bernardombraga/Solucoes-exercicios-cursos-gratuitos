// import { Animal } from './Animal.js'
import { Mamifero } from './Mamifero.js'
import { Lobo } from './Lobo.js'
import { Cachorro} from './Cachorro.js'

let divApp = window.document.getElementById("App")
divApp.innerHTML += "<h1>Animais</h1>"

// let an = new Animal()

let m = new Mamifero()
m.setPeso(85.3)
m.setIdade(2)
m.setMembros(4)
m.setCorPelo("Vermelho")
divApp.innerHTML += "<h2>Mamifero</h2>"
divApp.innerHTML += `<p>Peso: ${m.getPeso()}; Idade: ${m.getIdade()}; Membros: ${m.getMembros()}</p>`
divApp.innerHTML += `<p>Cor do pelo: ${m.getCorPelo()}</p>`
m.emitirSom()

let l = new Lobo()
divApp.innerHTML += "<h3>Lobo</h3>"
l.emitirSom()

let c = new Cachorro()
divApp.innerHTML += "<h3>Cachorro</h3>"
c.emitirSom()
divApp.innerHTML += "<h4>Reação por frase</h4>"
c.reagir("Olá")
c.reagir("Vai apanhar")
divApp.innerHTML += "<h4>Reação por horário</h4>"
c.reagir(11, 45)
c.reagir(21, 0)
divApp.innerHTML += "<h4>Reação por dono</h4>"
c.reagir(true)
c.reagir(false)
divApp.innerHTML += "<h4>Reação por idade e peso</h4>"
c.reagir(2, 12.5)
c.reagir(17, 4.5)
// c.reagir()