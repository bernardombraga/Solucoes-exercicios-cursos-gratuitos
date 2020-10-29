let num = [5, 8, 2, 9, 3]
num.sort()
num.push(1)
num[6] = 10
console.log(`Nosso vetor é o ${num}`)
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos8 = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos8}.`)
let pos4 = num.indexOf(4)
if (pos4 == -1) {
    console.log('O valor 4 não foi encontrado.')
} else {
    console.log(`O valor 4 está na posição ${pos4}.`)
}
