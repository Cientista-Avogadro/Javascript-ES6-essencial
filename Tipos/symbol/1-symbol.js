const symbol1 = Symbol();
const symbol2 = Symbol();

//Sysmbol são únicos
console.log('\n symbol1 é igual a sysmbol2 =', symbol1 === symbol2);

//prevenir conflitos entre nomes de propriedades
const nameSysmbol1 = Symbol('name');
const nameSysmbol2 = Symbol('name');

const user = {
  [nameSysmbol1]: 'cientista',
  [nameSysmbol2]: 'avogadro',
  lastName: 'cientista fenix avogadro',
};

console.log(user);

//symbols criam propriedades que não são enuberables
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log(`\nValor da chave ${key}: ${user[key]}`);
  }
}

console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

//exibir symbols de um objeto
console.log(
  'Symbols registrados no objeto user: ',
  Object.getOwnPropertySymbols(user)
);

//acessando todas as propriedades do objeto
console.log('Todas propriedads do objeto user: ', Reflect.ownKeys(user));

//criar um enum
const directions = {
  UP: Symbol('UP'),
  DOWN: Symbol('DOWN'),
  LEFT: Symbol('LEFT'),
  RIGHT: Symbol('RIGHT'),
};
