// Retornar frutas tratadas com somente a primeira letra maiúscula e as demais minúscula

const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];
const novaLista = []

// for(let i = 0; i < frutas.length; i++){
//     const primeiraLetraFrutas = frutas[i].charAt(0).toUpperCase() +
//     frutas[i].substring(0).toLocaleLowerCase()

    // const demaisLetraFrutas = frutas[i].substring(0).toLocaleLowerCase()
// }
for(let i = 0; i < frutas.length; i++){
    const tratarLetras = frutas[i].charAt(0).toUpperCase() +
    frutas[i].substring(1).toLocaleLowerCase()
    novaLista.push(tratarLetras)
}
console.log(novaLista)

