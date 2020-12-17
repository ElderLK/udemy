const inputFile = process.argv[2] || '/dev/stdin';

var input = require('fs').readFileSync(inputFile, 'utf8');
var lines = input.split('\n');

// const [ num1, num2 ] = lines; ===> Para parametro em varias linhas
// const nums = lines.shift().split(' '); ===> Para varios parametro em unica linha
// const valor = lines.shift(); ===> parametro unico

let n1 = lines[0];
let n2 = lines[1];
let n3 = lines[2];


console.log(`MEDIA = ${(( (parseFloat(n1)*2) + (parseFloat(n2)* 3) + (parseFloat(n3)*5) ) /10 ).toFixed(1)}`);
