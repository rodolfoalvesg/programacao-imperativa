/* Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares. */


let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let impares = pares.map(arg => arg-1);

console.log(impares)


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

const nomes = ['João', 'Fernando', 'Maria', 'Elisa', 'Marta', 'Maria', 'Rosângela'];

let filtroNomes = nomes.filter(arg => arg == 'Maria')

console.log(filtroNomes)

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

const nums = [1,5,9,3,7];

const string = nums.reduce((a, b) => a + ' - ' + b)
console.log(string)

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

const animais = ['gato', 'cachorro', 'pato', 'coelho'];

animais.forEach(a => console.log("O animal é ", a))


// Slice() -> Retorna um novo array com o intervalo definido

let subPares = pares.slice(5, 10)
console.log(subPares)


//Splice() -> remove ou adiciona itens num array
pares.splice(5,0, 11) // adiciona
console.log(pares)

pares.splice(3, 2);
console.log(pares);

// Sort() -> Ordena elementos de um array
console.log(animais.sort())
console.log(pares.sort((a,b) => b-a))

// Flat() -> Desembrulhar subarrays com informação do nível
let numerosA = [1, 2, 3, 4, [5], [[6, 7]]];
let novoArray = numerosA.flat()
console.log(novoArray)

novoArray = numerosA.flat(2)
console.log(novoArray)

// Includes() -> Verifica a existência de um elemento no array true ou false
console.log(novoArray.includes(4, 0))
console.log(novoArray.includes(7, 7))

//Find() -> Retorna o primeiro valor que cumprir a condição
let moedas = [
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Bitcoin', simbolo: 'BTC'},
    {nome: 'Ethereum', simbolo: 'ETH'}
]

console.log(moedas.find(e => e.nome === 'Bitcoin'))