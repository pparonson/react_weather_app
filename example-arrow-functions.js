const names = ['Preston', 'Ashley', 'Brooke', 'Brittany', 'Branden', 'Elle'];

// names.forEach((name) => {
//   console.log(name);
// });

const person = {
  name: 'Preston',
  greet() {
    names.forEach(function(name) {
      console.log(`${this.name} loves ${name}`);
    });
  }
};

person.greet();

// Challenge

function add(a, b) {
  return a + b;
}

const addStatement = (a, b) => {
  return a + b;
};

const addExpression = (a, b) => a + b;

console.log(`add: ${add(1, 3)}`);
console.log(`add: ${add(9, 0)}`);
console.log(`addStatement: ${addStatement(1, 3)}`);
console.log(`addStatement: ${addStatement(9, 0)}`);
console.log(`addExpression: ${addExpression(1, 3)}`);
console.log(`addExpression: ${addExpression(9, 0)}`);
