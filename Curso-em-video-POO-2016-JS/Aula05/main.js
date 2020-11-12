import ContaBanco from './ContaBanco.js'

let divApp = window.document.getElementById("App")
let c1 = new ContaBanco()
c1.abrirConta("CP")
c1.setNumConta(1001)
c1.setDono("Almir")
c1.depositar(20)
c1.sacar(150)
c1.pagarMensal()
c1.fecharConta()

divApp.innerHTML += "<strong>Conta 1:</strong> <br>"
divApp.innerHTML += `Número da conta: ${c1.getNumConta()}; Tipo da conta: ${c1.getTipo()}; Dono: ${c1.getDono()}; Saldo: ${c1.getSaldo()}; Status: ${c1.getStatus()}. <br>`

let c2 = new ContaBanco()
c2.abrirConta("CC")
c2.setDono("Jubileu")
c2.setNumConta(1111)
c2.depositar(300)
c2.pagarMensal()
c2.sacar(338)
c2.fecharConta()
divApp.innerHTML += "<strong>Conta 2:</strong> <br>"
divApp.innerHTML += `Número da conta: ${c2.getNumConta()}; Tipo da conta: ${c2.getTipo()}; Dono: ${c2.getDono()}; Saldo: ${c2.getSaldo()}; Status: ${c2.getStatus()}. <br>`

let c3 = new ContaBanco()
c3.abrirConta("CP")
c3.setDono("Creuza")
c3.setNumConta(2222)
c3.depositar(500)
c3.sacar(1000)
c3.sacar(630)
c3.pagarMensal()
c3.fecharConta()
divApp.innerHTML += "<strong>Conta 3:</strong> <br>"
divApp.innerHTML += `Número da conta: ${c3.getNumConta()}; Tipo da conta: ${c3.getTipo()}; Dono: ${c3.getDono()}; Saldo: ${c3.getSaldo()}; Status: ${c3.getStatus()}. <br>`