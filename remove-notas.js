// a opção "pop" é pra tirar um campo em que selecionamos a mais na const, mas que n iremos utilizar na media

const notas = [10, 8, 7, 9, 5]
notas.pop()
let media = (notas[0] + notas[1] + notas[2] + notas[3]) /notas.length

console.log(`a média é ${media}`)