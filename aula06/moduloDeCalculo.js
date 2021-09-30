let calculadora = {
    somar: (a=0, b=0) => a + b,
    subtrair: (a=0, b=0) => a - b,
    multiplicar: (a=0, b=0) => a * b,
    dividir: (a=1, b=1) => {
        if(b>0){
            return a / b
        }else{
            return "Não é possível dividir por ( 0 )"
        }
    },
    media: (a, b, c) => {
        return calculadora.somar(calculadora.somar(a, b), c) / 3
    },
    calculaPercentual: (total, percentual) => {
        return calculadora.multiplicar(calculadora.dividir(total/100), percentual)
    },
    gerarPercentual: (a, b) => {
        return calculadora.dividir(calculadora.multiplicar(a, 100), b)
    }

}

module.exports = calculadora;
