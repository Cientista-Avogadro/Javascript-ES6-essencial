(() => {
    const test = 'Valor da Função';
    console.log(`Valor dentro da função: ${test}`);
  
    if (true) {
      const test = 'Valor dentro do if';
      console.log(`Valor dentro do if: ${test}`);
    }
    console.log(`Valor depois da execução do if: ${test}`);
  })();
  