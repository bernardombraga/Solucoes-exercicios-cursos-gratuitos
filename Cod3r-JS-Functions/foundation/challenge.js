// Create a range function

function range(inicial = 1, final, passo = 1) {
    const valores = []
    if (final === undefined) {
        final = inicial
        inicial = 1
    }
    if (passo == 0) {
        passo = 1
    }
    passo = Math.abs(passo)
    if (final >= inicial) {
        for (let n = inicial; n <= final; n += passo) {
            valores.push(n)
        }
    } else {
        for (let n = inicial; n >= final; n -= passo) {
            valores.push(n)
        }
    }

    return valores
}

console.log(range(5))
console.log(range(6, 11))
console.log(range(10, 19, 2))
console.log(range(6, 2))
console.log(range(8, -3, 4))
