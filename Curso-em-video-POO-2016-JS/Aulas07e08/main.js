import Lutador from './Lutador.js'
import Luta from './Luta.js'

let divApp = window.document.getElementById("App")
divApp.innerHTML += `<h1>Ultra Emoji Combat (UEC)</h1>`

let L = new Array(6).fill(null)
L[0] = new Lutador("Pretty Boy", "França", 31, 1.75, 68.9, 11, 2, 1)
L[1] = new Lutador("Putscript", "Brasil", 29, 1.68, 57.8, 14, 2, 3)
L[2] = new Lutador("Snapshadow", "EUA", 35, 1.65, 80.9, 12, 2, 1)
L[3] = new Lutador("Dead Code", "Alustrália", 28, 1.93, 81.6, 13, 0, 2)
L[4] = new Lutador("Ufocobol", "Brasil", 37, 1.70, 119.3, 5, 4, 3)
L[5] = new Lutador("Nerdaard", "EUA", 30, 1.81, 105.7, 12, 2, 4)

/*
L[0].apresentar()
L[2].status()
divApp.innerHTML += `<br> <h3> Categoria </h3> ${L[3].getCategoria()} <br>`
L[1].ganharLuta()
L[0].empatarLuta()
*/

let UEC01 = new Luta()
UEC01.marcarLuta(L[0], L[1])
UEC01.Lutar()
// L[0].status()
// L[1].status()