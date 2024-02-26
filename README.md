# NodeJs-Codes
This is a tutorial repository for Nodejs course

refer:
https://github.com/manojjha86/NODE-JS/tree/main

video series-
https://youtu.be/5eaBOxXABkU?si=lqcxQ7xYrdmCwTSJ

Types of URLs:
1. file based- nodeapp.com/index.html
2. resource based url- nodeapp.com/Home
3. route parameter url- nodeapp.com/Home/101
4. query string url- nodeapp.com/Book?author='blah'

object destructuring-
The syntax for extracting values from an object property and assigning them to a variable.
e.g., let {query, pathname: path}
    where object is:
    Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: [Object: null prototype] {},
        pathname: '/%7B%7B%IMAGE%%7D%7D',
        path: '/%7B%7B%IMAGE%%7D%7D',
        href: '/%7B%7B%IMAGE%%7D%7D'
    }

What is an event?
-  Every action on a computer is an event. Like when a connection is made or a file is opened.

- 3 main players in event driven architecture:
    1. event emitter - emits event when something imp happens in the app. 
    eg., a req hitting the server, timer expiring, file finishing to read.
    They call event listeners.

    2. event listener - event is listened by these, they call the callback functions attached to them(event listners).
    They call event handlers.

    3. event handler - allow web pages to respond appropriately to change.