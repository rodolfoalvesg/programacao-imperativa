

function podeSubir(altura, companhia=false){
    
    if(altura >= 1.4 && altura < 2.0 ){
        return console.log("Acesso autorizado!")
    }else if(altura >= 1.20  && companhia){
        return console.log("Acesso autorizado com acompanhante")
    }else{
        return console.log("Acesso não autorizado.")
    }
}

podeSubir(1.35, true)
