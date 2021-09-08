//Função Construtora

function ContaUsuario(numConta, tipoConta, saldo, usuarioConta) {
    this.usuarioConta = usuarioConta;
    this.numConta = numConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
}

let cliente1 = new ContaUsuario("5486273622", "Conta Corrente", 27771, "Abigael Natte");
let cliente2 = new ContaUsuario("1183971869", "Conta Poupança", 8675, "Ramon Connell");
let cliente3 = new ContaUsuario("9582019689", "Conta Poupança", 27363, "Jarret Lafuente");
let cliente4 = new ContaUsuario("1761924656", "Conta Poupança", 32415, "Ansel Ardley");
let cliente5 = new ContaUsuario("7401971607", "Conta Poupança", 18789, "Jacki Shurmer");
let cliente6 = new ContaUsuario("630841470", "Conta Corrente", 28776, "Jobi Mawtus");
let cliente7 = new ContaUsuario("4223508636", "Conta Corrente", 2177, "Thomasin Latour");
let cliente8 = new ContaUsuario("185979521", "Conta Poupança", 25994, "Lonnie Verheijden");
let cliente9 = new ContaUsuario("3151956165", "Conta Corrente", 7601, "Alonso Wannan");
let cliente10 = new ContaUsuario("2138105881", "Conta Poupança", 33196, "Bendite Huggett");

const listaDeUsuarios = [cliente1, cliente2, cliente3, cliente4, cliente5, cliente6 ,cliente7, cliente8, cliente9, cliente10]

const banco = {
    clientes: listaDeUsuarios,
    consultaCliente(nome){
        return this.clientes.find(e => e.usuarioConta === nome );
    },
    deposito(nome, depositoDinheiro){
        return console.log("Depósito realizado com sucesso, seu novo saldo é: ", this.consultaCliente(nome).saldo += depositoDinheiro)
    },
    saque(nome, saqueDinheiro){
        if(this.consultaCliente(nome).saldo < 0){
            return console.log("Fundos insuficientes");
        }else{
            return console.log("Extração feita com sucesso, seu novo saldo é: ", this.consultaCliente(nome).saldo -= saqueDinheiro)
        }
    }
}

banco.consultaCliente('Jobi Mawtus')
banco.deposito('Jobi Mawtus', 100)
banco.consultaCliente('Jobi Mawtus')
banco.saque('Jobi Mawtus', 1000)
banco.consultaCliente('Jobi Mawtus')



// Exercício bônus

let array = [ { nome: "Lean", idade: 27 }, { nome:"Eze", idade: 49} ]

let propriedadeUnica = function(array, valor){
    console.log(array.map(e => e.valor))
}

propriedadeUnica(array, 'nome')