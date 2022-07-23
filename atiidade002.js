function callidade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos} anos de idade.`;
}


const pessoa = {
    nome: 'Maria',
    idade: 29,
};

const pessoa01 = {
    nome: 'Mario',
    idade: 34,
};

const pessoa02 = {
    nome: 'Serafine',
    idade: 8,
};


console.log(callidade.call(pessoa01, 20));