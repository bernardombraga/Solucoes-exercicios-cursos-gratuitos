function run(fn) {
    return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!!')
}

run(sayHello)

run(function () {
    console.log('Run!!!')
})

result = run(Math.random)
console.log(result)
