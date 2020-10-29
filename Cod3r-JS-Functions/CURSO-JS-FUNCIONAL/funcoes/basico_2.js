function bomDia() {
    console.log('Bom dia!')
}

const bomTarde = function() {
    console.log('Bom tarde!')
}

// 1) Passar uma função como parâmetro para outra função
function executarQualquerCoisa(fn) {
    if (typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(bomTarde)

// 2) Retornar uma função a partir de outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)