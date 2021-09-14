const idades = require('./idades/idades');
const fs = require('fs');
const funcaoSoma = require('./funcaoSoma');


// Exercícios de Leitura e escrita de arquivos
console.log(fs.readFileSync(__dirname + '/texto.txt', 'utf-8'))

fs.writeFileSync('texto.txt', 'Olá, seja bem - vindo')

console.log(fs.readFileSync(__dirname + '/texto.txt', 'utf-8'))

fs.appendFileSync('texto.txt', 'Acrescentando linha')

console.log(fs.readFileSync(__dirname + '/texto.txt', 'utf-8'))

console.log(idades)


// Importando função soma
console.log(funcaoSoma(10, 3))