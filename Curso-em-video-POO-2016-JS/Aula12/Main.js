// import { Animal } from './Animal.js'
import { Mamifero } from './Mamifero.js'
import { Reptil } from './Reptil.js'
import { Peixe } from './Peixe.js'
import { Ave } from './Ave.js'

import { Canguru } from './Canguru.js'
import { Cachorro } from './Cachorro.js'
import { Cobra} from './Cobra.js'
import { Tartaruga} from './Tartaruga.js'
import { Goldfish } from './Goldfish.js'
import { Arara } from './Arara.js'

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
m.locomover()
m.alimentar()
m.emitirSom()

let r = new Reptil()
r.setPeso(500)
r.setIdade(12)
r.setMembros(4)
r.setCorEscama("Verde")
divApp.innerHTML += "<h2>Réptil</h2>"
divApp.innerHTML += `<p>Peso: ${r.getPeso()}; Idade: ${r.getIdade()}; Membros: ${r.getMembros()}</p>`
divApp.innerHTML += `<p>Cor das escamas: ${r.getCorEscama()}</p>`
r.locomover()
r.alimentar()
r.emitirSom()

let p = new Peixe()
p.setPeso(0.35)
p.setIdade(1)
p.setMembros(0)
p.setCorEscama("Azul")
divApp.innerHTML += "<h2>Peixe</h2>"
divApp.innerHTML += `<p>Peso: ${p.getPeso()}; Idade: ${p.getIdade()}; Membros: ${p.getMembros()}</p>`
divApp.innerHTML += `<p>Cor das escamas: ${p.getCorEscama()}</p>`
p.locomover()
p.alimentar()
p.emitirSom()
p.soltarBolha()

let a = new Ave()
a.setPeso(0.89)
a.setIdade(2)
a.setMembros(2)
a.setCorPena("Amarelo")
divApp.innerHTML += "<h2>Ave</h2>"
divApp.innerHTML += `<p>Peso: ${a.getPeso()}; Idade: ${a.getIdade()}; Membros: ${a.getMembros()}</p>`
divApp.innerHTML += `<p>Cor da pena: ${a.getCorPena()}</p>`
a.locomover()
a.alimentar()
a.emitirSom()

divApp.innerHTML += "<h3>Canguru</h3>"
let c1 = new Canguru()
c1.usarBolsa()
c1.locomover()
c1.emitirSom()

divApp.innerHTML += "<h3>Cachorro</h3>"
let c2 = new Cachorro()
c2.abanarRabo()
c2.enterrarOsso()
c2.emitirSom()

divApp.innerHTML += "<h3>Cobra</h3>"
let c3 = new Cobra()
c3.locomover()
c3.alimentar()
c3.emitirSom()

divApp.innerHTML += "<h3>Tartaruga</h3>"
let t = new Tartaruga()
t.locomover()
t.alimentar()
t.emitirSom()

divApp.innerHTML += "<h3>Goldfish</h3>"
let g = new Goldfish()
g.locomover()
g.alimentar()
g.emitirSom()
g.soltarBolha()

divApp.innerHTML += "<h3>Arara</h3>"
let ar = new Arara()
ar.locomover()
ar.alimentar()
ar.emitirSom()
