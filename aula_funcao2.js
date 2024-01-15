function escrevaMeuNome(nome) {
    return 'Meu nome é: ' + nome;
}

// escrevaMeuNome('Lika');
// escrevaMeuNome('Renan');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Lika,') + ' é maior de idade!');
    } else{
        console.log('Você é menor de idade!');
    }
}

verificarIdade(27);