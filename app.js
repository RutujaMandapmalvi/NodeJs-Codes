//1. Read data line by line
// const readLine = require('readline');
// const rl = readLine.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("what's your name? ", (name) => {
//     console.log('My name is '+name);
//     rl.close();
// })

// rl.on('close', () => {
//     // console.log('interface closed');
//     process.exit(0);
// })


//2. fs - read & write file(synchronous manner):
// const readline = require('readline');
// const fs = require('fs');
// let fileContent = fs.readFileSync('./input.txt', 'utf-8');
// console.log(fileContent);

// let content = `${fileContent} \n${new Date()} `
// fs.writeFileSync('./writeHere.txt', content);
// console.log(content)