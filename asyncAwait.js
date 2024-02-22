//used insted of the '.then and .catch methods of promise.
//Promises are used in the backend.
//The async functions work asynchronously, moving on till the code results in a resolved promise output.
//Await keyword is used to wait till we get a resolved promise for a particular function.

//Using the following line because fetch is not included in node v14. Use npm install node-fetch before using the following line.
const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));

let newFunc = async function(){
    //-try&catch format(implemented just for practice):
    // try{
    //     let response = await fetch('https://www.youtube.com/watch?v=E_i0try2roI&ab_channel=procademy');
    //     if (!response.ok){
    //         throw new Error(`error found: ${response.status}, \n${response.statusText}`);
    //     }
    //     let data = await response.text();
    //     console.log(`\nresponse: \n${response}`);
    //     console.log(`\ndata: \n${data}`);
    // } catch(error){
    //     console.log(error);
    // }

    //normal format:
    let response = await fetch('https://www.youtube.com/watch?v=E_i0try2roI&ab_channel=procademy');
    let data = await response.text();
        console.log(`\nresponse: \n${response}`);
        console.log(`\ndata: \n${data}`);
}
newFunc();
console.log("I'm working asynchronously...");