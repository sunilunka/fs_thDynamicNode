// Problem: We need a simple way to look at a user's badge count and Javascript poitsn from a web browser.

//  Solution: Use Node.js to perform the profile look ups and serve our template to client via HTTP.

// Create web server

var router = require('./router.js')

var http = require('http');

http.createServer(function (request, response) {

  router.home(request, response);
  router.user(request, response);

}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');





/* Function that handles the reading of files and merge in the values. 
  Read from file and get string. 
    => Merge values into string. 
*/

  