//Read data line by line
const readLine = require('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("what's your name? ", (name) => {
    console.log('My name is '+name);
    rl.close();
})

rl.on('close', () => {
    // console.log('interface closed');
    process.exit(0);
})