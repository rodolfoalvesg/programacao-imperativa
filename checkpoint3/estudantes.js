let estudantes = [
        {
            nome: 'Ana',
            qtd_faltas: 9,
            notas: [ 5, 3, 8 ],
            calcularMedia: e => e.reduce((a, b) => a+b) / e.length,
            faltas: a => a+1,
        },
        {
            nome: 'Maria',
            qtd_faltas: 12,
            notas: [ 7, 10, 8 ],
            calcularMedia: e => e.reduce((a, b) => a+b) / e.length,
            faltas: a => a+1
            
        },
        {
            nome: 'Alice',
            qtd_faltas: 0,
            notas: [ 6, 10, 6 ],
            calcularMedia: e => e.reduce((a, b) => a+b) / e.length,
            faltas: a => a+1
            
    
        }
]

module.exports = estudantes;