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
const data = JSON.parse(fs.readFileSync('./Data/products.json', 'utf-8'));
const prodlist = fs.readFileSync('./Template/product-list.html', 'utf-8');
const url = require('url');
// console.log(data);

let prodpropertiesdisplay = data.map((prod) => {
    let output = prodlist.replace("{{%NAME%}}", prod.name);
    output = output.replace("{{%MODELNAME%}}", prod.modeName);
    output = output.replace("{{%MODELNO%}}", prod.modelNumber);
    output = output.replace("{{%AGE%}}", prod.age);
    output = output.replace("{{%BEHAVIOUR%}}", prod.behaviour);
    output = output.replace("{{%DESCRIPTION%}}", prod.Description);
    output = output.replace("{{%PRICE%}}", prod.price);
    output = output.replace("{{%COLOR%}}", prod.color);
    output = output.replace("{{%PRODUCTIMAGE%}}", prod.productImage);
    output = output.replace("{{%ID%}}", prod.id);
    return output;
})

let server = http.createServer((req, res) => {
    //object destructuring:
    let {query, pathname: path} = url.parse(req.url, true);
    // let path = req.url;
    if(path === '/' || path.toLocaleLowerCase()==='/home'){
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        });
    res.end(html.replace('{{%CONTENT%}}', "Welcom to MeowLand!!!"));
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
    }
    else if (path.toLocaleLowerCase() === '/products'){
        if(!query.id){
            res.writeHead(200, {
                "Content-Type": "text/html",
                "my-header": "meow"
            })
            res.end(html.replace('{{%CONTENT%}}', prodpropertiesdisplay.join(',')));
            // "You wanna buy a meow??? You've reached the right page"
            console.log(prodpropertiesdisplay);
        }else{
            res.end('This is Meow number: '+query.id); 
            console.log(query.id)
        }

    }
    else{
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-header': 'meow'
        }) ;
        res.end(html.replace('{{%CONTENT%}}', 'ERROR 404:Page not found'));
    }
})
server.listen(3000, ()=>{
    console.log('server started')
})