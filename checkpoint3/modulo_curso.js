let estudantes = require('./estudantes')


const curso = {
    nomeCurso: "Programação Imperativa",
    notaAprovacao: 8,
    faltasMax: 10,
    listaAlunos: estudantes, // Substitui a lista por estudantes
    verificaStatus: nome => {
            curso.listaAlunos.forEach((e, i) => {
            if(nome === e.nome){
                const statusMedia = e.calcularMedia >= 8
                const statusFalta = e.qtd_faltas < curso.faltasMax
                const statusFaltaLimite = statusFalta ? statusFalta : (statusMedia >= curso.faltasMax*0.1+curso.faltasMax);
                if(statusMedia && statusFaltaLimite){
                    e.status = true;
                    return true;
                }else{
                    e.status = false;
                    return false;
                }
                
            }else{
                return "Não encontrado"
            }
        })
       
    },
    verificaStatusTodos: _ => {
        let array = []
        curso.listaAlunos.forEach( e => array.push(e.status))
        return array
    }
}

module.exports = curso;