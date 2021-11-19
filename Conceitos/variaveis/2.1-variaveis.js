var test = 'example';

(() => {
  console.log(`Valor dentro da função: ${test}`);

  if (true) {
    var test = 'example';
    console.log(`Valor dentro do if: ${test}`);
  }
  console.log(`Valor depois da execução do if: ${test}`);
})();
