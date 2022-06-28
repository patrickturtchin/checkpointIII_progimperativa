//Microdesafio - Passo VII

var aluno = require ("./aluno.js")

const estudantes = [];

estudantes.push (
    new aluno ("Cauê", 4 , [5, 9, 10]),
    new aluno ("Cairo", 2 , [5, 7, 8]), 
    new aluno ("Patrick", 1 , [10, 10, 10]),
)

module.exports = estudantes;