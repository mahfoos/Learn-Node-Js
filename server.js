const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('request made');  // this code run in server
    console.log(req.url, req.method); 

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url){
        case '/':
            path += 'index.html';
            break;
        case '/about-us':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }

    // res.write('<h1>Hello Mahfoos</h1>');
    // res.write('<h1>Hello Mahfoos, Aganin</h1>');
    // res.end();

    // send an html file
    fs.readFile(path, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })

});



server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})


// Localhost and Port 

// Localhost  - 127.0.0.1
// Localhost is like a domain name on the web


// Port Number - 3000   - localhost:3000
// port number ara like door into a computer 


// Status Codes
// Status codes describe the type of response sent to the browser
// 200 - OK
// 301 - Resource moved
// 404 - Not Found
// 500 - internal server error
// 100 Range - informational responses
// 200 Range - success code
// 300 Range - codes for redirects
// 400 Range - user or client error codes
// 500 Range - server error codes



