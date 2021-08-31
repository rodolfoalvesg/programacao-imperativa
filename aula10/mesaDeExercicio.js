// O que esses códigos retornam?
// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.

//======================-------- 1 -------==================
// let numbers =[22, 33, 54, 66, 72]
// console.log(numbers[numbers.length])
// Resposta: undefined

//======================-------- 2 -------==================
// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1][0])
// Resposta: Spiderman

//======================-------- 3 -------==================
// let str = "una string qualquer"
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
// Resposta: una string qualquer




// Array Invertido
// Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, 
// sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.


//======================-------- 1 -------==================
// 1 - Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento 
// em ordem reversa no console (você não precisa inverter o Array).

let array = [1, 2, 3, 4, 5]
let imprimirInverso = function() {
    return console.log(array[4], array[3], array[2], array[1], array[0])
}
imprimirInverso(array)

//======================-------- 2 -------==================
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.
let InverteArray = function(array) {
    return array.reverse()
}
console.log(InverteArray(array))


// somarArray()
// Neste exercício, você criará uma função somarArray() que aceita um array de números 
// e retorna a soma de todos eles.

//======================-------- 1 -------==================
// Exemplo:
// somarArray([1,2,3])                // 6
// somarArray([10, 3, 10, 4])     // 27
// somarArray([-5,100])        // 95

let  somarArray = function(valorA, valorB){
    return valorA + valorB;  
}

console.log([10, 3, 10, 4].reduce(somarArray))



// Simulação Array.join()
// Neste exercício, você criará uma função chamada join que recebe um array e simula o 
// comportamento do método Array.join().
// Importante: Não poderá utilizar o método Array.join() original.

//======================-------- 1 -------==================
// Por exemplo:
// join(["o","l","á"]) deve retornar a string "olá".
// join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

let funcaoJoin = function(valorA, valorB){
    return valorA+valorB;
}


console.log(["t","c","h","a","u"].reduce(funcaoJoin))