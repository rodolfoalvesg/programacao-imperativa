
/* RESOLUÇÃO 1 */


const dadosPessoas = [
    {altura: 1.78, sexo: "F"},
    {altura: 1.45, sexo: "F"},
    {altura: 1.13, sexo: "M"},
    {altura: 1.25, sexo: "F"},
    {altura: 1.95, sexo: "M"},
    {altura: 1.52, sexo: "F"},
    {altura: 1.45, sexo: "F"},
    {altura: 1.99, sexo: "M"},
    {altura: 1.56, sexo: "F"},
    {altura: 1.85, sexo: "F"},
    {altura: 2.00, sexo: "M"},
    {altura: 2.01, sexo: "M"},
    {altura: 1.48, sexo: "F"},
    {altura: 1.77, sexo: "M"},
    {altura: 1.89, sexo: "M"}
]


// Função que verifica a maior altura
function maior() {  
    let maior = 0; // condição inicial
    for(let i=0; i<dadosPessoas.length; i++){
        if(dadosPessoas[i].altura >= maior){ // verificando se altura anterior é maior que a condição atual
            maior = dadosPessoas[i].altura; // armazena a maior altura
        }
    }
    return maior
}


function menor() {  
    let menor = maior(); // retorna a maior altura que será a condição inicial de menor
    for(let i=0; i<dadosPessoas.length; i++){ 
        if(dadosPessoas[i].altura <= menor){// verificando se altura anterior é menor que a condição atual
            menor = dadosPessoas[i].altura; // armazena a menor altur
        }
    }
    return menor
}


function mediaAlturasMulhes(){
    let alturasF = [] // array para guardar as alturas filtradas
    
    for(let i=0; i<dadosPessoas.length; i++){
        if(dadosPessoas[i].sexo == 'F'){ // verifica se o sexo é femino
            alturasF.push(dadosPessoas[i].altura) // adiciona a altura ao array
        }
    }

    let soma = alturasF.reduce((a, b) => a+b) // Soma os valores do array

    return soma / alturasF.length; // calcula e retorna a média
}


function contaM(){
    let conta = 0 // valor inicial
    for(let i=0; i<dadosPessoas.length; i++){
        if(dadosPessoas[i].sexo == 'M'){ // condição de verificação
          conta++  // contador
        }
    }

    return conta;
}

console.log("A maior altura: ", maior())
console.log("A menor Altura: ", menor())
console.log("A média de altura das mulheres é: ", mediaAlturasMulhes().toFixed(2))
console.log("Existem: ", contaM(), " do sexo masculino")