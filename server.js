const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request made');
});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000')
})


// Localhost and Port 

// Localhost  - 127.0.0.1
// Localhost is like a domain name on the web


// Port Number - 3000   - localhost:3000
// port number ara like door into a computer 