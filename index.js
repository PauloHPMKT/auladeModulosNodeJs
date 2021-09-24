// exemplo de modulo - aula NodeJs Formação fullstack JavaScript

/*
Modulos são utilizados para separar funções em outros arquivos (modulos)
ex: cria-se um arquivo apenas para realizar calculos 
*/

/*é feito o import do arquivo calculo.js
export com uma operação

const soma = require('./calculo.js')
const resultado = soma(10, 30)

console.log(resultado)*/


//export com mais de uma operação - forma 1 - default
const calculos = require('./calculo.js')

const resultado = calculos.soma(10, 30)
const resultado2 = calculos.multiplicar(10, 30)

console.log(resultado, resultado2);


//export com mais de uma operação - forma 2 destructuring
// obs: destructuring só é possível quando o export for um objeto
const { soma, multiplicar } = require('./calculo.js')

const resultado3 = multiplicar(10, 20)
const resultado4 = soma(10, 30)

console.log(resultado3, resultado4)