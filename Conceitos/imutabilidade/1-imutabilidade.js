const User = {
  name: 'Cientista',
  lastName: 'Avogadro',
};

function getUserWithFullName(User) {
  return {
    ...User,
    fullName: `${User.name} ${User.lastName}`,
  };
}

const userWithFullName = getUserWithFullName(User);

console.log(userWithFullName);
