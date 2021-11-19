//Retorna o tamanho de uma string
const textSize = 'Example'.length;
console.log(`Quantidade de letras: ${textSize}`);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Example'.split('x');
console.log(
  `\n Array com as posições separadas por delimitador: ${splittedText}`
);

//Busca por um valor e substitui por outro
const replacedText = 'Example'.replace('Exa', 'Axe');
console.log(`\n Substituição de valor: ${replacedText}`);

//Retorna a 'Fatia' de um valor
const lastChar = 'Example'.slice(-1);
console.log(`\n Última letra de uma string: ${lastChar}`);

const allWithoutLastChar = 'Example'.slice(0, -1);
console.log(
  `\n valor da string da primeira menos a última: ${allWithoutLastChar}`
);

const secondToEnd = 'Example'.slice(1);
console.log(`\n valor da string da segunda letra até a última: ${secondToEnd}`);

//Retorna N Caracteres a partir de uma posição
const twoCharacterBeforeFirstPosition = 'Example'.substr(0, 2);
console.log(
  `\n As duas letras primeiras letras são: ${twoCharacterBeforeFirstPosition}`
);

