function getName() {
  return 'Cientista Fénix Avogadro';
}

function logFn(fn) {
  console.log(fn());
}

const logFnResult = logFn;
logFnResult(getName);
