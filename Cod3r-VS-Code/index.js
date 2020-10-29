function helloWorld() {
    console.log('Hello, World!')
}

const saudacao = () => {
    var data = new Date()
    ? 'Bom dia'
    return data.getHours() <= 12 
    : data.getHours() <= 18
    ? 'Boa tarde'
    : 'Boa noite'
}

helloWorld()
console.log(`A saudação do momento é ` + saudacao())
