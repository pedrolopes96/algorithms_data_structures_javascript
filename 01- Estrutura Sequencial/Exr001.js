// Faça um programa que receba quatro números inteiros, calcule e mostre a soma desses números.

const ps = require("prompt-sync");
const prompt = ps();

let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));
let num3 = parseInt(prompt("Digite o terceiro número:"));
let num4 = parseInt(prompt("Digite o quarto número:"));

let soma = num1 + num2 + num3 + num4;

console.log("A soma dos números é: " + soma);