// index.js

// Load the http module to create an HTTP server.
const http = require('http');

// Configure the HTTP server to respond with "Hello World" to all requests.
const server = http.createServer((req, res) => {
    res.statusCode = 200; // HTTP status code for OK
    res.setHeader('Content-Type', 'text/plain'); // Set the content type to plain text
    res.end('Hello World\n'); // Send the response body as "Hello World"
});

// Define the port number for the server to listen on.
const port = 3000;

// Start the HTTP server and have it listen on the specified port.
server.listen(port, () => {
    console.log(Server running at http://localhost:${port}/); // Log a message indicating the server is running
});
