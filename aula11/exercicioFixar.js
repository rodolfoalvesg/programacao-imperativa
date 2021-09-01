for(let i=0; i<=4; i++){
    console.log("Olá mundo")
}


let guardaImpar = []
for(let i=1; i<=10; i++){
    if(i % 2 != 0){
        guardaImpar.push(i)
    }
}

console.log(guardaImpar)


for(let i=1; i<=10; i++){
    console.log(`tabuada do =====---- ${i} ----=====`)
    for(let j=1; j<=10; j++){
        console.log(i, ' x ', j, ' = ', i*j)
    }
}

let guardaImpares = []
let impar = 1;
while(impar <= 100){  
    if(impar % 2 != 0){
        guardaImpares.push(impar)
    }
    impar++;
}
console.log(guardaImpares)

let guardaPares = []
let par = 1;
while(par <= 100){  
    if(par % 2 == 0){
        guardaPares.push(par)
    }
    par++;
}
console.log(guardaPares)

let pares = []
let impares = []
let valor = 20;
while(valor >= 1){  
    if(valor % 2 != 0){
        impares.push(valor)
    }else{
        pares.push(valor)
    }
    valor--;
}
console.log(pares, impares);

 


let notas = [6.0, 7.5, 6.7, 9.0, 8.7];
let qtdNotas = notas.length;
let somaNotas = 0;

while(qtdNotas > 0){
    somaNotas = somaNotas + notas[qtdNotas-1];
    qtdNotas--;
}
console.log(somaNotas/notas.length)