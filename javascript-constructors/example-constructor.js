function ExampleConstructor() {

}

console.log('ExampleConstructor.prototype', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype', typeof ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('newExampleConstructor', newExampleConstructor);

var isInstanceOf = newExampleConstructor instanceof ExampleConstructor;
console.log('isInstanceOf', isInstanceOf);
