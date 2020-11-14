let divApp = window.document.getElementById("App")

export default class Lutador {
    #nome
    #nacionalidade
    #idade
    #altura
    #peso
    #categoria
    #vitorias
    #derrotas
    #empates

    constructor(nome, nacionalidade, idade, altura, peso, vitorias, derrotas, empates) {
        this.#nome = nome
        this.#nacionalidade = nacionalidade
        this.#idade = idade
        this.#altura = altura
        this.setPeso(peso)
        this.#vitorias = vitorias
        this.#derrotas = derrotas
        this.#empates = empates
    }

    getNome() {
        return this.#nome
    }
    setNome(n) {
        this.#nome = n
    }
    getNacionalidade() {
        return this.#nacionalidade
    }
    setNacionalidade(n) {
        this.#nacionalidade = n
    }
    getIdade() {
        return this.#idade
    }
    setIdade(i) {
        this.#idade = i
    }
    getAltura() {
        return this.#altura
    }
    setAltura(a) {
        this.#altura = a
    }
    getPeso() {
        return this.#peso
    }
    setPeso(p) {
        this.#peso = p
        this.#setCategoria()
    }
    getCategoria() {
        return this.#categoria
    }
    #setCategoria(p) {
        if (this.getPeso() < 52.2) {
            this.#categoria = "Inválido"
        } else if (this.getPeso() <= 70.3) {
            this.#categoria = "Leve"
        } else if (this.getPeso() <= 83.9) {
            this.#categoria = "Médio"
        } else if (this.getPeso() <= 120.2) {
            this.#categoria = "Pesado"
        } else {
            this.#categoria = "Inválido"
        }
    }
    getVitorias() {
        return this.#vitorias
    }
    setVitorias(v) {
        this.#vitorias = v
    }
    getDerrotas() {
        return this.#derrotas
    }
    setDerrotas(d) {
        this.#derrotas = d
    }
    getEmpates() {
        return this.#empates
    }
    setEmpates(e) {
        this.#empates = e
    }

    apresentar() {
        divApp.innerHTML += "<hr>"
        divApp.innerHTML += `Chegou a HORA! O lutador ${this.getNome()} `
        divApp.innerHTML += `veio diretametne do(a) ${this.getNacionalidade()}, `
        divApp.innerHTML += `tem ${this.getIdade()} anos, ${this.getAltura()} m de altura e pesa ${this.getPeso()} <br>`
        divApp.innerHTML += `Ele tem ${this.getVitorias()} vitórias, ${this.getDerrotas()} derrotas e ${this.getEmpates()} empates <br>`
    }
    status() {
        divApp.innerHTML += "<hr>"
        divApp.innerHTML += `${this.getNome()} é um peso ${this.getCategoria()}. `
        divApp.innerHTML += `Já ganhou ${this.getVitorias()} vezes, `
        divApp.innerHTML += `perdeu ${this.getDerrotas()} vezes `
        divApp.innerHTML += `e empatou ${this.getEmpates()} vezes. <br>`

    }
    ganharLuta() {
        this.setVitorias(this.getVitorias() + 1)
    }
    perderLuta() {
        this.setDerrotas(this.getDerrotas() + 1)
    }
    empatarLuta() {
        this.setEmpates(this.getEmpates() + 1)
    }
}