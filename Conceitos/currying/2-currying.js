function Soma(a) {
  return function (b) {
    return a + b;
  };
}
const Soma2 = Soma(2);

console.log(Soma2(2));
console.log(Soma2(3));
console.log(Soma2(4));
console.log(Soma2(5));
