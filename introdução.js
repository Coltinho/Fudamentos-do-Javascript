// o arrays são listas que agilizam o processo
// conforme exemplo de medias de alunos

const notas = [5, 6, 8.5, 10]
// no array a numeração inicial é 0, sendo assim: o primeiro numero virá acompanhado dele
              //  0          1       2         3
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

console.log(media)