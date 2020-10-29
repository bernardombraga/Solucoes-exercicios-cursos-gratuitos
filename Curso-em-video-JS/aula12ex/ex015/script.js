function verificar() {
    var data = new Date()
    var anoA = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var anoN = fano.value
    var res = window.document.querySelector('div#res')
    if (anoN.length == 0 || Number(anoN) > anoA) {
        window.alert('[ERRO]. Verifique o ano de nascimento.')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        idade = anoA - Number(anoN)
        sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            sexo = 'Homem' 
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            sexo = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos: ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }

}
