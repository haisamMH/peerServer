var generator = require('generate-password');


var password = generator.generate({
  length: 20,
  numbers: true,
  symbols:false,
  exclude:'@"+',
  strict:true
});

console.log(password)