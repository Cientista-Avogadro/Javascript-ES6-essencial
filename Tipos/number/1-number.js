const myNumber = 12.4032;

//Transform the number as String
const numberAsString = myNumber.toString();
console.log(`Número transformado em string: ${numberAsString}`);

//Retorna número com um número de casa decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`\n Número com duas casas decimais: ${fixedTwoDecimals}`);

//Transforma uma string em Float
console.log(`\n String parseada para float ${parseFloat('13.22')}`);

//Transforma uma string em int
console.log(`\n String parseada para Int ${parseInt('13.22')}`);
