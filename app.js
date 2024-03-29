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
// let fileContent = fs.readFileSync('./Data/input.txt', 'utf-8');
// console.log(fileContent);

// let content = `${fileContent} \n${new Date()} `
// fs.writeFileSync('./Data/output.txt', content);
// console.log(content)

//3. fs - read & write file(asynchronous manner):
// const fs = require('fs');
// fs.readFile('./Data/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile(`./${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(`${data1}.txt`);
//         console.log(data2)
//         console.log(error2);
//         fs.readFile('./Data/append.txt', 'utf-8', (error3, data3) => {
//             console.log(data3)
//             fs.writeFile('./Data/output.txt', `${data2} \n\n${data3}`, () => {
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
const prodDetail = fs.readFileSync('./Template/prod-details.html', 'utf-8');
let replaceHtml = require('./Modules/replaceHtml');
let contactsData = fs.readFileSync('./Template/contacts-data.html', 'utf-8');
let user = require('./Modules/user.js');

let myEmitter = new user();
myEmitter.on('userCreate', (name, id) => {
    console.log(`Meow named ${name} with the id ${id} has been created!`);
})
myEmitter.emit('userCreate', 'Derek', 4);

let server = http.createServer();
server.on('request', (req, res) => {
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
        res.end(contactsData); 
        // res.end(html.replace('{{%CONTENT%}}', 'You are in Meow Contacts page.'));
    }
    else if (path.toLocaleLowerCase() === '/products'){
        if(!query.id){
            let productHtmlArray = data.map((prod) => {
                return replaceHtml(prodlist, prod);
            })
            let prodDetailResponse = html.replace('{{%CONTENT%}}', productHtmlArray.join(','));
            res.writeHead(200, {
                "Content-Type": "text/html",
                "my-header": "meow"
            })
            res.end(prodDetailResponse);
            // "You wanna buy a meow??? You've reached the right page"
            // console.log(prodpropertiesdisplay);
        }else{
            res.writeHead(200, {
                "Content-Type": "text/html",
                "my-header": "meow"
            });
            let prod = data[query.id];
            let prodDetailResponseHtml = replaceHtml(prodDetail, prod);
            res.end(html.replace('{{%CONTENT%}}', prodDetailResponseHtml)); 
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
    console.log('server started');
})

//I want to display the large-file.txt content using streams:
server.on('request', (req, res) => {
    let rs = fs.createReadStream('./Data/large-file.txt');
    rs.pipe(res);
})