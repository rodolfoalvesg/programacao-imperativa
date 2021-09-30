const calculadora = require('./moduloDeCalculo')

//adição
console.log("A soma é: ",calculadora.somar(10, 15))

// Subtração
console.log("A subtração é: ",calculadora.subtrair(15, 3))

// Multiplicação
console.log("A multiplicação é: ",calculadora.multiplicar(15, 3))

//  Divisão
console.log("A divisão é ", calculadora.dividir(45, 0))

// Média de 3 numeros
console.log("A média é: ", calculadora.media(10, 9, 5))

// Calcular percentual do total
console.log("O valor valor é: ",calculadora.calculaPercentual(1000, 25))

// Gerador de percentual
console.log("O percenteual é: ", calculadora.gerarPercentual(28, 140), "%")