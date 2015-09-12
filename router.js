/* Handle HTTP route GET / and POST / (root; or more commonly, HOME)
  if url "/" && GET request
    => show search

  if url "/" && POST request
    => redirect to /:username


*/
var profile = require('./profile.js');



function home(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    if(request.url === "/"){
      response.write("Header\n");
      response.write("Search\n");
      response.end("Footer\n");
    };
};

/* Handle HTTP route GET /:username (parameter) i.e. /sunilunka
  if url == "/..."
    => get JSON from Treehouse:
      >> on END, show profile
      >> on ERROR, show error

*/

function user(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  var username = request.url.replace("/", "");
  if(username.length > 0){
    response.write("Header\n");
    
    var studentProfile = new Profile(username);

    studentProfile.on("end", console.dir);

    studentProfile.on("error", console.error);

    response.end("Footer\n");
  }
};

module.exports.home = home;
module.exports.user = user;