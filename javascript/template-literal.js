//template literal
//o acento de crase valida o uso do "$" para a concatenação das variaveis adotadas
// o cifrão ajuda a não termos que esticar o código com sinais de + e separações que podem resultar em erros no código

const nome = "Italo";
const cidade = "Paulista";
const idade = "17 anos";

const apresentacao = `meu nome é ${nome}, tenho ${idade} e moro em ${cidade}`

console.log(apresentacao)