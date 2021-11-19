const user = {
  name: 'Cientista',
  lastName: 'Avogadro',
};

//Recupera as Chaves do objecto
console.log('Props dos Objectos: ', Object.keys(user));

//Recupera os valores das Chaves do objecto
console.log('\n Valores das chaves do Objecto: ', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de props e values: ', Object.entries(user));

//Mergear Props de Objectos
Object.assign(user, { fullName: 'Cientista Fenix Avogadro' });

console.log('\nAdd uma prop fullname no obj User: ', user);
console.log(
  '\nRetorna um novo objecto mergeando 2 ou mais objs: ',
  Object.assign({}, user, { age: 26 })
);

//Previne todas as alterações de um object
const newObject = { foo: 'bar' };
Object.freeze(newObject);

newObject.foo = 'change';
delete newObject.foo;
newObject.bar = 'foo';

console.log('\n variavel newObject após as alterações: ', newObject);

const person = {
  name: 'Cientista',
};
Object.seal(person);

person.name = 'Avogadro';
delete person.name;
person.age = 21;
console.log('\n variavel person após as alterações: ', person);
