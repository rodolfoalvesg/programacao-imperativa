function maiorMenor(a, b) {
    if(a > b){
        return console.log(a, " é maior que ",b);
    }else if(a < b){
        return console.log(a, " é menor que ", b);
    }else{
        return console.log(a, " e ", b, " são iguais!");
    }
}

maiorMenor(1,2)