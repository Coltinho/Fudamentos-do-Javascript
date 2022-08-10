// na arrays podemos também fazer divisões de strings conforme os grupos determinados

const nomes = ['João', 'Maria', 'Diego', 'Cristina', 'Tamy', 'Pedro', 'Kiu', 'Ryu', 'Yasuo', 'Lara', 'kakash', 'kendri', 'got', 'bia',
 'priscilla', 'akuma', 'ste', 'nove', 'kindra', 'kain']

const sala1 = nomes.slice(0, nomes.lenght/
2)
const sala2 = nomes.slice(nomes.lenght/2)

console.log(`alunos da sala 1: ${sala1}`)
console.log(`alunos da sala 2: ${sala2}`)          