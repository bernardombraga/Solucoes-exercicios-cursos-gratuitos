// let amigo = {nome: "José", sexo: "M", peso: 85.4}
let amigo = {nome: "José",
 sexo: "M", 
 peso: 85.4, 
 engordar(p=0) {
     console.log(`Engordou ${p}kg.`)
     this.peso += p
 }}

console.log(typeof amigo)
console.log(amigo)

amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}kg.`)