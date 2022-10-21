const { parse } = require("path")

const user = prompt('pls enter your username')
console.log(`welcome ${user}`)
let levels = 2
let point = 5
for (i = 2; i <= 10; i++) {
  const secret = Math.floor(Math.random() * i) + 1
  let guess = parseInt(prompt(`enter a number between 1 and ${i}`));
  if (guess > secret) {
    i--
    console.log('try again: your number is too high')
  } else if (guess < secret) {
    i--
    console.log('try again: your number is too low')
  } else {
    console.log(`you win:${secret} you've gotten ${point} [enter level ${levels}] `)
    levels++
    point += 5
  }
}
