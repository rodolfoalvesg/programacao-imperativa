
/* RESOLUÇÃO 2 */

const dadosPessoas = require('./dadosPessoas')

// Função que verifica a maior altura
function maior() {  
    let maior = 0; 
    dadosPessoas.forEach(dados => {
        if(dados.altura >= maior){
            maior = dados.altura
        }
    })
    return maior
}


// Função que verifica a menor altura
function menor() {  
    let menor = maior(); 
    dadosPessoas.forEach(dados => {
        if(dados.altura <= menor){
            menor = dados.altura;
        }
    })
    
    return menor
}


// Função que retorna a média
function mediaAlturasMulhes(){
    let alturasF = []
    
    dadosPessoas.forEach(dados => {
        if(dados.sexo === 'F'){
            alturasF.push(dados.altura)
        }
    })
    
    let soma = alturasF.reduce((a, b) => a+b)
    return soma / alturasF.length; 
}


// Função que conta o número de homens
function contaM(){
    let conta = 0 
    dadosPessoas.forEach(dados => {
        if(dados.sexo === 'M'){
            conta++;
        }
    })

    return conta;
}

console.log("A maior altura: ", maior())
console.log("A menor Altura: ", menor())
console.log("A média de altura das mulheres é: ", mediaAlturasMulhes().toFixed(2))
console.log("Existem: ", contaM(), " do sexo masculino")