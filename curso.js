//Microdesafio - Passo III, IV, V, VI

var aluno = require("./modules/aluno.js")
var estudantes = require("./modules/estudantes.js")

var curso = {
    nome : "Certified Tech Developer",
    notaAprov : 7,
    faltasMax : 3,
    turma : estudantes,
    addAluno : function (nome = "Aluno", qtdFaltas = 0, notas = []) {
        this.turma.push(new aluno(nome, qtdFaltas, notas))
    },
    aprovAluno : function (indice) {
        if (this.turma[indice].qtdFaltas < this.faltasMax) {
            return this.turma[indice].calcularMedia() >= (this.notaAprov) ? true : false;
        } else if (this.turma[indice].qtdFaltas == this.faltasMax) {
            return this.turma[indice].calcularMedia() >= (1.1 * this.notaAprov) ? true : false;
        } else {
            return false;
        }
    },
    aprovTurma : function () {
        return this.turma.map(element => this.aprovAluno(this.turma.indexOf(element)) == true); 
    }
}

curso.addAluno("José", 1, [10, 10, 10])
console.log(curso.turma)
console.log(curso.aprovAluno(3))
