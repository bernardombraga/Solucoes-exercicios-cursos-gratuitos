function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 20
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h e ${min}min.`
    if (hora >= 6 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#d4d2b9'
    } else if (hora >= 12 && hora < 19) {
        // BOA TARDE
        img.src = 'fototarde.png'
        window.document.body.style.background = '#f9b39a'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#47375b'
    }
}
