const students = [
  {
    name: 'Antonio',
    grade: 7,
  },
  {
    name: 'Paulo',
    grade: 5,
  },
  {
    name: 'Jorge',
    grade: 10,
  },
];

function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos Aprovados');

console.log(getApprovedStudents(students));

console.log('Lista de Alunos');

console.log(students);
