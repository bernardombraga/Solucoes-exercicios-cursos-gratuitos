var campoNúm = window.document.getElementById('núm')
var painel = window.document.getElementById('painel')
var salvos = []
var res = window.document.getElementById('res')

function válido() {
    if (campoNúm.value.length == 0) {
        return false
    } else {
        let núm = Number(campoNúm.value)
        if (núm < 1 || núm > 100 || salvos.indexOf(núm) != -1) {
            return false
        } else {
            return true
        }
    }
}

function adicionar() {
    if (válido()) {
        let núm = Number(campoNúm.value)
        item = window.document.createElement('option')
        item.innerHTML = `Valor ${núm} adicionado.`
        item.value = núm
        painel.appendChild(item)
        salvos.push(núm)
        res.innerHTML = ''
    } else {
        window.alert('[ERRO] Valor inválido ou já encontrado na lista.')
    }
    campoNúm.value = ''
    campoNúm.focus()
}

function finalizar() {
    if (salvos.length == 0) {
        window.alert('[ERRO] Adicione valores antes de finalizar.')
    } else {
        nElementos = salvos.length
        res.innerHTML = `<p>Ao todo, temos ${nElementos} números cadastrados.</p>`
        let maior = salvos[0]
        let menor = salvos[0]
        let soma = 0
        for (let pos in salvos) {
            if (salvos[pos] > maior) {
                maior = salvos[pos]
            }
            if (salvos[pos] < menor) {
                menor = salvos[pos]
            }
            soma += salvos[pos]
        }
        let média = soma / nElementos
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${média}.</p>` 
    }
}