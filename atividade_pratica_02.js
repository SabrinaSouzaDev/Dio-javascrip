function callidade() {
    return `Daqui a ${this.anos} anos, ${this.nome} terá ${
        this.idade + this.anos} anos de idade.`;
}

const entrada = require('Prompt-Sync')({ sigint: true });

let pessoa;

pessoa = {
    nome: entrada("Digite um nome: "),
    idade: parseInt(entrada("Digite a idade: ")),
    anos: parseInt(entrada(`Digite quantos anos você quer acresentar:`))
};


console.log(callidade.call(pessoa));