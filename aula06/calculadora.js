let a, b, c;
[a, b, c] = [10, 5, 8]


// Função de soma
let adicionar = function(a, b){
    return a + b;
}


//Função de Subtração
let subtracao = function(a, b){
    return a - b;
}


// Função de Multiplicação
let multiplicacao = function(a, b){
    return a * b;
}


// Função de Divisão
let divisao = function(a, b){
    return a / b;
}

// Função Quadrado de um número
let quadradoDoNumero = function(a){
    b = a;
    return multiplicacao(a, b)
}

// Função Media
let mediaDeTresNumeros = function(a, b, c){
    let d = adicionar(a, b) + c
    return divisao(d, 3).toFixed(2)
}

// Função calcula porcentagem
let calculaPorcentagem = function (total, percentual) {
    let d = divisao(total, 100)
    let e = multiplicacao(d, percentual)
    return e;
}

// Gerador de Porcentagem
let geradorDePorcentagem = function (valorA, valorB) {
    return (valorA*100)/valorB
}


console.log("------------ Teste de Operações / Calculadora ---------------");
console.log("Soma de ", a, " + ", b, " = ", adicionar(a, b))
console.log("Subtração de ", a, " - ", b, " = ", subtracao(a, b))
console.log("Multiplicação de ", a, " * ", b, " = ", multiplicacao(a, b))
console.log("Divisão de ", a, " / ", b, " = ", divisao(a, b))
console.log("Divisão de ", a, " / 0 = ", divisao(a, 0))
console.log("Ao quadrado: ", quadradoDoNumero(a))
console.log("Média ", mediaDeTresNumeros(a, b, c))
console.log("Percentual: ", calculaPorcentagem(300, 15))
console.log("Gerador de porcentagem: ", geradorDePorcentagem(14, 140))