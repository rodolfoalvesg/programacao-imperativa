// Arrow Function e desafios


let soma = (a, b) => a + b;
console.log(soma(2, 5))

let print = mensagem => console.log(mensagem)
print('Meu nome é Rodolfo')

let horaAtual = _ => {
    let data = new Date();
    return data.getHours() + ':' + data.getMinutes();
}
console.log(horaAtual())


function multiplos(valorA=1, valorB=1, nomeDinamico){
    for(let i=1; i<=100; i++){
        let condicaoA = i % valorA == 0;
        let condicaoB = i % valorB == 0
        if(condicaoA && condicaoB){
            console.log(nomeDinamico[0]+nomeDinamico[1])
        }else if(condicaoA){
            console.log(nomeDinamico[0])
        }else if(condicaoB){
            console.log(nomeDinamico[1])
        }else{
            console.log(i)
        }
    }
}

multiplos(7, 12, ['Rodolfo', 'Alves'])