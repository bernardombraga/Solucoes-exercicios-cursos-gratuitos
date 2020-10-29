// arrow function
const felizNatal = () => console.log('Feliz natal!')
felizNatal()

const saudacao = nome => `Fala ${nome}, blz!?!`
console.log(saudacao('Maria'))

const somar = (...numeros) => {
    let total = 0
    for (let n of numeros) {
        total += n
    }
    return total
}

const subtrair = (a, b) => a - b

console.log(subtrair(4, 1))

console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))

// this
Array.prototype.log = function() {
    console.log(this)
}

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

// não funciona com função arrow
Array.prototype.primeiro = () => {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.log()
numeros.ultimo()
numeros.primeiro()