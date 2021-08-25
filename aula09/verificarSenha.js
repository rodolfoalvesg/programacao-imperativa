let verificaSenha = function (senha) {
    if(senha === "1234"){
        return console.log("ACESSO PERMITIDO");
    }else{
        return console.log("ACESSO NEGADO");
    }
}

verificaSenha("1234")