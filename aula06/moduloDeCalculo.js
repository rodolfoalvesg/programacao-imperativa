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
        
    }
}

module.exports = calculadora;