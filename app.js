// Problem: We need a simple way to look at a user's badge count and Javascript poitsn from a web browser.

//  Solution: Use Node.js to perform the profile look ups and serve our template to client via HTTP.

// 1. Create web server

var http = require('http');

http.createServer(function (request, response) {

  homeRoute(request, response);

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

/* 2. Handle HTTP route GET / and POST / (root; or more commonly, HOME)
  if url "/" && GET request
    => show search

  if url "/" && POST request
    => redirect to /:username


*/

function homeRoute(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
}

/* 3. Handle HTTP route GET /:username (parameter) i.e. /sunilunka
  if url == "/..."
    => get JSON from Treehouse:
      >> on END, show profile
      >> on ERROR, show error

*/

/* 4. Function that handles the reading of files and merge in the values. 
  Read from file and get string. 
    => Merge values into string. 
*/

  