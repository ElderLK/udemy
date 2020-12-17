const inputFile = process.argv[2] || '/dev/stdin';

var input = require('fs').readFileSync(inputFile, 'utf8');
var lines = input.split('\n');

// const [ num1, num2 ] = lines; ===> Para parametro em varias linhas
// const nums = lines.shift().split(' '); ===> Para varios parametro em unica linha
// const valor = lines.shift(); ===> parametro unico

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);


console.log(`DIFERENCA = ${((A*B)-(C*D))}`);
