//const funcoes_matematicas = require('./funcoes_matematica')
//const cal
import { somar, subtrair, multiplicar, dividir } from './funcoes_matematica.js';
import * as calculadora_idade from './calculadora_idade';

console.log("soma: " + somar(5,5,5));
console.log("subtracao: " + subtrair(5, 3));
console.log("multiplicacao: " + multiplicar(5, 3));
console.log("divisao: " + dividir(5,0));

console.log(calculadora_idade.calc_idade("Roverbal", 1976, 2050));