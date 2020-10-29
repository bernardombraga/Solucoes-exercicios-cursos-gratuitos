function somar(a) {
    return function(b) {
        return function(c) {
            return a + b + c
        }
    }
}

console.log(somar(3)(4)(5))

function calcular(x) {
    return function(y) {
        return function (fn) {
            return fn(x, y)
        }
    }
}

console.log(calcular(3)(7)((x,y) => x * y))
console.log(calcular(3)(7)((x,y) => x + y))
console.log(calcular(3)(7)((x,y) => x - y))
