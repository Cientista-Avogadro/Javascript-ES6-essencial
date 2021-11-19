const user = {
  name: 'Cientista',
};

//alterando a prop de um objecto
user.name = 'Avogadro';
user['name'] = 'outro nome';

const prop = 'name';
user[prop] = 'outro';

//criando uma prop de um object
user.lastName = 'Moniz';

//deletando uma prop de um object
delete user.name;
