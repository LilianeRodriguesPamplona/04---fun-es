// EXEMPLOS

/*
function teste() {
    console.log('teste'); // Não preciso repetir esse bloco de código.
}

teste();
teste(); // Porque por aqui eu posso chamar a função quantas vezes forem necessárias!
*/


/*
function sayMyName(name) {
    console.log('Your name is:' + name);
}

sayMyName('Lika');
sayMyName('Renan');
*/


/*
function quadrado(valor){
    return valor * valor;
}

// const quadradoDeDez = quadrado(10);
// console.log(quadradoDeDez);
console.log(quadrado(10) + quadrado(10));
*/


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
