var Singleton = {
    instancia: null,

    iniciar: function() {
        function Sgln() {
            this.nome = ""
            this.mostrarNaTela = function() {
                window.alert("Método de classe singleton.")
            }
        }

        if (Singleton.instancia === null) {
            Singleton.instancia = new Sgln()
        } 
    }
}