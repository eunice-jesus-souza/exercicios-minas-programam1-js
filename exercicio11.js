/*Dado uma pontuação retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */
let notas = 30
 if(notas > 90) {
   console.log("A")
 }else if ((notas > 80) && (notas < 90)) {
   console.log("B")
 }else if ((notas > 70) && (notas < 80)) {
   console.log("C")
 }else if ((notas > 65) && (notas < 70)) {
   console.log("D")
}else{
   console.log("F")
}