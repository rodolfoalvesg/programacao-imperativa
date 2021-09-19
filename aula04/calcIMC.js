let nome = "José da Silva";
let idade = 27;
let peso = 83.5;
let altura = 1.70;
let plano = true;


let imc = (peso / (altura^2)).toFixed(2);

console.log(nome, "tem ", idade, "anos e seu índice de massa corporal é de ", imc)