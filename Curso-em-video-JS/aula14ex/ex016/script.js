function contar() {
    //window.alert('OK!')
    let campoInício = window.document.querySelector('input#início')
    let campoFim = window.document.querySelector('input#fim')
    let campoPasso = window.document.getElementById('passo')
    let campoRes = window.document.querySelector('p#res')

    if (campoInício.value.length == 0 || campoFim.value.length == 0 || campoPasso.value.length == 0) {
        campoRes.innerText = '[ERRO] Faltam dados!.'
    } else {
        let início = Number(campoInício.value)
        let fim = Number(campoFim.value)
        let passo = Number(campoPasso.value)
        if (passo <= 0) {
            window.alert('Passo inválido! Considerando passo = 1.')
            passo = 1
        }
        campoRes.innerHTML = 'Contando: <br>'
        /*
        for (let n = início; n <= fim; n += passo) {
            campoRes.innerHTML += ` ${n} \u{1F449}`
        }
        */
       if (início < fim) {
           // contagem crescente
           for (let n = início; n <= fim; n += passo) {
               campoRes.innerHTML += ` ${n} \u{1F449}`
           }
       } else {
           // contagem decrescente
           for (let n = início; n >= fim; n -= passo) {
               campoRes.innerHTML += ` ${n} \u{1F449}`
           }
       }
        campoRes.innerHTML += `\u{1f3C1}`

        // Códigos unicode para emojis:
        // https://unicode.org/emoji/charts/full-emoji-list.html
    }
 
}