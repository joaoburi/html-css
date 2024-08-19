/*
Desenvolva uma função que receba um número e uma array de números. 
Essa função deve retornar o número da array que 
for mais próximo do primeiro número passado por parâmetro.


const num = 2
const varios = [3, 4, 7, 1, 3]

const tem = varios.includes(num)
if(tem == true) {
    console.log(num)
} else {
    varios.sort()
    
    console.log(varios)
}
*/

// Inicializa o número mais próximo como o primeiro elemento do array e a menor diferença

const numero = 8;
const array = [ 2, 6, 3, 9];

let maisProximo = array[0];
let menorDiferenca = Math.abs(numero - maisProximo);

// Itera sobre o array, comparando as diferenças
for (let i = 1; i < array.length; i++) {
    const diferencaAtual = Math.abs(numero - array[i]);
    if (diferencaAtual < menorDiferenca) {
    maisProximo = array[i];
    menorDiferenca = diferencaAtual;
    }
}


console.log(maisProximo);