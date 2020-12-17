const inputFile = process.argv[2] || '/dev/stdin';

var input = require('fs').readFileSync(inputFile, 'utf8');
var lines = input.split('\n');

// const [ num1, num2 ] = lines; ===> Para parametro em varias linhas
// const nums = lines.shift().split(' '); ===> Para varios parametro em unica linha
// const valor = lines.shift(); ===> parametro unico

const [ num1, num2 ] = lines;

console.log(`MEDIA = ${(((parseFloat(num1)*3.5) + (parseFloat(num2))* 7.5) / 11 ).toFixed(5)}`);
