function applyFunction(array, func) {
  return array.map(func);
}

const numbers = [1, 2, 3];
const doubledNumbers = applyFunction(numbers, (x) => x * 2);
console.log(doubledNumbers); 