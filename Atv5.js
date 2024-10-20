/////// Funções Fácil

//1 (Crie uma função chamada saudacao que receba um nome como parâmetro e retorne uma mensagem de saudação personalizada.)

function saudacao(nome) {  
    return `Olá, ${nome}! Bem-vindo(a)!`;  
}  

const nomeEscolhido = 'Cherry';  
console.log(saudacao(nomeEscolhido));

//2 (Crie uma função chamada soma que receba dois números como parâmetros e retorne a soma deles.)

let x1 = 7
let x2 = 3
let resultado = (x1 + x2);

function somaDoisNúmeros() {
    console.log(`a soma de ${x1} e ${x2} é igual a ${resultado}`)
}

somaDoisNúmeros()


//3 (Crie uma função chamada parOuImpar que receba um número como parâmetro e retorne "Par" se o número for par e "Ímpar" se for ímpar.)

let number = 10;

function ImparPar() {
    if (number % 2 === 0) {
        console.log(`${number} é par`);
    } else {
        console.log(`${number} é ímpar`);
    }
}

ImparPar();



//4 (Crie uma função chamada multiplica que receba dois números e retorne o produto deles.)

let n1 = 9;
let n2 = 3;
let resMultiplica = n1 * n2;

function multDoisNúmeros() {
    console.log(`A multiplicação de ${n1} e ${n2} é igual a ${resMultiplica}`);
}

multDoisNúmeros();



//5 (Crie uma função chamada celsiusParaFahrenheit que converta uma temperatura de Celsius para Fahrenheit. A fórmula de conversão é F=C×1.8+32F = C \times 1.8 + 32F=C×1.8+32.)

let celsius = 20;

function celsiusParaFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

let fahrenheit = celsiusParaFahrenheit(celsius);

console.log(fahrenheit);


//6 (Crie uma função chamada calculaMedia que receba três números e retorne a média deles.)

let media1 = 8;
let media2 = 0;
let media3 = 10;

function calculaMedia() {
    return (media1 + media2 + media3) / 3
}

console.log(calculaMedia())


//7 (Crie uma função chamada minutosParaSegundos que receba a quantidade de minutos e retorne o equivalente em segundos.)

let minutos = 15;

function minutosParaSegundos() {
    return minutos * 60;
}

console.log(`${minutos} minuto(s) convertido(s) em segundos é igual a ${minutosParaSegundos()} segundos. `)


//8 ( Crie uma função chamada ehPositivo que receba um número e retorne true se for positivo e false se for negativo ou zero.)

let nP = -4;

function ehPositivo() {
    if (nP > 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}

ehPositivo(); 


//9 ( Crie uma função chamada repetePalavra que receba uma palavra e um número como parâmetros, e retorne a palavra repetida esse número de vezes.)

let palavra = 'cherry';  
let numero = 10;  

function repetePalavra(palavra, numero) {  
    return palavra.repeat(numero);  
}  

const result = repetePalavra(palavra, numero);  
console.log(result);
