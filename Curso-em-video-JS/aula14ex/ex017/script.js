function gerar(){
    /*
    let campoNúmero = window.document.getElementById('número')
    let campoRes = window.document.getElementById('res')
    if (campoNúmero.value.length == 0) {
        campoRes.innerHTML = '[ERRO] Campo não preenchido.'
    } else {
        let n = Number(campoNúmero.value)
        let p
        campoRes.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            p = c * n
            campoRes.innerHTML += `${n} &times; ${c} &equals; ${p} <br>`
        }
        // campoRes.innerHTML = 'Ok!'
    }
    */
    let campoNúmero	= window.document.getElementById('número')
    let tab = window.document.getElementById('seltab')
    if (campoNúmero.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(campoNúmero.value)
        let p
        tab.innerHTML = ''
        let c = 1
        while (c <= 10) {
            p = c * n
            let item = window.document.createElement('option')
            item.innerHTML = `${n} &times; ${c} &equals; ${p}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}