const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

rl.question('What is your name? ', (answer2) => {
  console.log(`Thank you for answer 2: ${answer2}`);

rl.question('What activity do u like? ', (answer3) => {
  console.log(`That is fun !: ${answer3}`)

rl.question('What do u listen to while doing that? ', (answer4) => {
  console.log(`that sounds nice: ${answer4}`)
  
rl.question('What is your fav meal? ', (answer5) => {
  console.log(`yummy: ${answer5}`)
  rl.close();


})  
  
  
})  
  
  
  
})  
})
});

