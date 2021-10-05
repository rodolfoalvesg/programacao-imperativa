const aluno = require('./modulo_aluno')
const curso = require('./modulo_curso')


let aluno1 = new aluno("Rodolfo", 5, [7, 9, 10]) // cria instância 

let aluno2 = new aluno("José", 2, [8, 7, 9])

let aluno3 = new aluno("Marcos", 0, [7, 6, 8])

curso.listaAlunos = [aluno1, aluno2]

curso.listaAlunos.push(aluno3) // adiciona um aluno


curso.verificaStatus('Rodolfo') // verifica o status de aprovação do aluno
curso.verificaStatus('José')
curso.verificaStatus('Marcos')

console.log(curso.listaAlunos) // exibe todos os alunos 

console.log(curso.verificaStatusTodos()) // Lista o status de todos os alunos em booleano






/*********** PARTE DO MÓDULO DE ESTUDANTES *********/


//curso.verificaStatus('Ana') // Ativa a função verifica status
//curso.verificaStatus('Maria')
//curso.verificaStatus('Alice')


//curso.listaAlunos[0].calcularMedia(curso.listaAlunos[0].notas) // ativa a função calcular média
//curso.listaAlunos[1].calcularMedia(curso.listaAlunos[1].notas)
//curso.listaAlunos[2].calcularMedia(curso.listaAlunos[2].notas)

//curso.listaAlunos[0].faltas(curso.listaAlunos[0].qtd_faltas) // Ativa a função de faltas
//curso.listaAlunos[1].faltas(curso.listaAlunos[1].qtd_faltas)
//curso.listaAlunos[2].faltas(curso.listaAlunos[2].qtd_faltas)

// console.log(curso.listaAlunos) // exibe todos.