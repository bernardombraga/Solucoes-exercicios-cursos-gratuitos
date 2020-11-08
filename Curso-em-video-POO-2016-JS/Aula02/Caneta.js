class Caneta {
    constructor() {
        this.modelo = undefined
        this.cor = undefined
        this.ponta = undefined
        this.tampada = undefined   
        this.carga = undefined      
   
    }

    rabiscar() {
        if (this.tampada === true) {
            window.document.getElementById("conteudo").innerHTML += "Erro! Não posso rabiscar.<br>"
        } else {
            window.document.getElementById("conteudo").innerHTML += "Estou rabiscando... <br>"
        }
    }

    tampar() {
        this.tampada = true
    }

    destampar() {
        this.tampada = false
    }
}

/*
function Caneta() {
    this.modelo = undefined
    this.cor = undefined
    this.ponta = undefined
    this.tampada = undefined   
    this.carga = undefined     

    this.rabiscar = function() {
        if (this.tampada === true) {
            window.document.getElementById("conteudo").innerHTML += "Erro! Não posso rabiscar.<br>"
        } else {
            window.document.getElementById("conteudo").innerHTML += "Estou rabiscando... <br>"
        }
    }

    this.tampar = function() {
        this.tampada = true
    }

    this.destampar = function() {
        this.tampada = false
    }
}
*/