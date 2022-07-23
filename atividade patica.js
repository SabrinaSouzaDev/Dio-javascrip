const alunos = [{
        nome: 'joão',
        nota: 4, // nota
        turma: '1A'
    },
    {
        nome: 'Sofia',
        nota: 10, // nota
        turma: '2A'
    },
    {
        nome: 'Jordan',
        nota: 8, // nota
        turma: '3A'

    },
];

function alunAprovar(arr, media) {
    let aprovado = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome, turma } = arr[i];

        if (arr[i].nota >= media) {
            aprovado.push(arr[i]).nome
        }

    }

    return aprovado;
}

console.log(alunAprovar(alunos, 5));