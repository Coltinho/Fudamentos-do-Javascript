const alunos = ["joão", "bat", "kendrick", "max"]
const notas = [10, 5, 6, 8]

let ListaDeNotas = [alunos, notas]

const exibeNomeNota = (nomeDoAluno) => {
    if (ListaDeNotas[0].includes(nomeDoAluno)) {
          indice = ListaDeNotas[0].indexOf(nomeDoAluno)
        return ListaDeNotas[0][indice] + ',sua média é ' + ListaDeNotas[1][indice]
    } else {
            return "Aluno não está cadastrado"
    }
}

console.log(exibeNomeNota("kendrick"))
