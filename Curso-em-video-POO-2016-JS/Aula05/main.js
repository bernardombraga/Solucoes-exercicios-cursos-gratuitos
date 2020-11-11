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
divApp.innerHTML += `Número da conta: ${c1.getNumConta()}; Tipo da conta: ${c1.getTipo()}; Dono: ${c1.getDono()}; Saldo: ${c1.getSaldo()}; Status: ${c1.getStatus()}.`