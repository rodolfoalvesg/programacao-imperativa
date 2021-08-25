
function microondas(tempoPadrao, tempoInformado) {
    if(tempoInformado < tempoPadrao){
        return console.log("o tempo é insuficiente");
    }else if(tempoInformado > tempoPadrao*3){
        return console.log("Kabumm");
    }else if(tempoInformado > tempoPadrao*2){
        return console.log("a comida queimou.");
    }else{
        return console.log("O prato está pronto, bom apetite!!!");
    }
}


let pedidos = function (opcao, tempo) {
    switch (opcao) {
        case 1:
            console.log("Você escolheu PIPOCA e ");
            microondas(10, tempo);           
            break;
        
        case 2:
            console.log("Você escolheu MACARRÃO e ");
            microondas(8, tempo)
            break;
        
        case 3:
            console.log("Você escolheu CARNE e ");
            microondas(15, tempo)
            break;
        
        case 4:
            console.log("Você escolheu FEIJÃO e ");
            microondas(12, tempo)
            break;

        case 5:
            console.log("Você escolheu BRIGADEIRO e ");
            microondas(8, tempo)
            break;
    
        default:
            console.log("Prato Inexistente!")
    }
}


pedidos(1, 31)