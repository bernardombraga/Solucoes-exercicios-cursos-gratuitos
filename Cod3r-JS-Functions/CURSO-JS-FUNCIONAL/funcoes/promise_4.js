function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random()*fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

labelTime = 'Tempo de execução de todas as promises'
console.time(labelTime)
gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        // console.timeLog(labelTime)
        console.timeEnd(labelTime)
    })
