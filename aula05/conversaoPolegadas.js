function conversaoPolegadas(valor){
    let resultado = valor * 2.54;
    return resultado;
}

console.log("O valor em centímetros é: ", conversaoPolegadas(10).toFixed(2))