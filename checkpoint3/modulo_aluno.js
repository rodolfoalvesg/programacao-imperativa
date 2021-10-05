function alunos(nome, qtd_faltas, notas) {
    this.nome = nome;
    this.qtd_faltas = qtd_faltas;
    this.notas = notas;
    this.calcularMedia = (notas.reduce((a, b) => a+b)) / notas.length,
    this.faltas = ++qtd_faltas;
}

module.exports = alunos;