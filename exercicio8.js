/*REPETIR PARALAVRA
Dado duas variáveis:
obterNome > vai armazenar um nome.
repetirNome > vai armazenar números
Faça um programam que repita a palavra
De acordo com a quantidade de vezes que você
inserir para que essa palavra repita.
exemplo:
const obterNome = "Jéssica";
const repetirNome = 4
A saída terá que ser:
"Alessandra"
"Alessandra"
"Alessandra"
"Alessandra"*/
const obterNome = "Eunice"
const repetirNome = 4
let n = 0

while(n < repetirNome){
    n++;
    console.log("While:", obterNome)
}

for(let i = 0; i < repetirNome; i++) {
    console.log("for", obterNome)
}