const name = 'Cientista';

//Não podemos alterar o valor
// name = 'Avogadro';

const user = {
  name: 'Cientista',
};

//mas se for objecto podemos trocar suas propriedades
user.name = 'Avogadro';

//não podemos fazer o objecto "Apontar" para outro lugar
/* user = {
  name: 'Avogadro',
}; */

const persons = ['Pedro', 'Skenk', 'Wilson'];

//We can Add new items
persons.push('Claúdio');

//we can remove an item
persons.shift();

//we can change directly
persons[1] = 'Heide';

console.log('\n array após as alterações: ', persons);
