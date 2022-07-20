// arrow é uma forma de função mais prática de se executar, exemplos:

//const arrowFunc = (num1, num2) => (num1 + num2)
//console.log(arrowFunc(1,2))

// a seta que é a junção do "=" com o ">" substitui as palavras chave de return e function

const outroExemplo = (numero1, numero2) => {
    if (numero1 > 9 || numero2 > 9) {
        return 'só de numero 1 a 8'
    } else {
        return numero1 + numero2;
 }
}
console.log(outroExemplo(10, 11))
    