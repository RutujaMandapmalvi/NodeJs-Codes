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
// fs.writeFileSync('./output.txt', content);
// console.log(content)

//3. fs - read & write file(asynchronous manner):
// const fs = require('fs');
// fs.readFile('./start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile(`./${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(`${data1}.txt`);
//         console.log(data2)
//         console.log(error2);
//         fs.readFile('./append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3)
//             fs.writeFile('./output.txt', `${data2} \n\n${data3}`, () => {
//                 console.log('Go check your file');
//             })
//         })
//     })
// })
// console.log("I'm reading the file but i'm also moving on to the next action which depicts asynchronous nature.")

//3. create server:
// const fs = require('fs');
// const html = fs.readFileSync('./Template/index.html', 'utf-8');
// const http = require('http');
// const server = http.createServer((req, res) => { 
//     res.end(html);
//     console.log('server created.');
// });
// server. listen(3000, () => {
//     console.log('server started');
// });

//4. Routes:
const http = require('http');
const fs = require('fs')
let html = fs.readFileSync('./Template/index.html', 'utf-8');
let server = http.createServer((req, res) => {
    let path = req.url;
    if(path === '/' || path.toLocaleLowerCase()==='/home'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        });
    res.end(html.replace('{{%CONTENT%}}', 'You are in Meow Home page.'));
    }
    else if (path.toLocaleLowerCase()==='/about'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        });
        res.end(html.replace('{{%CONTENT%}}', 'You are in Meow About page page.'));
    }
    else if(path.toLocaleLowerCase() ==='/contact'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        });
        res.end(html.replace('{{%CONTENT%}}', 'You are in Meow Contacts page.'));
    }else{
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        });
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404:Page not found'));
    }
})
server.listen(3000, ()=>{
    console.log('server started')
})